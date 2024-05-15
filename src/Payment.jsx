import { Link } from 'react-router-dom';
import CheckoutProducts from './CheckoutProducts.jsx';
import './Payment.css'
import { useStateValue } from './StateProvider';

function Payment() {
    const [{basket,user},dispatch]=useStateValue();
  return (
    <div className='payment'>
        <div className="payment__container">
            <h1>
                Checkout (<Link to='/checkout'>{basket?.length} items </Link>)
             </h1>

            {/* payment section - delivering address */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment__address">
                    <p>{user?.email}</p>
                    <p>123, React lane</p>
                    <p>Los Angeles, CA</p>
                </div>
            </div>

            {/* payment section - review the products */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Review items and delivery</h3>
                </div>
                <div className="payment__items">
                    {basket.map(item=>(
                        <CheckoutProducts
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                </div>
            </div>

            {/* payment section -payment methodlogy */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Payment Methods</h3>
                </div>
                <div className="payment__details">
                    {/* stripe magic will work */}
                </div>
            </div>
        </div>
    </div>
  );
}

export default Payment;
