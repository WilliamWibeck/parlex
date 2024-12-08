import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    console.log(user);
    return <Navigate to="/dashboard" />;
  }
  return <>{children}</>;
};

export default PublicRoute;
