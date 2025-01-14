import { lazy, Suspense } from "react"
import { Navigate } from "react-router-dom"

const Loading = <div>로딩중입니다...</div>
const TodoList = lazy(() => import("../pages/todo/ListPage"))

const todoRouter = () => {
    return [
        {
            path: "list",
            element: <Suspense fallback={Loading}><TodoList /></Suspense>
        },
        {
            path: "",
            element: <Navigate replace to="list"></Navigate>
        }
    ]
}

export default todoRouter;