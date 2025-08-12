import App from "./App";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "collections/:productType", element: <Collection /> },
            { path: "product/:id", element: <ProductDetail /> },
            { path: "cart", element: <Cart /> },
            { path: "*", element: <ErrorPage /> },
        ],
    },
];

export default routes;