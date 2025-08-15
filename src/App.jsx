import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
    const [cart, setCart] = useState({});
    return (
        <>
            <Header />
            <main>
                <Outlet context={{
                    cart,
                    setCart,
                }} />
            </main>
            <Footer />
        </>
    );
}