import { useState } from 'react';
import { calculateMortgage } from '../utilities';
import axios from 'axios';

export default function Calculator() {
    const [loanAmount, setLoanAmount] = useState(250000)
    const [loanTerm, setLoanTerm] = useState(30)
    const [loanRate, setLoanRate] = useState(5)



    return (
        <div className="calculator_page center">
            <div className="header">
                <div className="center">
                    <h1>Amortization Calculator</h1>
                </div>
                <p>Amortization is paying off a debt over time in equal installments. Part of each payment goes toward the loan principal, and part goes toward interest. As the loan amortizes, the amount going toward principal starts out small, and gradually grows larger month by month. In an amortization schedule, you can see how much money you pay in principal and interest over time. Use this calculator to input the details of your loan and see how those payments break down over your loan term.</p>
            </div>
            <div className="display">
                <form 
                    className="input_screen padding" 
                    onSubmit={(event) => [
                        event.preventDefault(),
                        calculateMortgage(loanAmount,loanTerm,loanRate),
                        setLoanAmount(250000),
                        setLoanTerm(30),
                        setLoanRate(5),
                    ]
                        }>
                    <div className="loan_amount">
                        <h3>Loan Amount</h3>
                        <input
                            className="input" 
                            id="amount_input" 
                            placeholder="250,000"
                            onChange={(event) => setLoanAmount(event.target.value)}
                        />
                    </div>
                    <div className="loan_term">
                        <h3>Loan Term in Years</h3>
                        <input 
                            className="input" 
                            id="term_input" 
                            placeholder="30" 
                            onChange={(event) => setLoanTerm(event.target.value)}
                        />
                    </div>
                    <div className="loan_rate">
                        <h3>Interest Rate</h3>
                        <input 
                            className="input" 
                            id="rate_input"
                            placeholder="5"
                            onChange={(event) => setLoanRate(event.target.value)}
                        />
                    </div>
                    <div className="loan_start">
                        <h3>Loan Start Date</h3>
                        <input 
                            className="input" 
                            id="date_input" 
                            type="date"/>
                    </div>
                    <div className="button">
                        <button type='submit'>Calculate</button>
                    </div>
                </form>
                <div class="results_screen padding">
                    <div class="summary_header">
                        <h3>Summary</h3>
                        <h4>Number of Payments:</h4><div id="number_of_payments"></div>
                    </div>
                
                    <div class="summary"> 
                        <div class="summary_box">
                            <div class="monthly_payment">
                                <h5>Monthly Payment</h5>
                                <div id="payment">$</div>
                            </div>
                            <div class="monthly_interest">
                                <h5>Total Interest Paid</h5>
                                <div id="interest">$</div>
                            </div>
                            <div class="monthly_costt">
                                <h5>Total cost of loan</h5>
                                <div id="cost">$</div>
                            </div>
                            <div class="monthly_date">
                                <h5>Payoff date</h5>
                                <div id="date"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

          

        </div>
        
    )
    
}