
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter basename="/90ml-irani-cafe">
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
