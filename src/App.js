import { Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home/Home"
import Logement from "./components/pages/Logement/logement"
import About from "./components/pages/About/about"
import Error from "./components/pages/404/404"
import Header from "./components/Header/header"
import Footer from "./components/Footer/footer"

function App() {
  return (
    <div className="App">
		<Header/>
		<Routes>
			<Route path="/" element={<Home/>}></Route>
			<Route path="/logement/:id" element={<Logement/>}></Route>
			<Route path="/about" element={<About/>}></Route>	
			<Route path="/*" element={<Error/>}></Route>
		</Routes>      
		<Footer/>
    </div>
  )
}

export default App
