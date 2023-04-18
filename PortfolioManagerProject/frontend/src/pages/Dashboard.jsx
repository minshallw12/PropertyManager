export default function Dashboard() {


    
    return (
        <div className="dashboard_container">
            <div className="center">
            </div>
            <div className="dashboard">
                <div className="metrics_container">
                    <div>
                        <h4>Total square feet</h4>
                    </div>
                    <div className="center">
                        <h2>SQFT</h2>
                    </div>
                    <div>
                        <h4>Total monthly income</h4>
                    </div>
                    <div className="center">
                        <h2>$ INCOME</h2>
                    </div>
                    <div>
                        <h4>Total monthly costs</h4>
                    </div>
                    <div className="center">
                        <h2>$ COSTS</h2>
                    </div>
                    <div>
                        <h4>Total monthly profit</h4>
                    </div>
                    <div className="center">
                        <h2>$ PROFIT</h2>
                    </div>
                </div>

                <div className="map_container">
                    <img src="" alt="google map here" />
                </div>
            </div>

            
        </div>
        
    )
}