import { BrowserRouter } from "react-router-dom";
import "./App.css";
import UserRoute from "./Routes/UserRoutes";

function App() {
  return (
    <BrowserRouter>
      <UserRoute />
    </BrowserRouter>
  );
}

export default App;
