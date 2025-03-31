import { BrowserRouter, Routes, Route } from "react-router";
import {
  FallbackPage,
  HomePage,
  ProjectPage,
  PrivacyPolicyPage,
  ProjectsPage,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/projects"
          element={<ProjectsPage />}
        />
        <Route
          path="/projects/:id"
          element={<ProjectPage />}
        />
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicyPage />}
        />
        <Route
          path="*"
          element={<FallbackPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
