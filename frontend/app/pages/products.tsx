import ProductCard from "../components/product-card";



export default function Products(){

    const pro = {
        name:'item1',
        price:20
    }



    return(
        <section className="flex">
            <ProductCard product={pro} />
        </section>
    )

}