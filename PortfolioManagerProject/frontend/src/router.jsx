import App from './App'
import { createHashRouter } from 'react-router-dom';
import { SignUp } from './pages/SignUp';
import { LogIn } from './pages/LogIn';
import { getManagers, getProperties,getPropertyDetails, getManagerID, getManagerDetails } from './utilities';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import Calculator from './pages/Calculator';
import ListProps from './pages/ListProps';
import ListManagers from './pages/ListManagers';
import ManagerDetails from './pages/ManagerDetails';
import PropertyDetails from './pages/PropertyDetail';

const Router = createHashRouter([{
    path: '/',
    element: <App />,
    errorElement: <Error/>,
    children: [
        {
            index: true,
            element: <LogIn />,
        },
        {
            path:"/account/",
            element: <SignUp />
        },
        {
            path: "/dashboard/",
            element: <Dashboard/>,
            loader: getProperties
        },
        {
            path: "/dashboard/calc",
            element: <Calculator/>
        },
        {
            path: "/dashboard/properties",
            element: <ListProps/>,
            loader: getProperties
        },
        {
            path: "/dashboard/managers",
            element: <ListManagers/>,
            loader: getManagers
        },
        {
            path: '/dashboard/managers/manager/:id',
            element: <ManagerDetails/>,
            loader: getManagerDetails,

        },
        {
            path: '/dashboard/properties/property/:id',
            element: <PropertyDetails/>,
            loader: getPropertyDetails
        }
            
    ]
}])

export default Router;