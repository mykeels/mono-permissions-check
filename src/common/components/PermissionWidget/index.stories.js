import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { PermissionWidget } from ".";
import { banks } from "../../data/banks";

const queryClient = new QueryClient();

export default {
  title: "PermissionWidget",
  component: PermissionWidget,
  decorators: [],
};

export const Index = () => (
  <QueryClientProvider client={queryClient}>
    <PermissionWidget
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
