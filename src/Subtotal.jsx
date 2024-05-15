import { useStateValue } from './StateProvider';
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
  const navigate = useNavigate();
  const [{basket},dispatch]=useStateValue();
  var sum=0;
  for(var i=0;i<basket.length;i++)
  {
    sum=sum+basket[i].price;
  }
  return (
    <div className='subtotal'>
      <CurrencyFormat
      renderText={(value)=>
    <>
    <p>
        SubTotal ({basket.length} items): <strong>{value}</strong>
    </p>
    <small className='subtotal__gift'>
        <input type="checkbox" name="" id="" />This order contains a gift
    </small>
    </>}
    decimalScale={2}
    value={sum}
    displayType={"text"}
    thousandSeparator={true}
    prefix={'$'}
    />
    <button onClick={e=>navigate('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
