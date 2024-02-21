import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeRequest } from "../store/postmanSlice";

const Form = () => {
  const dispatch = useDispatch();

  const request = useSelector((state) =>
    state.requests?.find((re) => re.id === state.currentRequest)
  );

  const handleSelect = (e) => {
    dispatch(
      changeRequest({
        method: e.target.value,
      })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (request.url) {
      const res = await fetch(request?.url, {
        method: request?.method || "GET",
      });

      const data = await res.json();
      console.log(data, res);
    }
  };

  return (
    <form className="mt-4 flex gap-2 " onSubmit={handleSubmit}>
      <div className="border rounded-md flex-1 flex gap-2 overflow-hidden">
        <select onChange={handleSelect} value={request?.method}>
          <option value="GET">GET</option>
          <option value="POST">Post</option>
          <option value="PUT">Put</option>
          <option value="DELETE">Delete</option>
        </select>

        <input
          type="text"
          value={request?.url}
          className="border-l  p-2 flex-1"
          placeholder="Enter a url or parse text "
          onChange={(e) =>
            dispatch(
              changeRequest({
                url: e.target.value,
              })
            )
          }
        />
      </div>

      <button className="py-2 px-4 bg-blue-600 text-white rounded-md">
        Send
      </button>
    </form>
  );
};

export default Form;
