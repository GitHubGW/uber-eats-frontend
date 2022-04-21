import { ApolloClient, InMemoryCache, makeVar, ApolloLink, NormalizedCacheObject, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const TOKEN: string = "TOKEN";
const token: string | null = localStorage.getItem(TOKEN);

export const isLoggedInVar = makeVar<boolean>(Boolean(token));
export const tokenVar = makeVar<string | null>(token);

const httpLink: ApolloLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const authLink: ApolloLink = setContext((_: any, { headers }) => {
  return {
    headers: { ...headers, token: tokenVar() || "" },
  };
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              console.log("isLoggedIn read");
              return false;
            },
          },
          token: {
            read() {
              console.log("token read");
              return tokenVar();
            },
          },
        },
      },
    },
  }),
});

export default client;
