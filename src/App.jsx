
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

const basename = window.location.hostname === "topivali-shaik.github.io"
  ? "/90ml-irani-cafe"
  : "/";

function App() {
  return (
    <BrowserRouter basename={basename}>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
