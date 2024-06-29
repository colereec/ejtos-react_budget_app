import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ChangeCurrency = () => {
    const { dispatch } = useContext(AppContext);
    const { currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    //const { budget } = useContext(AppContext);
    //const [newBudget, setNewBudget] = useState(budget);
    //const { expenses } = useContext(AppContext);
    /*const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);*/
    const handleCurrencyChange = (event) => {

        setNewCurrency(event.target.value);

        const currentCurrency = () => "Currency" + event.target.innerHTML;

        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });

    }
    return (
<div>
<select className='alert alert-success' id="inputGroupSelect01" onChange={handleCurrencyChange}>
                <option defaultValue>Currency [{currency}]</option>
                <option value="$" name="Dollar">$ Dollar</option>
                <option value="£" name="Pound">£ Pound</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Rupee">₹ Rupee</option>
                  </select>
</div>
    );
};
export default ChangeCurrency;