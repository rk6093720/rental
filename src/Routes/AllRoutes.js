import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from '../Pages/Login';
import RoutesApp from '../MainAppRoutes/RoutesApp';
import ForgetPassword from '../Pages/ForgetPassword';
import ResetPassword from '../Pages/ResetPassword';

const AllRoutes = () => {
    const isAuth = useSelector((state) => state.Auth.isAuth);

    return (
        <Routes>
            {/* Redirect to adminLogin if not authenticated */}
            {!isAuth ? (
                <Route
                    path="/*"
                    element={<Navigate to="/adminLogin" replace />}
                />
            ) : null}

            <Route path="/adminLogin" element={<Login />} />

            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route
                path="/reset-password/:id/:token"
                element={<ResetPassword />}
            />

            {/* Protected routes for authenticated users */}
            {isAuth ? (
                <Route path="/*" element={<RoutesApp />} />
            ) : null}
        </Routes>
    );
};

export default AllRoutes;





