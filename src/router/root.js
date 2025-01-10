import { Suspense } from 'react';

const { createBrowserRouter } = require('react-router-dom');

const Loading = <div>로딩중...</div>
const Main = import('../pages/MainPage')
const About = import('../pages/AboutPages')

const root = createBrowserRouter([
    {
        path: '',
        element:<Suspense fallback={Loading}><Main></Main></Suspense>
    },

    {
        path: 'about',
        element:<Suspense fallback={Loading}><About></About></Suspense>
    }


])

export default root;