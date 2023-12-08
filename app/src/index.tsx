import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import { ErrorPage } from "./pages/ErrorPage"
import Spinner from "./components/Spinner"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/user/12"} />,
    errorElement: <ErrorPage />,
    loader: () => <Spinner />,
  },
  {
    path: "/user/:userId",
    element: <App />,
  },
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<Spinner />} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)
