import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Layouts/Home"
import Page1 from "../Layouts/Page1"
import Page2 from "../Layouts/Page2"
import Page3 from "../Layouts/Page3"
import Page4 from "../Layouts/Page4"

const PathRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/page4" element={<Page4 />} />
				<Route exact path="/page3" element={<Page3 />} />
				<Route exact path="/page2" element={<Page2 />} />
				<Route exact path="/page1" element={<Page1 />} />
				<Route exact path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	)
}

export default PathRoutes
