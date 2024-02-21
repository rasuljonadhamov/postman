import { useDispatch, useSelector } from "react-redux";
import { changeRequest } from "../store/postmanSlice";

function PostmanRequests() {
  const dispatch = useDispatch();
  const request = useSelector((state) =>
    state.requests?.find((re) => re.id === state.currentRequest)
  );

  const handleChange = (e) => {
    dispatch(
      changeRequest({
        id: request.id,
        name: e.target.value,
      })
    );
  };

  return (
    <input
      id="request-input"
      onChange={handleChange}
      value={request?.name || ""}
      className="font-semibold p-1"
    />
  );
}

export default PostmanRequests;
