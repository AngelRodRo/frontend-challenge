
import { Layout } from '../components/Layout';
import HomePage from '../pages/Home';
import PlansPage from '../pages/Plans';
import SummaryPage from '../pages/Summary';


import { routes } from './routes';

import {
  RouteObject,
  createBrowserRouter,
} from "react-router-dom";


const routesObject: RouteObject[] = [
    {
      path: routes.Home,
      element: <Layout><HomePage/></Layout> ,
    },
    {
      path: routes.Plans,
      element: <Layout><PlansPage /></Layout>
    },
    {
      path: routes.Summary,
      element: <Layout><SummaryPage /></Layout>
    }
  ]

export const router = createBrowserRouter(routesObject);