import { Link } from "react-router-dom";
import { deleteProperty } from "../utilities";

export default function Property({id, address}) {
    const url = `property/${id}`
    
    return (
        <div className="manager_container">
            <h3><Link to={url}>{address}</Link></h3>
            <button onClick={() => deleteProperty(id)}>Delete Item</button>
        </div>
    )
}