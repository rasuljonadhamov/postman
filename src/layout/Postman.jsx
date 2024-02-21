import React from "react";
import PostmanRequests from "../components/PostmanRequests";
import Form from "../components/Form";
import Tabs from "../components/Tabs";
import Response from "../components/Response";

const Postman = () => {
  return (
    <div className="p-4">
      <PostmanRequests />
      <Form />
      <Tabs />
      <Response />
    </div>
  );
};

export default Postman;
