import About from "../pages/About";
import {Posts} from "../pages/Posts";
import PostIdPages from "../pages/PostIdPages";
import Error from "../pages/Error";
import {Navigate} from "react-router-dom";
import React from "react";
import Login from "../pages/Login";

export const privateRoutes = [
    {path: '/', component: <Posts/>, exect: true},
    { path: '/about', component: <About/>, exect: true },
    { path: '/posts', component: <Posts/>, exect: false },
    { path: '/posts/:id', component: <PostIdPages/>, exect: true },
    { path: '/error', component: <Error/>, exect: false },
    { path: '*', component: <Navigate to="/error" replace />, exect: false}
]

export const publicRouters = [
    {path: '/', component: <Posts/>, exect: true},
    { path: '/about', component: <About/>, exect: true },
    { path: '/login', component: <Login/>, exect: true },
    { path: '/error', component: <Error/>, exect: false },
    { path: '*', component: <Navigate to='/login' replace />, exect: false}
]