import { useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useNavigationType,
} from "react-router-dom";
import { App as AppPage, SignUp, SingIn } from "./components";
import { NotFound } from "./pages";
import LocationService from "./services/LocationService";
import PeerService from "./services/PeerService";
function App() {
  const locationService = new LocationService();
  const peerService = new PeerService();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    locationService
      .getUserLocation()
      .then((coords) => console.log(coords))
      .catch((err) => console.log(err));

    if (pathname === "/auth") {
      navigate("/auth/sing-up");
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<AppPage />} />
      <Route path="chat" element={<AppPage />}>
        <Route path=":cahtId" element={<AppPage />} />
      </Route>
      <Route path="/auth/sing-up" element={<SignUp />} />
      <Route path="/auth/sing-in" element={<SingIn />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
