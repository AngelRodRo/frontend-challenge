import { Layout } from './components/Layout';
import { UserInsuranceContextProvider } from './context/UserInsuranceContext';
import { router } from './router/index';

import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';

import {
  RouterProvider,
} from "react-router-dom";

const queryClient = new QueryClient()


function App() {
  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <UserInsuranceContextProvider>
            <RouterProvider router={router} />
        </UserInsuranceContextProvider>
      </QueryClientProvider>
    </Layout>
  )
}

export default App
