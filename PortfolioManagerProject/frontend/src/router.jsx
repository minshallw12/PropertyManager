import App from './App'
import { createHashRouter, createBrowserRouter } from 'react-router-dom';
import { SignUp } from './pages/SignUp';
import { LogIn } from './pages/LogIn';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';

const Router = createHashRouter([{
    path: '/',
    element: <App />,
    children: [
        {
            index: true,
            element: <LogIn />,
            errorElement: <Error/>
        },
        {
            path:"/account/",
            element: <SignUp />
        },
        {
            path: "/dashboard/",
            element: <Dashboard/>
        }
    ]
}])

export default Router;