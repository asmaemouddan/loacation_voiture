import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Vehicles from "./pages/Vehicles";
import Reservation from "./pages/Reservation";
import MyReservations from "./pages/MyReservations";
import Profile from "./pages/Profile";
import VehicleDetails from "./pages/VehicleDetails";
import AdminDashboard from "./pages/admin/AdminDashboard";
import VehiclesManagement from "./pages/admin/VehiclesManagement";
import ReservationsManagement from "./pages/admin/ReservationsManagement";
import UsersManagement from "./pages/admin/UsersManagement";
import AgenciesManagement from "./pages/admin/AgenciesManagement";
import Payment from "./pages/Payment";
import Reports from "./pages/admin/Reports";
import AgencyDashboard from "./pages/agency/AgencyDashboard";
import AgencyVehicles from "./pages/agency/AgencyVehicles";
import AgencyReservations from "./pages/agency/AgencyReservations";
import NotFound from "./pages/NotFound";
import AgencyForm from "./pages/admin/AgencyForm";
import AdminProfile from "./pages/admin/AdminProfile";
import AgencyVehicleForm from "./pages/agency/AgencyVehicleForm";

function ProtectedRoute({ children, allowedRoles }) {
  const token = localStorage.getItem("token");
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;

  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/vehicles/:id" element={<VehicleDetails />} />

        {/* Client/Auth */}
        <Route
          path="/reservation"
          element={
            <ProtectedRoute allowedRoles={["client", "admin"]}>
              <Reservation />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-reservations"
          element={
            <ProtectedRoute allowedRoles={["client", "admin"]}>
              <MyReservations />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute allowedRoles={["client", "admin"]}>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/payment"
          element={
            <ProtectedRoute allowedRoles={["client", "admin"]}>
              <Payment />
            </ProtectedRoute>
          }
        />

        {/* Admin only */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/vehicles"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <VehiclesManagement />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/reservations"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <ReservationsManagement />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <UsersManagement />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/agencies"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AgenciesManagement />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/agencies/create"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AgencyForm />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/reports"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Reports />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/profile"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminProfile />
            </ProtectedRoute>
          }
        />

        {/* Agency pages protected for admin */}
        <Route
          path="/agency-dashboard"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AgencyDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/agency/vehicles"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AgencyVehicles />
            </ProtectedRoute>
          }
        />

        <Route
          path="/agency/reservations"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AgencyReservations />
            </ProtectedRoute>
          }
        />

        <Route
          path="/agency/vehicles/create"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AgencyVehicleForm />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;