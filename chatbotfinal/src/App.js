import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LightHome from "./pages/LightHome";
import DarkHome from "./pages/DarkHome";
import LightContact from "./pages/LightContact";
import LightChat from "./pages/LightChat";
import DarkChat from "./pages/DarkChat";
import LightAbout from "./pages/LightAbout";
import DarkAbout from "./pages/DarkAbout";
import DarkContact from "./pages/DarkContact";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/dark-home":
        title = "";
        metaDescription = "";
        break;
      case "/light-contact":
        title = "";
        metaDescription = "";
        break;
      case "/light-chat":
        title = "";
        metaDescription = "";
        break;
      case "/dark-chat":
        title = "";
        metaDescription = "";
        break;
      case "/light-about":
        title = "";
        metaDescription = "";
        break;
      case "/dark-about":
        title = "";
        metaDescription = "";
        break;
      case "/dark-contact":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LightHome />} />
      <Route path="/dark-home" element={<DarkHome />} />
      <Route path="/light-contact" element={<LightContact />} />
      <Route path="/light-chat" element={<LightChat />} />
      <Route path="/dark-chat" element={<DarkChat />} />
      <Route path="/light-about" element={<LightAbout />} />
      <Route path="/dark-about" element={<DarkAbout />} />
      <Route path="/dark-contact" element={<DarkContact />} />
    </Routes>
  );
}
export default App;
