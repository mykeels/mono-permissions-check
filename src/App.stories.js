import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { App } from "./App";
import { banks } from "./common/data/banks";

const queryClient = new QueryClient();

export default {
  title: "App",
  component: App,
  decorators: [],
};

export const Index = () => (
  <QueryClientProvider client={queryClient}>
    <App
      getBanks={async (search) =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(
              banks.filter((bank) =>
                search
                  ? bank.name?.toLowerCase().includes(search?.toLowerCase())
                  : true
              )
            );
          }, 2000);
        })
      }
    />
  </QueryClientProvider>
);
