import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import store from "./redux/store";
import router from "./routes/router";

function App() {
  return (
    <div className="">
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
