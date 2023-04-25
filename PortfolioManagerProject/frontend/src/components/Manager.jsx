import { Link } from "react-router-dom";
import { deleteProperty } from "../utilities";



export default function Manager({id, company}) {
    const url = `manager/${id}`

    return (
        <div className="manager_container">
            <h3><Link to={url}>{company}</Link></h3>
            <button onClick={() => deleteProperty(id)}>Delete Item</button>
        </div>
    )
}