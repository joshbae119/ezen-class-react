import { lazy, Suspense } from 'react';
import todoRouter from './todoRouter';

const { createBrowserRouter } = require('react-router-dom');

const Loading = <div>로딩중입니다...</div>
const Main = lazy(() => import('../pages/MainPage'));
const About = lazy(() => import('../pages/AboutPages'));
const Todoindex = lazy(() => import('../pages/todo/IndexPage'));


const root = createBrowserRouter([
    {
        path: '',
        element:<Suspense fallback={Loading}><Main /></Suspense>
    },

    {
        path: 'about',
        element:<Suspense fallback={Loading}><About /></Suspense>
    },
    {
        path: 'todo',
        element:<Suspense fallback={Loading}><Todoindex /></Suspense>,
        children: todoRouter()
    }

])

export default root;