import Manager from "../components/Manager";
import my_managers from "../data/my_managers.json";
import ManagerForm from "../components/ManagerForm";

export default function ListManagers() {
// make these a link
    return (
        <div className="AddManagerForm_container center">
            <div className="head_container">
                <h3>My list of managers</h3>

                <div className="list_container">
                    {
                        my_managers.map(({company}) => (
                            <Manager company={company}/>
                        ))
                    }
                </div>
            </div>
            <ManagerForm/>
        </div>
    )
}