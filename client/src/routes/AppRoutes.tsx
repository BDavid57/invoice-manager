import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage, InvoicesPage } from '../pages';

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/invoices" element={<InvoicesPage />} />
      </Routes>
    </Router>
  );
};
