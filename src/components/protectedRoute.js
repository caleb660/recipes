import {Navigate, useParams} from "react-router-dom";

export const ProtectedRoute = ({isLoggedIn, path, children}) => {
    const {id} = useParams();
    if (!isLoggedIn) {
        // user is not authenticated
        console.log("path", path);
        console.log("id", id);
        const pathParam = !path && !id ? '' : '?pathName=' + (path ? path : id);
        let pathName = `/login${pathParam}`;
        return <Navigate to={pathName}/>;
    }
    return children;
};