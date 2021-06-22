import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";

function App() {
	return (
		<Router>
			<div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
				<div style={{ margin: "30px 0px" }}>
					<Link to="/">Home</Link> | <Link to="other-page">Ohter Page</Link>
				</div>
				<Route exact path="/" component={Fib} />
				<Route path="/other-page" component={OtherPage} />
			</div>
		</Router>
	);
}

export default App;
