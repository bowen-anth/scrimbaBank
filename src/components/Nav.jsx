import React from "react"

export default function Nav() {
    return (
        <>
            <header>
                <nav className="nav-container">
                    <div className="logo-container">
                        <img src="../src/assets/bank-logo.svg" /> <h1 className="scrimbank-h1">ScrimBank</h1>
                    </div>
                    <ul>
                            <li className="home-li">Home</li>
                            <li>Payment</li>
                            <li>Savings</li>
                            <li>Financing</li>
                            <li>Stocks</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}