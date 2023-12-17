import React, { useState } from "react"
import accounts from "./data/accountsData.jsx"

export default function Main() {

    const [selected, setSelected] = useState({
        mainAccount: false,
        expenses: false,
        savings: false
    })
console.log(selected)
    return (
        <>
            <main>
                <div className="button-container">
                    <button>Pay</button> <button>Transfer</button>
                </div>
                <div className="accounts-container">
                    {!selected.mainAccount && 
                    <div className="accounts">
                        <h2>Accounts</h2>
                    </div>
                    }
                    {selected.mainAccount &&
                    <div className="accounts-spendings-container"> 
                        <div className="accounts">
                            <h2>Accounts</h2>
                        </div>
                        <div className="spendings">
                            <h2>Spendings</h2>
                        </div>
                    </div>
                    }
                </div>
            </main>
        </>
    )
}