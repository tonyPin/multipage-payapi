import "./App.css"
import { Route, Routes } from "react-router-dom"
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
        <Route path="/multipage" element={<SharedComponent />}>
          <Route index element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
