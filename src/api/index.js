import axios from "axios";

// const API=axios.create({baseURL:'http://localhost:5000'});
const API=axios.create({baseURL:'https://dashboard-backend-j0ya.onrender.com'});


export const getAllData=()=>API.get(`/data/getAllData`);