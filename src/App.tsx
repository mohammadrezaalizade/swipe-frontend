import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { App as AppPage } from "./components";
import LocationService from "./services/LocationService";
import PeerService from "./services/PeerService";
function App() {
  const locationService = new LocationService();
  const peerService = new PeerService();
  useEffect(() => {
    locationService
      .getUserLocation()
      .then((coords) => console.log(coords))
      .catch((err) => console.log(err));
  }, []);

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
