import App from './App'
import { createHashRouter, createBrowserRouter } from 'react-router-dom';
import { SignUp } from './components/SignUp';
import { LogIn } from './components/LogIn';
import Error from './components/Error'

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
        }
    ]
}])

export default Router;