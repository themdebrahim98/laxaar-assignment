import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from "./pages/DashboardLayout";
import Customers from "./components/Customers/Customers";
import { ConfigProvider } from "antd";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout title={"Dashboard"}>dashboard</DashboardLayout>,
  },
  {
    path: "service",
    element: <DashboardLayout title={"Services"}>service</DashboardLayout>,
  },
  {
    path: "invoice",
    element: <DashboardLayout title={"invoice"}>invoice</DashboardLayout>,
  },
  {
    path: "customers",
    element: (
      <DashboardLayout title={"Customers"}>
        <Customers />
      </DashboardLayout>
    ),
  },
  {
    path: "products",
    element: <DashboardLayout title={"products"}>product</DashboardLayout>,
  },
  {
    path: "offer",
    element: (
      <DashboardLayout title={"Offered Services"}>
        Offered Services
      </DashboardLayout>
    ),
  },
  {
    path: "parts",
    element: <DashboardLayout title={"Parts"}>parts</DashboardLayout>,
  },
  {
    path: "enquiries",
    element: <DashboardLayout title={"enquiries"}>enquiries</DashboardLayout>,
  },
  {
    path: "users",
    element: <DashboardLayout title={"users"}>users</DashboardLayout>,
  },
  {
    path: "permission",
    element: <DashboardLayout title={"permission"}>permission</DashboardLayout>,
  },
  {
    path: "role",
    element: <DashboardLayout title={"role"}>role</DashboardLayout>,
  },
  {
    path: "email-templates",
    element: (
      <DashboardLayout title={"Email Template"}>Email Template</DashboardLayout>
    ),
  },
  {
    path: "pdf-templates",
    element: (
      <DashboardLayout title={"Pdf Templates"}>Pdf Templates</DashboardLayout>
    ),
  },
  {
    path: "theming",
    element: <DashboardLayout title={"Theming"}>Theming</DashboardLayout>,
  },
  {
    path: "payment-gateway",
    element: (
      <DashboardLayout title={"Payment Gateway"}>
        Payment Gateway
      </DashboardLayout>
    ),
  },
  {
    path: "backup",
    element: <DashboardLayout title={"backup"}>backup</DashboardLayout>,
  },
  {
    path: "configuration",
    element: (
      <DashboardLayout title={"configuration"}>configuration</DashboardLayout>
    ),
  },
  {
    path: "settings",
    element: <DashboardLayout title={"settings"}>settings</DashboardLayout>,
  },
  {
    path: "*",
    element: <DashboardLayout title={"Dashboard"}>Not Found</DashboardLayout>,
  },
]);

const customTheme = {
  token: {
    colorPrimary: "#F87060",
    borderRadius: 2,
    colorBgContainer: "#FFFFFF",
  },
};

function App() {
  return (
    <>
      <ConfigProvider theme={customTheme}>
        <RouterProvider router={routers} />
      </ConfigProvider>
    </>
  );
}

export default App;
