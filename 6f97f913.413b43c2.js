(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{124:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),l=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,d=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return t?a.a.createElement(d,o(o({ref:n},b),{},{components:t})):a.a.createElement(d,o({ref:n},b))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var b=2;b<i;b++)s[b]=t[b];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},95:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(8),i=(t(0),t(124)),s={id:"microservices",title:"Microservices",sidebar_label:"Microservices"},o={unversionedId:"recipes/microservices",id:"version-legacy/recipes/microservices",isDocsHomePage:!1,title:"Microservices",description:"Exposing Unified Schema",source:"@site/versioned_docs/version-legacy/recipes/microservices.md",slug:"/recipes/microservices",permalink:"/docs/legacy/recipes/microservices",editUrl:"https://github.com/Urigo/graphql-modules/edit/master/website/versioned_docs/version-legacy/recipes/microservices.md",version:"legacy",sidebar_label:"Microservices",sidebar:"version-legacy/docs",previous:{title:"Communication Between Modules",permalink:"/docs/legacy/recipes/communication-between-modules"},next:{title:"Fetch External Data Using Data Sources",permalink:"/docs/legacy/recipes/data-sources"}},c=[{value:"Exposing Unified Schema",id:"exposing-unified-schema",children:[]},{value:"Communication Between Servers",id:"communication-between-servers",children:[{value:"Redis PubSub",id:"redis-pubsub",children:[]},{value:"Existing Implementations for PubSub",id:"existing-implementations-for-pubsub",children:[]}]}],b={rightToc:c};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"exposing-unified-schema"},"Exposing Unified Schema"),Object(i.b)("p",null,"If you wish to separate your server to smaller parts and deploy them as microservices, you can use GraphQL Modules in the way you are used to."),Object(i.b)("p",null,"That means that you can still implement small servers and then use ",Object(i.b)("strong",{parentName:"p"},"Schema Stitching")," to merge your small GraphQL schemas into a unified schema."),Object(i.b)("h2",{id:"communication-between-servers"},"Communication Between Servers"),Object(i.b)("p",null,"You can also use ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(r.a)({parentName:"strong"},{href:"https://www.apollographql.com/docs/apollo-server/features/subscriptions.html#PubSub-Implementations"}),Object(i.b)("inlineCode",{parentName:"a"},"PubSub")))," to implement messaging mechanism between GraphQL Modules servers."),Object(i.b)("p",null,"The default and built-in implementation of the ",Object(i.b)("inlineCode",{parentName:"p"},"PubSub")," uses ",Object(i.b)("inlineCode",{parentName:"p"},"EventEmitter"),".\nSince it's a very simple API, you can implement your own way of sending messages."),Object(i.b)("p",null,"You can implement your own message transmitter by implementing ",Object(i.b)("inlineCode",{parentName:"p"},"PubSub")," interface:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"export class MyPubSub {\n  subscribe<T = any>(event: string, handler: (payload: T) => void): { unsubscribe: () => void } {\n    // 1. You need to keep a record between the event and the handler\n\n    return {\n      unsubscribe: () => y{\n        // 2. Here you need to implement the logic for unsubscribing for the event\n      },\n    };\n  }\n\n  publish<T = any>(event: string, payload: T): void {\n    // 3. Here you need to implement to logic for publishing a new message\n  }\n}\n")),Object(i.b)("p",null,"Make sure to use it in a ",Object(i.b)("inlineCode",{parentName:"p"},"GraphQLModule")," declaration:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { GraphQLModule } from '@graphql-modules/core';\n\nconst CommunicationModule = new GraphQLModule({\n  provider: [MyPubSub],\n  /* ... */\n});\n")),Object(i.b)("p",null,"Finally, import ",Object(i.b)("inlineCode",{parentName:"p"},"CommunicationModule")," to all other modules where you wish to use ",Object(i.b)("inlineCode",{parentName:"p"},"PubSub"),"."),Object(i.b)("h3",{id:"redis-pubsub"},"Redis PubSub"),Object(i.b)("p",null,"Another useful trick is to use external PubSub services such as ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(r.a)({parentName:"strong"},{href:"https://redis.io/topics/pubsub"}),"Redis PubSub")),"."),Object(i.b)("p",null,"You can easily create a ",Object(i.b)("inlineCode",{parentName:"p"},"RedisPubSub")," this way:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import * as redis from 'redis';\n\nexport class PubSub {\n  _client = null;\n\n  constructor() {\n    this._client = redis.createClient();\n  }\n\n  subscribe<T = any>(\n    event: string,\n    handler: (payload: T) => void\n  ): { unsubscribe: () => void } {\n    this._client.subscribe(event);\n\n    this._client.on('message', function (channel, message) {\n      if (channel !== event) {\n        return;\n      }\n\n      handler(JSON.parse(message));\n    });\n\n    return {\n      unsubscribe: () => {\n        this._client.unsubscribe(event);\n      },\n    };\n  }\n\n  publish<T = any>(event: string, payload: T): void {\n    this._client.publish(event, JSON.stringify(payload));\n  }\n}\n")),Object(i.b)("h3",{id:"existing-implementations-for-pubsub"},"Existing Implementations for PubSub"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"PubSub")," can be replaced by other implementations.\nThe following are existing ready-to-use implementations:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("a",Object(r.a)({parentName:"strong"},{href:"https://github.com/davidyaha/graphql-redis-subscriptions"}),"Redis"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("a",Object(r.a)({parentName:"strong"},{href:"https://github.com/axelspringer/graphql-google-pubsub"}),"Google PubSub"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("a",Object(r.a)({parentName:"strong"},{href:"https://github.com/davidyaha/graphql-mqtt-subscriptions"}),"MQTT enabled broker"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("a",Object(r.a)({parentName:"strong"},{href:"https://github.com/cdmbase/graphql-rabbitmq-subscriptions"}),"RabbitMQ"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("a",Object(r.a)({parentName:"strong"},{href:"https://github.com/ancashoria/graphql-kafka-subscriptions"}),"Kafka"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("a",Object(r.a)({parentName:"strong"},{href:"https://github.com/GraphQLCollege/graphql-postgres-subscriptions"}),"Postgres")))))}l.isMDXComponent=!0}}]);