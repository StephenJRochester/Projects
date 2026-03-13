import React from "react";
import Navbar from "../components/Navbar";



function MainLayout({ children }) {
    return (
        <div className="main-layout">
            <title>Main Layout</title>

            <h1>Main Layout</h1>
            <Navbar/>
            <main>
                {children}
            </main>
            
        </div>
    );
}

export default MainLayout;
