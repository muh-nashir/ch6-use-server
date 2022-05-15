import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
	const user = useSelector((store) => store.user.data);

	// If user login as admin, so
	if (user.isAdmin === true) {
		return <Navigate to="/admin" />;
	} // If not, it will return
	else {
		return <Outlet />;
	}
};

export default AdminRoute;