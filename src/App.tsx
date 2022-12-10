import { Route, Routes } from "react-router-dom";
import { App as AppPage } from "./components";
function App() {
  return (
    <Routes>
      <Route path="/" element={<AppPage />} />
    </Routes>
  );
}

export default App;
