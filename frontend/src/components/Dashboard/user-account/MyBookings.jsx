import React, { useContext, useEffect, useState } from "react";
import useFetchData from "./useFetchData.js";
import DoctorCard from "./DoctorCard.jsx";
import Loading from "./Loading.jsx";
import Error from "./Error.jsx";
import { BASE_URL } from "./config.js";

const MyBookings = () => {
  const {
    data: appointment,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);

  return (
    <div>
      {loading && !error && <Loading />}
      {error && !loading && <Error errorMsg={error} />}
      {!loading && !error && appointment.length === 0 && (
        <h2 className="mt-5 text-center leading-7 text-[20px] font-semibold text-primaryColor">
          You have no bookings yet
        </h2>
      )}
    </div>
  );
};

export default MyBookings;
