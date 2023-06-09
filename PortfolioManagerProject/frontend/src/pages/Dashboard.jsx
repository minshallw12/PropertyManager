import Map from "../components/Map"
import inventory from '../data/my_props.json'
// this page will need a loader for the map and stats
import { useLoaderData } from "react-router-dom"


export function totalSF(lst) {
        let sum = 0
        for (let i=0; i<lst.length; i++) {
            sum += lst[i]['square_feet']
        }
        return sum
    };

export function totalCost(lst) {

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
    console.log(properties, 'HERE')
    const totalSquareFeet = totalSF(properties);
    // const totalCost = totalCost(properties);
    const totalMonthlyIncome = totalIncome(properties);
    const totalMonthlyUpkeep = totalUpkeep(properties);
    const totalMonthlyProfit = totalMonthlyIncome - totalMonthlyUpkeep;


    return (
        <div className="dashboard_container">
            <div className="center">
            </div>
            <div className="dashboard">
                <div className="metrics_container">

                    <div><h4>Total Units</h4></div>
                    <div className="center"><h2>{properties.length}</h2></div>
                    
                    <div><h4>Total square feet</h4></div>
                    <div className="center"><h2>{totalSquareFeet} sqft</h2></div>

                    <div><h4>Total monthly income</h4></div>
                    <div className="center"><h2>$ {totalMonthlyIncome}</h2></div>

                    <div><h4>Total monthly costs</h4></div>
                    <div className="center"><h2>$ {totalMonthlyUpkeep}</h2></div>

                    <div><h4>Total monthly profit</h4></div>
                    <div className="center"><h2>$ {totalMonthlyProfit}</h2></div>

                    <div><h4>Total portfolio cost</h4></div>
                    <div className="center"><h2>$ </h2></div>
                    
                </div>

                <div className="map_container">
                    <Map/>
                </div>
            </div>

            
        </div>
        
    )
}