# TypeScript and GraphQL Example

One of the strengths of GraphQL is [enforcing data types on runtime](https://graphql.github.io/graphql-spec/June2018/#sec-Value-Completion). Further, TypeScript and [GraphQL Code Generator](https://graphql-code-generator.com/) (graphql-codegen) make it safer by typing data statically, so you can write truly type-protected code with rich IDE assists.

This template extends [Apollo Server and Client Example](https://github.com/vercel/next.js/tree/canary/examples/api-routes-apollo-server-and-client#readme) by rewriting in TypeScript and integrating [graphql-let](https://github.com/piglovesyou/graphql-let#readme), which runs [TypeScript React Apollo](https://graphql-code-generator.com/docs/plugins/typescript-react-apollo) in [graphql-codegen](https://github.com/dotansimha/graphql-code-generator#readme) under the hood.
