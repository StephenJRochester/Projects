import MainLayout from "./layouts/MainLayout";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    <MainLayout>
      <Navbar />
      <AppRoutes />
    </MainLayout>
    </BrowserRouter>
  )
}




export default App;