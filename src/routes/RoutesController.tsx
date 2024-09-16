import { useRoutes } from "react-router-dom"
import { lazy } from "react"
import { SuspenseElement as Suspense } from "../utils"
const Dashboard = lazy(() => import("./dashboard/Dashboard"))
const NewTrans = lazy(() => import("./dashboard/newTrans/NewTrans"))
const Trans = lazy(() => import("./dashboard/trans/Trans"))
const Menu = lazy(() => import("./dashboard/menu/Menu"))

const RoutesController = () => {
  return  useRoutes([
    {
      path: "",
      element: <Suspense><Dashboard/></Suspense>,
      children: [
        {
          path: "",
          element: <Suspense><Menu/></Suspense>,
        },
        {
          path: "dashboard/new-transaction",
          element: <Suspense><NewTrans/></Suspense>,
        },
        {
          path: "dashboard/transactions",
          element: <Suspense><Trans/></Suspense>,
        },
      ]
    }
  ])
}

export default RoutesController