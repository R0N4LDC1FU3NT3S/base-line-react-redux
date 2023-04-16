import { StrictMode } from "react"
import ReactDom from "react-dom/client"
import { Provider } from "react-redux"

import Routes from "./Routes"
import storeInstance from "./Redux/Store"
import "./app.css"

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(
	<StrictMode>
		<Provider store={storeInstance}>
			<Routes />
		</Provider>
	</StrictMode>
)
