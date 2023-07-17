import React from "react";
import { useParams } from "react-router-dom";

export const UserDetails = () => {
  // const params = useParams();
  // const userID = params.userID;
  const { userID } = useParams;

  return (
    <>
      <>Details about user {userID} </>
    </>
  );
};
