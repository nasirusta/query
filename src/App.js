import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./rooutes";
import GetPage from "GetPage";

const App = () => {
  const user = true;

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, key) => {
          if (route.auth && !user) {
            return (
              <Route
                exact={route.exact}
                path="*"
                key={key}
                element={<Navigate to="/login" replace />}
              />
            );
          } else {
            return (
              <Route
                exact={route.exact}
                path={route.path}
                key={key}
                element={<GetPage out={route.out} Page={route.component} />}
              />
            );
          }
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
