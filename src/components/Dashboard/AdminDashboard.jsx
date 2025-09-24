import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import Alltask from "../other/Alltask";

const AdminDashboard = ({ changeUser }) => {

  return (
    <div className="min-h-screen w-full p-10 bg-gray-900 text-white">
       <Header changeUser={changeUser} />
      <CreateTask/>
      <Alltask/>
      
    </div>
  );
};

export default AdminDashboard;