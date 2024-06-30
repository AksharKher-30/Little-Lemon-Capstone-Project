import React from "react";
import BookingForm from "./BookingForms";
import {useState} from "react";

const Booking = (props) => {
    return (
        <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
    )
}

export default Booking;