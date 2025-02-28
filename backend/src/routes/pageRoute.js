import express from "express";

const pageRoute  = express.Router();


// Home Page Route meta title or meta description keyword ;

pageRoute.post("/hmetaadd",(request, response)=>{

    const {title, descriptions} = request.body
})


// about page Route meta title or meta description keyword ;

pageRoute.post("/ametaadd",(request, response)=>{

    const {title, descriptions} = request.body
})


//  Blog page Route meta title or meta description keyword ;

pageRoute.post("/bmetaadd",(request, response)=>{

    const {title, descriptions} = request.body
})




export default pageRoute;