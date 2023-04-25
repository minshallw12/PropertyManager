import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Manager from "../components/Manager";
import ManagerForm from "../components/ManagerForm";


export default function ListManagers() {
// make these a link
    const managers = useLoaderData();
    const [currManagers, setCurrManagers] = useState(managers)
    console.log(currManagers)

    



    return (
        <div className="AddManagerForm_container center">
            <div className="head_container">
                <h3>My list of managers</h3>

                <div className="list_container">
                    {
                        managers.map(({id, company}) => (
                            <Manager id={id} company={company}/>
                        ))
                    }
                </div>
            </div>
            <ManagerForm/>
        </div>
    )
}