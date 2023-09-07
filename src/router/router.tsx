import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Books from '../pages/Books';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import AddNew from '../pages/AddNew';
import BookDetails from '../pages/BookDetails';
import UpdateBook from '../pages/UpdateBook';
import Wishlist from '../pages/Wishlist';

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
                path: '/book-details/:id', element: <BookDetails/>
            },
            {
                path: '/update-book/:id', element: <UpdateBook/>
            },
            {
                path: '/wishlist', element: <Wishlist/>
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