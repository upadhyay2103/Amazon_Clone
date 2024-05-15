import './Checkout.css'
import CheckoutProducts from './CheckoutProducts.jsx';
import { useStateValue } from './StateProvider.jsx';
import Subtotal from './Subtotal.jsx';
import FlipMove from 'react-flip-move'

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    let naam = user?.email ? user.email.slice(0, user.email.indexOf('@')) : '';
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className='checkout__ad' />
                <div>
                    <h3>Hello, {naam}</h3>
                    <h2 className="checkout__title">Your Shopping basket</h2>
                        {basket.map(item =>
                            <CheckoutProducts key={item.id} id={item.id} image={item.image} title={item.title} price={item.price} rating={item.rating} />
                        )}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal></Subtotal>
            </div>
        </div>
    );
}

export default Checkout;
