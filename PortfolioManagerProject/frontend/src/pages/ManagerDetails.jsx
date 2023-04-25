import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export default function ManagerDetails() {

    const manager = useLoaderData();
    console.log(manager, 'managerdetails.jsx')

    return (
        <div className="details_panel">
            <h3>manager here</h3>
        </div>
    )
}