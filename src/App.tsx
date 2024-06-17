import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  Profile,
  AddJobs,
  AllJobs,
  Stats,
  SharedLayout,
} from "./pages/dashboard";
import { Landing, Error, Register, ProtectedRoute } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJobs />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="landing" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
