import React from "react";
import { useSelector } from "react-redux";
import JSONPretty from "react-json-pretty";

const Response = () => {
  const request = useSelector((state) =>
    state.requests?.find((re) => re.id === state.currentRequest)
  );

  return (
    <div className="border-t w-[1200px] h-96 mt-10 p-2 border overflow-y-auto">
      {request?.response?.data ? (
        <>
          <p>Vaqti: {request?.response?.differenceTime} </p>
          <JSONPretty
            mainStyle="background: #fff; color: #000"
            keyStyle="color: rgb(163, 21, 21)"
            valueStyle="color: rgb(9, 134, 88)"
            stringStyle="color: rgb(4, 81, 161)"
            booleanStyle="color: rgb(4, 81, 161); font-weight: bold"
            id="json-pretty"
            data={request?.response?.data}
          ></JSONPretty>
        </>
      ) : (
        <div className="absolute w-[1200px] h-96">
          <p>Response</p>
          <div className="relative top-1/3 left-1/3 ">
            <img
              className="mb-3"
              src="https://postman.com/_aether-assets/illustrations/dark/illustration-hit-send.svg"
              alt="Postman image"
            />
            <p className="-ml-8">Click Send to get a response</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Response;
