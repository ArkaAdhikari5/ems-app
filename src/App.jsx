import React, { useState, useEffect, useContext } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);
  const [userData,setUserdata] = useContext(AuthContext);

 useEffect(() => {
  const loggedInUser = localStorage.getItem("loggedInUser");
  
  // Add this check! If loggedInUser is null or undefined, the code inside won't run.
  if (loggedInUser) {
    try {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      // Retrieve the full user data as well if needed
      setloggedInUserData(userData.data); 
    } catch (e) {
      console.error("Failed to parse loggedInUser from localStorage", e);
    }
  }
}, []);

  const handelLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email == e.email && e.password == password
      );
      if (employee) {
        setUser("employee");
        setloggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
  <>
    {user === "admin" ? (
      <AdminDashboard changeUser={setUser} />
    ) : user === "employee" ? (
      <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
    ) : (
      <Login handelLogin={handelLogin} />
    )}
  </>
);
};

export default App;
