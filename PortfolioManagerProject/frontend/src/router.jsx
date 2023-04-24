import App from './App'
import { createHashRouter, createBrowserRouter } from 'react-router-dom';
import { SignUp } from './pages/SignUp';
import { LogIn } from './pages/LogIn';
import { getManagers } from './utilities';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import Calculator from './pages/Calculator';
import ListProps from './pages/ListProps';
import ListManagers from './pages/ListManagers';

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
            element: <Dashboard/>
        },
        {
            path: "/dashboard/calc",
            element: <Calculator/>
        },
        {
            path: "/dashboard/properties",
            element: <ListProps/>
        },
        {
            path: "/dashboard/managers",
            element: <ListManagers/>,
            loader: getManagers
        }
            
    ]
}])

export default Router;