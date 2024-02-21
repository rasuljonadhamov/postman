import { useDispatch } from "react-redux";
import { changeRequest } from "../store/postmanSlice";

const errorText = {
  404: "Not Found",
  200: "OK",
};

const useRequest = () => {
  const dispatch = useDispatch();
  const sendRequest = async (url) => {
    const startTime = new Date();

    const res = await fetch(url);
    const endTime = new Date();

    const differenceTime = endTime - startTime + "ms";
    const status = ` ${res.status} = ${errorText[res.status]} `;
    const data = await res.json();
    dispatch(
      changeRequest({
        response: {
          data: JSON.stringify(data),
          differenceTime,
          status,
        },
      })
    );
    console.log(status, res, differenceTime);
  };

  return {
    sendRequest,
  };
};

export default useRequest;
