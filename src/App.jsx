import { Provider } from "react-redux";
import store from "./store/store.js";
import Requests from "./components/Requests.jsx";
import ApiRequest from "./components/ApiRequest.jsx";

const App = () => {
  return (
    <Provider store={store}>
      <div className="grid grid-cols-[1fr_3fr] h-full">
        <Requests />
        <ApiRequest />
      </div>
    </Provider>
  );
};

export default App;
