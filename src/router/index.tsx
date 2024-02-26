import { lazy } from "react";
import { Layout } from "../components/Layout";

const HomePage = lazy(() => import("../pages/Home"));
const PlansPage = lazy(() => import("../pages/Plans"));
const SummaryPage = lazy(() => import("../pages/Summary"));

import { routes } from "./routes";

import { RouteObject, createBrowserRouter } from "react-router-dom";

const routesObject: RouteObject[] = [
  {
    path: routes.Home,
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: routes.Plans,
    element: (
      <Layout>
        <PlansPage />
      </Layout>
    ),
  },
  {
    path: routes.Summary,
    element: (
      <Layout>
        <SummaryPage />
      </Layout>
    ),
  },
];

export const router = createBrowserRouter(routesObject);
