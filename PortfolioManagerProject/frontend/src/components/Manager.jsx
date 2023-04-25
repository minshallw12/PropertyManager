import { Link } from "react-router-dom";
import { deleteManager } from "../utilities";



export default function Manager({id, company}) {
    const url = `manager/${id}`

    return (
        <div className="manager_container">
            <h3><Link to={url}>{company}</Link></h3>
            <button onClick={() => deleteManager(id)}>Delete Item</button>
        </div>
    )
}