import Map from "../components/Map"
import { useLoaderData } from "react-router-dom"

export function totalSF(lst) {
        let sum = 0
        for (let i=0; i<lst.length; i++) {
            sum += lst[i]['square_feet']
        }
        return sum
    };

export function totalCost(lst) {
    console.log(lst,'me')
    let sum= 0
    for (let i=0; i<lst.length; i++) {
        sum += lst[i]['purchase_cost']
    }
    return sum
};


export function totalIncome(lst) {
    let sum = 0
    for (let i=0; i<lst.length; i++) {
        sum += lst[i]['current_income']
    }
    return sum
};

export function totalUpkeep(lst) {

    let sum= 0
    for (let i=0; i<lst.length; i++) {
        sum += lst[i]['current_upkeep']
    }
    return sum
};




export default function Dashboard() {
    const properties = useLoaderData();
    const totalSquareFeet = totalSF(properties);
    const totalMonthlyIncome = totalIncome(properties);
    const totalMonthlyUpkeep = totalUpkeep(properties);
    const totalMonthlyProfit = totalMonthlyIncome - totalMonthlyUpkeep;

    return (
        <div className="dashboard_container">
            <div className="center">
            </div>
            <div className="dashboard">
                <div className="metrics_container">

                    <div><h5>Total Units</h5></div>
                    <div className="center"><h3>{properties.length}</h3></div>
                    
                    <div><h5>Total square feet</h5></div>
                    <div className="center"><h3>{totalSquareFeet} sqft</h3></div>

                    <div><h5>Total monthly income</h5></div>
                    <div className="center"><h3>$ {totalMonthlyIncome}</h3></div>

                    <div><h5>Total monthly costs</h5></div>
                    <div className="center"><h3>$ {totalMonthlyUpkeep}</h3></div>

                    <div><h5>Total monthly profit</h5></div>
                    <div className="center"><h3>$ {totalMonthlyProfit}</h3></div>

                    <div><h5>Total portfolio cost</h5></div>
                    <div className="center"><h3>$ {totalCost(properties)}</h3></div> 

                </div>
                <div className="map_container">
                    <Map/>
                </div>
            </div>

            
        </div>
        
    )
}