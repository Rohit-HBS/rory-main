// graphql-request.d.ts
declare module 'graphql-request' {
    export function gql(strings: TemplateStringsArray, ...values: any[]): string;
    export class GraphQLClient {
      constructor(endpoint: string, options?: any);
      request<T = any>(query: string, variables?: any): Promise<T>;
    }
  }