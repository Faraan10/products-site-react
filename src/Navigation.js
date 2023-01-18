import {Link} from 'react-router-dom'

function Navigation(){
	return(
		<div className="navbar">
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/Products">Products</Link>
			<Link to="/contact">Contact</Link>
		</div>
		)
}
export default Navigation