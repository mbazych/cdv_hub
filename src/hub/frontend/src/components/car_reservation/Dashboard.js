import React, { Fragment } from "react";
import Form from "./Form";
import Reservations from "./Reservations";
import Rentals from "./Rentals";

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Rentals />
      <Reservations />
    </Fragment>
  );
}
