import { Router } from "react-router-dom";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "collections/:productType", element: <ProductSection /> },
            { path: "product/:id", element: <ProductDetail /> },
            { path: "cart", element: <Cart /> },
            { path: "*", element: <ErrorPage /> },
        ],
    },
];

export default routes;