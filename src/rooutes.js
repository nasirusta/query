import {HomePage} from "./pages";

export const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage,
    auth: false,
  },
];
