import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CreateChartPage } from "./pages/CreateChartPage";
import { ChartListPage } from "./pages/ChartListPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/charts" element={<ChartListPage />} />
        <Route path="/create-chart" element={<CreateChartPage />} />
      </Routes>
    </BrowserRouter>
  );
}
