import React, { useState } from 'react'
import '../css/currency.css'
import { BsArrowRightCircle } from "react-icons/bs";
import axios from 'axios';

let BASE_URL= "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_lqp9wBetBuOozmT8mTNX3jk9FhwjmxzvQrh4Ydbm";

function Currency() {

  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('TRY');
  const [result, setResult] = useState(1);

  const exchange = async () => {
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
    const result = ((response.data.data[toCurrency]) * amount).toFixed(2);
    setResult(result);
  }

  return (
    <div className='currency-div'>
        <div style={{backgroundColor: 'black', color : 'white', fontSize: '29px', fontFamily: 'arial', width: '100%', textAlign: 'center'}}>
            <h3>Döviz Kuru Hesaplama Uygulaması</h3>
        </div>

        <div style={{marginTop: '25px'}}>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        type="number" className='amount' />

        <select onChange = {(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
            <option>USD</option>
            <option>EUR</option>
            <option>TRY</option>
        </select>

    <BsArrowRightCircle style= {{fontSize : '50px', marginRight : '10px'}} />

        <select onChange = {(e) => setToCurrency(e.target.value)} className='to-currency-option'>
         <option>TRY</option>
         <option>USD</option>
         <option>EUR</option>
        </select>
        <input value ={result} onChange = {(e) => setResult(e.target.value)} type="number" className='result' />
        </div>
        <div>
        <button
        onClick={exchange} className='exchange-button'>Çevir</button>
        </div>
    </div>
  )
}

export default Currency