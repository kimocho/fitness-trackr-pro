import { Routes, Route } from 'react-router';
import Layout from './layout/Layout';
import Register from "./auth/Register";
import Login from "./auth/Login";
import ActivitiesPage from "./activities/ActivitiesPage";
import Error404 from "./Error404.jsx";
import SingleActivityDetails from './activities/SingleActivityDetails.jsx';
import Navbar from './layout/Navbar.jsx';
import Routines from './routines/Routines.jsx';
import RoutineDetails from './routines/RoutineDetails.jsx';
/**
 * Fitness Trackr is a platform where fitness enthusiasts can share their workouts and
 * discover new routines. Anyone can browse the site and make an account, and users with an
 * account will be able to upload and manage their own activities.
 */
export default function App() {
  return (
    <>
      <Navbar />
      <Routes element={<Layout />}>
        <Route index element={<ActivitiesPage />} />
        <Route path="/routines" element={<Routines />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Error404 />} />
        <Route path="/details/:activityID" element={<SingleActivityDetails />} />
        <Route path="/routineDetails/:routineID" element={<RoutineDetails />} />
      </Routes>
    </>
  )
}
