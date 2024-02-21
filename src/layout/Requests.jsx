import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { addRequest, setCurrentRequest } from "../store/postmanSlice";

const Requests = () => {
  const requests = useSelector((state) => state.requests);
  const currentRequest = useSelector((state) => state.currentRequest);

  const dispatch = useDispatch();
  const addNewRequest = () => {
    const newRequest = {
      id: uuid(),
      name: "New Request",
      method: "GET",
      params: {},
      headers: {},
      body: {},
      response: {},
    };

    dispatch(addRequest(newRequest));
    const inputEl = document.getElementById("request-input");
    inputEl.focus();
    setTimeout(() => {
      inputEl.select();
    }, 0);
  };

  const handleRequest = (id) => {
    dispatch(setCurrentRequest(id));
  };

  return (
    <div className="bg-gray-100 border-r p-4">
      <button onClick={addNewRequest} className="text-3xl text-slate-700">
        +
      </button>
      <ul className="border-t border-slate-600 mt-1 pt-2">
        {requests?.map((request, index) => (
          <li
            onClick={() => handleRequest(request.id)}
            key={request.id}
            className={` cursor-pointer rounded p-1 ${
              currentRequest === request.id ? " bg-slate-300 " : ""
            } `}
          >
            {index + 1}. {request.method} {request.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Requests;
