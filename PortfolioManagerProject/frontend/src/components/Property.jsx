import { Link } from "react-router-dom";
import { deleteProperty } from "../utilities";

export default function Property({id, address, onDeleteProperty}) {
    const url = `property/${id}`
    

    const handleDelete = async () => {
        await deleteProperty(id);
        onDeleteProperty(id);
      };


    return (
        <div className="manager_container">
            <h3><Link to={url}>{address}</Link></h3>
            <button onClick={handleDelete}>Delete Item</button>
        </div>
    )
}