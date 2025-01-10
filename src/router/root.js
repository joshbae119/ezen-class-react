import { lazy, Suspense } from 'react';

const { createBrowserRouter } = require('react-router-dom');
const Main = lazy(() => import('../pages/MainPage'));
const About = lazy(() => import('../pages/AboutPages'));
const Loading = <div>로딩중입니다...</div>

const root = createBrowserRouter([
    {
        path: '',
        element:<Suspense fallback={Loading}><Main /></Suspense>
    },

    {
        path: 'about',
        element:<Suspense fallback={Loading}><About /></Suspense>
    }


])

export default root;