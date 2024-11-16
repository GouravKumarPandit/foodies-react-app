import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { 
    About,
    ExploreFoods,
    FAQ,
    Testimonials
} from './pages/index'
import Home from './pages/Home.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about-us",
                element: <About />,
            },
            {
                path: "/explore-foods",
                element: <ExploreFoods />,
            },
            {
                path: "/review",
                element: <Testimonials />,
            },
            {
                path: "/faq",
                element: <FAQ />,
            },
        ]
    },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
