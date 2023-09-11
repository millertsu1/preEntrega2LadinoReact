import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "../img/shopping-cart.png";

    return (
        <div>
            <img className='imgCarrito' src={imgCarrito} alt="Carrito de Compras" />
            <strong className='numerito'> 3 </strong>
        </div>
    )
}

export default CartWidget