import './ProductCard.css'
export const ProductCard = ({price, imageUrl, title, discount}) => {
    return (
        <div className={'product-card'}>
            <img
                src={imageUrl}
                alt="товар"
                className={'product-card__image'}
            />
            {
                discount ?
                <div className={'product-card__price__container'}>
                    <span className={'product-card__price-after-discount'}>{price - price*discount} ₽</span>
                    <span className={'product-card__price-before-discount'}>{price} ₽</span>
                </div> :
                <div className={'product-card__price product-card__price__container'}>{price} ₽</div>
            }
            <p>{title}</p>
        </div>
    )
}
