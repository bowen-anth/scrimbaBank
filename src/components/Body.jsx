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

    function expensesRender() {
        return (
          <div className="spendings-container">
            {accounts.map((account) => {
              if (account.id === 2) {
                return (
                  <div key={account.id}>
                    <h2>{account.title}</h2>
                    {account.spendings.map((expense) => (
                      <div key={expense.category} className="spending-bar">
                        <div className="spending-span-container">
                          <span>{expense.category}: </span>
                          <span>${expense.spent}</span>
                        </div>
                        <div
                          className="bar"
                          style={{ width: `${expense.spent * 3}%` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                );
              }
              return null;
            })}
          </div>
        );
      }

      function savingsRender() {
        return (
          <div className="spendings-container">
            {accounts.map((account) => {
              if (account.id === 3) {
                return (
                  <div key={account.id}>
                    <h2>{account.title}</h2>
                    {account.savings.map((saving) => (
                      <div key={saving.category} className="spending-bar">
                        <div className="spending-span-container">
                          <span>{saving.category}: </span>
                          <span>${saving.saved}</span>
                        </div>
                        <div
                          className="bar"
                          style={{ width: `${saving.saved / 300}%` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                );
              }
              return null;
            })}
          </div>
        );
      }
    
      return (
        <>
          <div className="button-container">
            <button>Pay</button> <button>Transfer</button>
          </div>
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
                    value="mainAccount"
                    checked={selectedState.mainAccount}
                  />
                  <label htmlFor="mainAccount">
                    Main Account <span>${commafy(accounts[0]?.balance)}</span>
                  </label>
                  <input
                    type="radio"
                    id="expenses"
                    name="accountType"
                    onChange={handleChange}
                    checked={selectedState.expenses}
                    value="expenses"
                  />
                  <label htmlFor="expenses">
                    Expenses <span>${commafy(accounts[1]?.balance)}</span>
                  </label>
                  <input
                    type="radio"
                    id="savings"
                    name="accountType"
                    onChange={handleChange}
                    checked={selectedState.savings}
                    value="savings"
                  />
                  <label htmlFor="savings">
                    Savings <span>${commafy(accounts[2]?.balance)}</span>
                  </label>
                </form>
              </div>
            </div>
    
            <div className="right-container">
              {selectedState.mainAccount && (
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
                              <div
                                className="bar"
                                style={{ width: `${spending.spent / 20}%` }}
                              ></div>
                            </div>
                          ))}
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              )}
    
              {selectedState.expenses && expensesRender()}
              {selectedState.savings && savingsRender()}
    
            </div>
          </div>
        </>
      );
    }