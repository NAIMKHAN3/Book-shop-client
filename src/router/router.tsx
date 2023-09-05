import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Books from '../pages/Books';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import AddNew from '../pages/AddNew';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/', element: <Home/>
            },
            {
                path: '/home', element: <Home/>
            },
            {
                path: '/add-new', element: <AddNew/>
            },
            {
                path: '/books', element: <Books/>
            },
            {
                path: '/signin', element: <SignIn/>
            },
            {
                path: '/signup', element: <SignUp/>
            },
        ]
    },
]);

export default router;