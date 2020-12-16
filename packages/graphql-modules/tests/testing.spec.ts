import 'reflect-metadata';
import { concatAST } from 'graphql';
import {
  createModule,
  testkit,
  gql,
  Injectable,
  Inject,
  InjectionToken,
  CONTEXT,
  Scope,
} from '../src';

describe('testModule', () => {
  test('should replace extensions with definitions on demand', () => {
    const initialModule = createModule({
      id: 'tested',
      typeDefs: gql`
        extend type Query {
          foo: Foo!
        }

        type Foo {
          id: ID
        }
      `,
    });
    expect(() =>
      testkit.testModule(initialModule, {
        replaceExtensions: true,
      })
    ).not.toThrow();
  });

  test('should add typeDefs to a module on demand', () => {
    const initialModule = createModule({
      id: 'tested',
      typeDefs: gql`
        type Query {
          foo: Foo!
        }
      `,
    });

    expect(() =>
      testkit.testModule(initialModule, {
        typeDefs: gql`
          type Foo {
            id: ID
          }
        `,
      })
    ).not.toThrow();
  });

  test('should add resolvers to a module on demand', async () => {
    const initialModule = createModule({
      id: 'tested',
      typeDefs: gql`
        type Query {
          foo: Foo!
        }

        type Foo {
          id: ID
        }
      `,
      resolvers: {
        Query: {
          foo() {
            return {
              id: 'not-mocked',
            };
          },
        },
      },
    });

    const app = testkit.testModule(initialModule, {
      resolvers: {
        Foo: {
          id() {
            return 'mocked';
          },
        },
      },
    });

    const result = await testkit.execute(app, {
      document: gql`
        {
          foo {
            id
          }
        }
      `,
    });

    expect(result.data).toEqual({
      foo: {
        id: 'mocked',
      },
    });
  });

  test('should overwrite providers in a module on demand', async () => {
    @Injectable({
      scope: Scope.Singleton,
    })
    class Data {
      getById(id: string) {
        return {
          id,
        };
      }
    }

    const initialModule = createModule({
      id: 'tested',
      typeDefs: gql`
        type Query {
          foo(id: ID!): Foo!
        }

        type Foo {
          id: ID
        }
      `,
      resolvers: {
        Query: {
          foo(
            _: {},
            { id }: { id: string },
            { injector }: GraphQLModules.ModuleContext
          ) {
            return injector.get(Data).getById(id);
          },
        },
      },
    });

    const app = testkit.testModule(initialModule, {
      providers: [
        {
          provide: Data,
          useValue: {
            getById() {
              return {
                id: 'mocked',
              };
            },
          },
        },
      ],
    });

    const result = await testkit.execute(app, {
      document: gql`
        {
          foo(id: "not-mocked") {
            id
          }
        }
      `,
    });

    expect(result.errors).not.toBeDefined();
    expect(result.data).toEqual({
      foo: {
        id: 'mocked',
      },
    });
  });

  test('should inherit typeDefs from other modules', () => {
    const initialModule = createModule({
      id: 'tested',
      typeDefs: gql`
        type Query {
          foo: Foo!
          bar: Bar!
        }
      `,
    });

    const externalModule = createModule({
      id: 'external',
      typeDefs: gql`
        type Bar {
          id: ID!
        }
      `,
    });

    expect(() =>
      testkit.testModule(initialModule, {
        typeDefs: gql`
          type Foo {
            id: ID
          }
        `,
        inheritTypeDefs: [externalModule],
      })
    ).not.toThrow();
  });

  test('should inherit typeDefs from other modules and do tree-shaking of types', () => {
    const initialModule = createModule({
      id: 'tested',
      typeDefs: gql`
        type Query {
          foo: Foo!
          bar: Bar!
        }
      `,
    });

    const externalModule = createModule({
      id: 'external',
      typeDefs: gql`
        type Bar {
          id: ID!
        }

        extend type Query {
          unused: Unused
        }

        type Unused {
          id: ID!
        }
      `,
    });

    const app = testkit.testModule(initialModule, {
      typeDefs: gql`
        type Foo {
          id: ID
        }
      `,
      inheritTypeDefs: [externalModule],
    });

    const typeDefs = concatAST(app.typeDefs);

    expect(
      typeDefs.definitions.find((def: any) => def?.name.value === 'Unused')
    ).toBeUndefined();
  });
});

describe('testInjector', () => {
  test('should provide an empty context', () => {
    @Injectable({
      scope: Scope.Singleton,
    })
    class Data {
      constructor(@Inject(CONTEXT) private context: any) {}
      getById(id: string) {
        return {
          ...this.context,
          id,
        };
      }
    }

    const injector = testkit.testInjector([Data]);
    const data = injector.get(Data).getById('mocked');

    expect(data.id).toEqual('mocked');
    expect(Object.keys(data)).toHaveLength(1);
  });

  test('should instantiate all providers', () => {
    const UNKNOWN = new InjectionToken<unknown>('UNKNOWN-TOKEN');

    @Injectable({
      scope: Scope.Singleton,
    })
    class Data {
      constructor(@Inject(UNKNOWN) private missing: any) {}
      getById(id: string) {
        return {
          ...this.missing,
          id,
        };
      }
    }

    expect(() => testkit.testInjector([Data])).toThrowError(/UNKNOWN-TOKEN/);
  });
});

describe('readProviderOptions', () => {
  test('should instantiate all providers', () => {
    @Injectable({
      scope: Scope.Singleton,
    })
    class Data {
      getById(id: string) {
        return {
          id,
        };
      }
    }

    const options = testkit.readProviderOptions(Data);

    expect(options?.scope).toBe(Scope.Singleton);
    expect(options?.global).not.toBe(true);
    expect(options?.executionContextIn).not.toBeDefined();
  });
});
