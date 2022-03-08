import products from "../data/products.json"
import Card from "./card"
const CardSection = () =>{
    return(
        <main>
        <section>
            {
                products.map((item, key) => key < 4?
                    <Card
                    name = {item.name}
                    price = {item.price}
                    img = {item.img}
                />
                : null
                )
            }
        </section>
        <section>
            {
                products.map((item, key) => key > 3?
                    <Card
                    name = {item.name}
                    price = {item.price}
                    img = {item.img}
                />
                : null
                )
            }
        </section>
        </main>
    )
}

export default CardSection