import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/app-routes"
import Header from "./pages/layout/header"
import Footer from "./pages/layout/footer"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="min-h-[calc(100vh-96px)]">
        <AppRoutes />
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
