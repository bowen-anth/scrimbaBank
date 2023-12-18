import React, { useState } from "react"
import { accounts } from "./data/accountsData"
import { renderContent } from "./utils/functions"

export default function Main() {

    const [selectedState, setSelectedState] = useState({
        mainAccount: true,
        expenses: false,
        savings: false
    })

console.log(selectedState)

    return (
        <>
            <main>
                <div className="button-container">
                    <button>Pay</button> <button>Transfer</button>
                </div>
                    {renderContent(selectedState, setSelectedState)}
            </main>
        </>
    )
}