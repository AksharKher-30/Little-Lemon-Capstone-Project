import React,{useReducer, useEffect, useState} from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Booking from "./Booking";
import ConfirmedBooking from "./ConfirmedBookings";
import Header from "./Header";

const Main = () =>{
    const [availableTime, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00","22:00"])

    const seededRandom = function (seed){
        var m = 2**32 - 31;
        var a = 185852;
        var s = seed % m;
        return function(){
            return(s = s*a%m)/m;
        };
    };

    const fetchAPI = function(date){
        let result = [];
        let random = seededRandom(date.getDate());

        for(let i=17; i <= 23; i++){
            if(random() > 0.5){
                result.push(i + ":00");
            }
            if(random() < 0.5){
                result.push(i + ":30");
            }
        }
        return result;
    };

    const submitAPI = function(formData){
        return true;
    };

    const initialState = {availableTime: fetchAPI(new Date())}
    const [state,dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state,date){
        return {availableTime: fetch(new Date(date))}
    }

    const navigate = useNavigate();

    function submitForm(formData){
        if (submitAPI(formData)){
            navigate("/confirmed");
        }
    }

    return(
        <main>
            <Routes>
                <Route path="/" element={<Header/>}/>
                <Route path="/booking" element={<Booking availableTime={state} dispatch={dispatch} submitForm={submitForm}/>}/>
                <Route path="/confirmed" element={<ConfirmedBooking/>}/>

            </Routes>
        </main>
    )
}

export default Main;