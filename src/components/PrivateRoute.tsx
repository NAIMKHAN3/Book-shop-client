import React from 'react';
import { useAppSelector } from '../redux/hook';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const { email} = useAppSelector(state=> state.user)
    const location = useLocation();
    // if (loading) {
    //     return <div className="text-center">
    //         <div class="flex justify-center items-center mt-10">
    //             <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
    //                 <span class="visually-hidden">Loading...</span>
    //             </div>
    //         </div>
    //     </div>
    // }

    if (email) {
        return children;
    }


    return <Navigate to='/signin' state={{ from: location }} replace></Navigate>

};


export default PrivateRoute;