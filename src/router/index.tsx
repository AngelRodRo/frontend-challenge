
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
      element: <HomePage/>,
    },
    {
      path: routes.Plans,
      element: <PlansPage />
    },
    {
      path: routes.Summary,
      element: <SummaryPage />
    }
  ]

export const router = createBrowserRouter(routesObject);