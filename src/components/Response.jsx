import React from "react";
import { useSelector } from "react-redux";

const Response = () => {
  const request = useSelector((state) =>
    state.requests?.find((re) => re.id === state.currentRequest)
  );

  return (
    <div className=" border-t h-72 mt-10 p-2 border overflow-y-auto ">
      {request?.response?.data ? (
        <>
          <p>Vaqti: {request?.response?.differenceTime} </p>
          <env> {request?.response?.data} </env>
        </>
      ) : (
        <p>Response</p>
      )}
    </div>
  );
};

export default Response;
