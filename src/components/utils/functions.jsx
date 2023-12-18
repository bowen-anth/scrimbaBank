// import React from "react"
import { accounts } from "../data/accountsData.jsx"

export const renderContent = (selectedState, setSelectedState) => {
    console.log(accounts)

    const handleChange = (event) => {
        const {name, value, type, checked} = event.target
        setSelectedState(prevState => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value
        }))
        // setTotal((prevTotal) => {
        //     if (checked) {
        //         switch (name) {
        //             case 'washCar':
        //                 return prevTotal + 10;
        //             case 'mowLawn':
        //                 return prevTotal + 20;
        //             case 'pullWeeds':
        //                 return prevTotal + 30;
        //             default:
        //                 return prevTotal;
        //         }
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
            {/* Accounts Container: Start */}
            <div className="main-container">
                <div className="accounts">
                    <h2>Accounts</h2>
                    <div className="accounts-item-container">
                        <form id="account-button-form">
                                    <input 
                                        type="checkbox" 
                                        id="mainAccount"
                                        name="mainAccount"
                                        onChange={handleChange}
                                        value={selectedState.mainAccount}
                                        checked={selectedState.mainAccount}
                                    />
                                    <label htmlFor="mainAccount">Main Account <span>${commafy(accounts[0]?.balance)}</span></label>
                                    <input 
                                        type="checkbox" 
                                        id="expenses"
                                        name="expenses"
                                        onChange={handleChange}
                                        value={selectedState.expenses}
                                    />
                                    <label htmlFor="expenses">Expenses <span>${commafy(accounts[1]?.balance)}</span></label>
                                    <input 
                                        type="checkbox" 
                                        id="savings"
                                        name="savings"
                                        onChange={handleChange}
                                        value={selectedState.savings}
                                    />
                                <label htmlFor="savings">Savings <span>${commafy(accounts[2]?.balance)}</span></label>
                        </form>
                    </div>
                </div>
             {/* Accounts Container: End */}

             {/* Spendings Container: Start */}
                <div className="right-container">
                    <div className="spendings-container">
                        <h2>Spendings</h2>

                    </div>
                </div>
            </div>
            {/* Main Container: End */}
        </>
    )
}