import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  CreateAccountPage,
  EmailConfirmationLanderPage,
  SignInPage,
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
  return (
    <Routes>
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/create-account" element={<CreateAccountPage />} />
      <Route path="/edit-profile" element={<EditProfilePage />} />
      <Route
        path="/email-confirmation/success"
        element={<EmailConfirmationLanderPage success />}
      />
      <Route
        path="/email-confirmation/failure"
        element={<EmailConfirmationLanderPage />}
      />
      <Route path="/" element={<ReservationsListPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/restaurants/:id" element={<RestaurantDetailPage />} />
      <Route path="/write-a-review/:id" element={<WriteAReviewPage />} />
      <Route path="/review/thank-you" element={<WriteAReviewThankYouPage />} />
    </Routes>
  );
}
