import express from "express";

const pageRoute  = express.Router();


// Home Page Route meta title or meta description keyword ;

pageRoute.post("/metaadd",(request, response)=>{

    const {title, descriptions} = request.body
})










export default pageRoute;