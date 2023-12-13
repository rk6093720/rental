import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from '../Pages/Login';
import RoutesApp from '../MainAppRoutes/RoutesApp';
import ForgetPassword from '../Pages/ForgetPassword';
import ResetPassword from "../Pages/ResetPassword";
import Signup from '../Pages/Signup';
import SuperAdmin from '../Pages/SuperAdmin';

const AllRoutes = () => {
    const isAuth = useSelector((state) => state.Auth.isAuth);
    const role = useSelector((state) => state.Auth.roles);
     console.log(isAuth)
    return (
        <Routes>
            {!isAuth && (
                <Route
                    path="/*"
                    element={<Navigate to="/adminSignup" replace />}
                />
            )}

            <Route path="/adminLogin" element={<Login />} />
            <Route path="/adminSignup" element={<Signup />} />
            <Route path="/superAdmin" element={<SuperAdmin />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route
                path="/reset-password/:id/:token"
                element={<ResetPassword />}
            />

            {isAuth && (
                <Route path="/*" element={<RoutesApp />} />
            )}

            {isAuth && role === "superAdmin" && (
                <Route
                    path="/"
                    element={<Navigate to="/superAdmin" replace />}
                />
            )}

            {isAuth && role === "Admin" && (
                <Route
                    path="/"
                    element={<Navigate to="/Landlord" replace />}
                />
            )}

            {isAuth && role === "User" && (
                <Route
                    path="/"
                    element={<Navigate to="/users" replace />}
                />
            )}
        </Routes>
    );
};

export default AllRoutes;
