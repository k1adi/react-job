import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import JobDetail from "./pages/JobDetail";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/positions/:positionId" element={<JobDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
