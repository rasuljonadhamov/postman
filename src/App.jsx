import { Provider } from "react-redux";
import store from "./store/store.js";
import Requests from "./layout/Requests.jsx";
import Postman from "./layout/Postman.jsx";

const App = () => {
  return (
    <Provider store={store}>
      <div className="grid grid-cols-[1fr_3fr] h-full">
        <Requests />
        <Postman />
      </div>
    </Provider>
  );
};

export default App;
