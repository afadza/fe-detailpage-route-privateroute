import { Component } from "react";
import { Outlet, Navigate } from "react-router-dom";

class PrivateRoute extends Component {
  render() {
    const isLogin = true;
  return isLogin ? <Outlet /> : <Navigate to="/" />;
}
}

export default PrivateRoute;