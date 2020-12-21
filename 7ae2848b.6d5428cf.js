(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,m=s["".concat(i,".").concat(b)]||s[b]||d[b]||o;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),o=(n(0),n(124)),i={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started"},c={unversionedId:"introduction/getting-started",id:"version-legacy/introduction/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Install GraphQL and GraphQL Modules using Yarn:",source:"@site/versioned_docs/version-legacy/introduction/getting-started.md",slug:"/introduction/getting-started",permalink:"/docs/legacy/introduction/getting-started",editUrl:"https://github.com/Urigo/graphql-modules/edit/master/website/versioned_docs/version-legacy/introduction/getting-started.md",version:"legacy",sidebar_label:"Getting Started",sidebar:"version-legacy/docs",next:{title:"What's a module?",permalink:"/docs/legacy/introduction/modules"}},l=[],p={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Install GraphQL and GraphQL Modules using Yarn:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"yarn add graphql @graphql-modules/core\n")),Object(o.b)("p",null,"Or Npm:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install --save graphql @graphql-modules/core\n")),Object(o.b)("p",null,"Then, create your ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLModule")," instance:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { GraphQLModule } from '@graphql-modules/core';\n\nconst graphQlModule = new GraphQLModule({\n  typeDefs: [],\n  resolvers: {},\n  imports: [],\n});\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"GraphQLModule")," helps to manage your modules, GraphQL schema, resolvers and context builders with rich communication between the modules."),Object(o.b)("p",null,"So now you have a ready-to-use ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLModule")," instance. Go ahead and create your first ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLModule"),"."),Object(o.b)("p",null,"Now it's time to implement the schema resolvers and connect it to some data."))}u.isMDXComponent=!0}}]);