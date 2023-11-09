import React, { useEffect, useState } from "react";
import { getUserInfo } from "../../service/storeUserInfo";
import { useNavigate } from "react-router-dom";

const AdminPrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const userInfo = getUserInfo();
  useEffect(() => {
    if (userInfo.role !== "admin") {
      navigate("/dashboard");
    }
    setLoading(false);
  }, [userInfo.role, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return children;
};

export default AdminPrivateRoute;
