import React from "react";
import { useState } from "react";

const BookingForms = (props) => {

    const [occasion, setOccasion] = useState("");
    const [guests, setGuests] = useState("");
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    };

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    return(
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset className="formField">
                        <div>
                            <label htmlFor="book-date">Choose Date:</label>
                            <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required/>
                        </div>

                        <div>
                            <label htmlFor="book-time">Choose Time:</label>
                            <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)} >
                                <option value="">Select a Time</option>
                                {props.availableTimes?.availableTimes?.map(availableTime => (
                                    <option key={availableTime}>{availableTime}</option>
                                )) || <option disabled>No times available</option>}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="book-guests">Number of Guests:</label>
                            <input id="book-guests" min="1" value={guests} onChange={(e) => {setGuests(e.target.value)}} type={"number"} placeholder={0} max={10}></input>
                        </div>

                        <div>
                            <label htmlFor="book-occasion">Occasion:</label>
                            <select id="book-occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                                <option value="">Select an Option</option>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>

                        <div className="btnReceive">
                            <input aria-label="On Click" type={"submit"} value={"Make Your Reservation"}></input>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForms;