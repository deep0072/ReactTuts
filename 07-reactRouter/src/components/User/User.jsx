import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
    // here useParams will take the id which is provided in routes params
  const { userId } = useParams();
  return <div className="bg-gray-600 text-white text-3xl pd-4">User: {userId}</div>;
};

export default User;
