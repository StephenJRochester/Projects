import Header from "../components/Header";


function MainLayout({ children }) {
    return (
        <div className="main-layout">
            <title>Main Layout</title>
                      
            <Header classname = "header"/>
            <main>
                {children}
            </main>
            
        </div>
    );
}

export default MainLayout;
