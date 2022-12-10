import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import axios from "axios";

axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
