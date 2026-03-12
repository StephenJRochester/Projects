import React from "react";



function MainLayout({ children }) {
    return (
        <div className="main-layout">
            
            <main>
                {children}
            </main>
            
        </div>
    );
}

export default MainLayout;
