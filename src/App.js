import "./App.css"
import { HashRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Pricing from "./pages/pricing/Pricing"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Error from "./pages/error/Error"
import SharedComponent from "./pages/SharedComponent"

function App() {
  return (
    <>
      <Routes>
        <HashRouter basename="/" element={<SharedComponent />}>
          <Route index element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </HashRouter>
      </Routes>
    </>
  )
}

export default App
