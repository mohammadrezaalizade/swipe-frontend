import { Route, Routes } from "react-router-dom";
import { App as AppPage } from "./components";
function App() {
  return (
    <Routes>
      <Route path="/" element={<AppPage />} />
      <Route path="/chat" element={<AppPage />}>
        <Route path=":cahtId" element={<AppPage />} />
      </Route>
    </Routes>
  );
}

export default App;
