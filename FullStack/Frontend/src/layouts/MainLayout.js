import React from "react";



function MainLayout({ children }) {
    return (
        <div className="main-layout">
            <title>Main Layout</title>
            <h1>Main Layout</h1>
            <main>
                {children}
            </main>
            
        </div>
    );
}

export default MainLayout;
