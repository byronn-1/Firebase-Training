import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  CreateAccountPage,
  EmailConfirmationLanderPage,
  SignInPage,
  ProtectedRoute,
  useAuth,
} from "../auth";
import { ReservationsListPage } from "../reservations";
import { RestaurantDetailPage, SearchPage } from "../restaurants";
import { WriteAReviewPage, WriteAReviewThankYouPage } from "../reviews";
import { EditProfilePage } from "../user";
import "./App.css";

/*
  This is the main React component that we render the rest of
  of app's components inside of. In our app, we're using this
  component to hold the Router and all the different Routes our
  app supports.
*/
export function App() {

  const { isLoading, user } = useAuth();

  return (
    <Routes>
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/create-account" element={<CreateAccountPage />} />
      <Route
        path="/edit-profile"
        element={
          <ProtectedRoute isAuthed={!!user} isLoading={isLoading} >
            <EditProfilePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/email-confirmation/success"
        element={<EmailConfirmationLanderPage success />}
      />
      <Route
        path="/email-confirmation/failure"
        element={<EmailConfirmationLanderPage />}
      />
      <Route path="/" element={
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading} >
        <ReservationsListPage />
      </ProtectedRoute>
}
      />
      <Route path="/search" element={
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading} >
        <SearchPage />
          </ProtectedRoute>

      } />
      <Route path="/restaurants/:id" element={
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading} >
        <RestaurantDetailPage />
          </ProtectedRoute>

      } />
      <Route path="/write-a-review/:id" element={
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading}>
        <WriteAReviewPage />
          </ProtectedRoute>

      } />
      <Route path="/review/thank-you" element={
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading}>
        <WriteAReviewThankYouPage />
          </ProtectedRoute>

      } />
    </Routes>
  );
}
