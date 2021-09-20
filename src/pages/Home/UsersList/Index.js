import React from "react";
import { useSelector } from "react-redux";

const Index = () => {
  const userState = JSON.parse(localStorage.getItem("Users"));

  return (
    <div>
      UsersList
      {userState.map((user) => {
        return <li>{user.name}</li>;
      })}
    </div>
  );
};

export default Index;
