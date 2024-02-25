import { Suspense } from "react";
import { UserInsuranceContextProvider } from "./context/UserInsuranceContext";
import { router } from "./router/index";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { RouterProvider } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserInsuranceContextProvider>
        <Suspense fallback={<div></div>}>
          <RouterProvider router={router} />
        </Suspense>
      </UserInsuranceContextProvider>
    </QueryClientProvider>
  );
}

export default App;
