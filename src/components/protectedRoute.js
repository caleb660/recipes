import {Navigate, useParams} from "react-router-dom";

export const ProtectedRoute = ({isLoggedIn, path, children}) => {
    const {id} = useParams();
    if (!isLoggedIn) {
        // user is not authenticated
        const pathParam = !path && !id ? '' : '?pathName=' + (path ? path : id);
        let pathName = `/login${pathParam}`;
        return <Navigate to={pathName}/>;
    }
    return children;
};