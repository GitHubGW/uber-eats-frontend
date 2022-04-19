import React from "react";
import ReactDOM from "react-dom/client";
import client from "./apollo";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import { HelmetProvider } from "react-helmet-async";
import "./styles/tailwind.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ApolloProvider>
  </React.StrictMode>
);
