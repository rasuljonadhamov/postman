import { useForm } from "react-hook-form";
import { useQuery, useQueryClient } from "react-query";
import api from "./services/api";

const ApiRequest = () => {
  const { register, handleSubmit,  watch } = useForm();
  const queryClient = useQueryClient();
  const { data, isError } = useQuery("apiRequest", async () => {
    const response = await api.get("/posts/1");
    return response.data;
  });

  const onSubmit = async () => {
    try {
      const url = watch("url");
      const method = watch("method");
      const body = watch("body");

      const response = await (method === "GET"
        ? api.get(url)
        : api.post(url, { data: body })); 
      queryClient.setQueryData("apiRequest", response.data);
    } catch (error) {
      alert("Error making API request! Try again", error);
    }
  };

  return (
    <div className="bg-gray-900 p-8 shadow-md w-full mx-auto pt-16">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2">
            Request URL
            <span className="text-red-600"> ({useForm.method})</span>
          </label>
          <input
            {...register("url")}
            type="text"
            className="w-full p-2 bg-gray-800 rounded-md text-white"
            placeholder="Enter URL"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2">
            HTTP Method
          </label>
          <select
            {...register("method")}
            className="w-full p-2 bg-gray-800 rounded-md text-white"
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
          </select>
        </div>
        {useForm.method === "POST" && (
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2">
              Request Body
            </label>
            <textarea
              {...register("body")}
              className="w-full p-2 bg-gray-800 rounded-md text-white"
              placeholder="Enter request body (if applicable)"
            />
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold p-2 rounded-md"
        >
          Send Request
        </button>
        {watch("method") === "POST" && (
          <div className="mb-4 ">
            <label className="block text-white text-sm font-semibold mb-2">
              Request Body
            </label>
            <textarea
              {...register("body")}
              className="w-full h-44 p-2 bg-gray-800 rounded-md text-white"
              placeholder="Enter request body (if applicable)"
            />
          </div>
        )}
      </form>
      {isError && (
        <p className="text-red-500 mt-4">Error during request! Try again</p>
      )}
      {data && (
        <div className="mt-4 w-full h-full">
          <h2 className="text-lg font-bold text-white mb-2">Response</h2>
          <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default ApiRequest;
