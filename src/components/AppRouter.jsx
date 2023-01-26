import React from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRouters} from "../router/routers";

const AppRouter = () => {
    const isAuth = false;
    return (
        isAuth
        ? <Routes>
            {privateRoutes.map(routElement =>
                <Route
                    exect={routElement.exect}
                    path={routElement.path}
                    element={routElement.component}
                />
            )}
        </Routes>
        : <Routes>
            {publicRouters.map(routElement =>
                <Route
                    exect={routElement.exect}
                    path={routElement.path}
                    element={routElement.component}
                />
            )}
        </Routes>
    );
};

export default AppRouter;