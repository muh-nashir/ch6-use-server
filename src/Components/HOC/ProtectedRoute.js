import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
	const user = useSelector((store) => store.user.data);

	// If user not login, return it
	if (user !== null) {
		return <Outlet />;
	} // If login, turn to aim
	else {
		return <Navigate to="/login" />;
	}
};

export default ProtectedRoute;