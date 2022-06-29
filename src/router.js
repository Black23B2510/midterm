import Crud from "./Components/crud/crud";
import React from "react";
import Home from "./Components/homes/home";
const routes = [{
  path: '/',
  exact: true,
  main: () => <Home />
},
{
  path: '/Admin',
  exact: true,
  main: () => <Crud/>
}
];
export default routes;