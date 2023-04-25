import { Link } from "react-router-dom"

export default function Property({id, address}) {
    const url = `property/${id}`
    
    return (
        <div className="manager_container">
            <h3><Link to={url}>{address}</Link></h3>
        </div>
    )
}