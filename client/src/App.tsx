import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";

function App() {
	return (
		<Router>
			<Link to="/">Home</Link>
			<Link to="other-page">Ohter Page</Link>
			<Route exact path="/" component={Fib} />
			<Route path="/other-page" component={OtherPage} />
		</Router>
	);
}

export default App;
