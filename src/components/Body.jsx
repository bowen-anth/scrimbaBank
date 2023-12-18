import React, { useState } from "react"
import { accounts } from "./data/accountsData.jsx"

export default function Body() {

    const [selectedState, setSelectedState] = useState({
        mainAccount: true,
        expenses: false,
        savings: false
    })
    console.log(selectedState)
    console.log(accounts)

    const handleChange = (event) => {
        const { value } = event.target;

        setSelectedState({
          mainAccount: value === 'mainAccount',
          expenses: value === 'expenses',
          savings: value === 'savings',
        });
    }
// ghostoy from https://stackoverflow.com/questions/6784894/add-commas-or-spaces-to-group-every-three-digits
    function commafy( num ) {
        var str = num.toString().split('.');
        if (str[0].length >= 4) {
            str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        }
        if (str[1] && str[1].length >= 5) {
            str[1] = str[1].replace(/(\d{3})/g, '$1 ');
        }
        return str.join('.');
    }

    return (
        <>
                <div className="button-container">
                    <button>Pay</button> <button>Transfer</button>
                </div>
            {/* Accounts Container: Start */}
            <div className="main-container">

                <div className="accounts-container">
                    <h2>Accounts</h2>
                    <div className="accounts-item-container">
                        <form id="account-button-form">
                                    <input 
                                        type="radio" 
                                        id="mainAccount"
                                        name="accountType"
                                        onChange={handleChange}
                                        // value={selectedState.mainAccount}
                                        value="mainAccount"
                                        checked={selectedState.mainAccount}
                                        
                                    />
                                    <label htmlFor="mainAccount">Main Account <span>${commafy(accounts[0]?.balance)}</span></label>
                                    <input 
                                        type="radio" 
                                        id="expenses"
                                        name="accountType"
                                        onChange={handleChange}
                                        checked={selectedState.expenses}
                                        // value={selectedState.expenses}
                                        value="expenses"
                                    />
                                    <label htmlFor="expenses">Expenses <span>${commafy(accounts[1]?.balance)}</span></label>
                                    <input 
                                        type="radio" 
                                        id="savings"
                                        name="accountType"
                                        onChange={handleChange}
                                        checked={selectedState.savings}
                                        // value={selectedState.savings}
                                        value="savings"
                                    />
                                <label htmlFor="savings">Savings <span>${commafy(accounts[2]?.balance)}</span></label>
                        </form>
                    </div>
                </div>
             {/* Accounts Container: End */}

             {/* Spendings Container: Start */}
                <div className="right-container">
                    <div className="spendings-container">
                        {accounts.map((account) => {
                            if (account.id === 1) {
                                return (
                                    <div key={account.id}>
                                        <h2>{account.title}</h2>
                                        {account.spendings.map((spending) => (
                                            <div key={spending.category} className="spending-bar">
                                                <div className="spending-span-container">
                                                    <span>{spending.category}: </span>
                                                    <span>${spending.spent}</span>
                                                </div>
                                                <div className="bar" style={{ width: `${spending.spent / 20}%` }}>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )
                            }
                            return null;
                        })}
                    </div>
                </div>
            </div>
            {/* Main Container: End */}
        </>
    )
}