import { useDispatch, useSelector } from "react-redux";
import { changeRequest } from "../store/postmanSlice";

function PostmanRequests() {
  const dispatch = useDispatch();
  const request = useSelector((state) =>
    state.requests?.find((re) => re.id === state.currentRequest)
  );
  return (
    <input
      onChange={(e) => {
        dispatch(
          changeRequest({
            name: e.target.value,
          })
        );
      }}
      id="request-input"
      value={request?.name}
      className="font-semibold"
    />
  );
}

export default PostmanRequests;
