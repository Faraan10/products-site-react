function Products(props){
	return(
		<div>
		{
			props.products.map((pitem)=>(
				<div key={pitem.id} className="Product-item">
					<img src={pitem.pic}/>
					<p className="para">{pitem.name}</p>
					<p className="para">{pitem.price}</p>
				</div>

				))
		}
		</div>
		)
}
export default Products