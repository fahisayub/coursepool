import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CourseDetailsPage from '../pages/CourseDetailsPage';
import StudentDashboardPage from '../pages/StudentDashboardPage';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<CourseDetailsPage />} />
      <Route path="/dashboard" element={<StudentDashboardPage />} />
    </Routes>
  );
};

export default MainRoutes;
