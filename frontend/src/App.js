import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/my-reservations" element={<MyReservations />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/vehicles/:id" element={<VehicleDetails />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/vehicles" element={<VehiclesManagement />}/>
        <Route path="/admin/reservations" element={<ReservationsManagement />} />
        <Route path="/admin/users" element={<UsersManagement />} />
        <Route path="/admin/agencies" element={<AgenciesManagement />}/>
         <Route path="/payment" element={<Payment />} />
         <Route path="/admin/reports" element={<Reports />} />
         <Route path="/agency-dashboard" element={<AgencyDashboard />}/>
         <Route path="/agency/vehicles" element={<AgencyVehicles />}/>
         <Route path="/agency/reservations" element={<AgencyReservations />}/>
         <Route path="/admin/profile" element={<AdminProfile />} />
         <Route path="*" element={<NotFound />} />
         <Route path="/admin/agencies/create" element={<AgencyForm />} />
         <Route path="/agency/vehicles/create"element={<AgencyVehicleForm />}/>
         
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;