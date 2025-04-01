import App from "./App";

import { HomePage, Contact, About, Projects } from "./pages";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    // Holds the main page structure - header, sidebar, footer, etc.
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      // renders at root
      { index: true, element: <HomePage /> },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
];

export default routes;
