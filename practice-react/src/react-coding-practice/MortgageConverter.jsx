import React, { useState } from 'react'

function MortgageConverter() {
    const [principal, setPrincipal] = useState(0);
    const [interest, setInterest] = useState(0);
    const [loan, setLoan] = useState(0);
    const [mortgage, setMortgage] = useState(0);

    function calculate(){
        let p = principal;
        let r = (interest / 100) / 12;
        let n = loan * 12;
        let ans = p * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        setMortgage(ans.toFixed(2));
    }
  return (
    <>
    <div>
        <div>
            <h3>Principal Loan Amount</h3>
            <input type="number" value={principal} onChange={(e)=> setPrincipal(e.target.value)}/>
        </div>
        <div>
            <h3>Interest Rate</h3>
            <input type="number" value={interest} onChange={(e)=> setInterest(e.target.value)}/>
        </div>
        <div>
            <h3>length of loan</h3>
            <input type="number" value={loan} onChange={(e)=> setLoan(e.target.value)}/>
        </div>
        <button onClick={calculate}>Calculate</button>
        <h1>Your Monthly Mortgage will be : {mortgage}</h1>
    </div>
    </>
  )
}

export default MortgageConverter