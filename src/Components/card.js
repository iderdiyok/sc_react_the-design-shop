const Card = (props) =>{
    console.log(props);
    return(
        <div className="product">
            <img src={props.img} alt="" />
            <article className="productDetails">
                <div className="imgName">
                    <h4>{props.name}</h4>
                    <p>{props.price}</p>
                </div>
            </article>
        </div>
    )
}
export default Card