import { ProductCard } from "./ProductCard.jsx";
import './ProductList.css'
export const ProductList = ({products}) => {
    return (
        <div className={'product-list'}>
            {products.map(item => (
                <ProductCard
                    imageUrl={item.imageUrl}
                    price={item.price}
                    title={item.title}
                    discount={item.discount}
                    key={item.id}
                />
            ))}
        </div>
    )
}
