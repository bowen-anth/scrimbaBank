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
                                    <label htmlFor="mainAccount">Main Account</label>
                                    <input 
                                        type="checkbox" 
                                        id="expenses"
                                        name="expenses"
                                        onChange={handleChange}
                                        value={selectedState.expenses}
                                    />
                                    <label htmlFor="expenses">Expenses</label>
                                    <input 
                                        type="checkbox" 
                                        id="savings"
                                        name="savings"
                                        onChange={handleChange}
                                        value={setSelectedState.savings}
                                    />
                                <label htmlFor="savings">Savings</label>
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