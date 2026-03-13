import MainLayout from "./layouts/MainLayout";
import './styles/global.css';
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    <MainLayout>
      <AppRoutes />
    </MainLayout>
    </BrowserRouter>
  )
}




export default App;