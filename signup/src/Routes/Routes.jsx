import {

    createBrowserRouter,
    
  } from "react-router-dom";
import SignUpForm from "../Components/SignUpForm";
  



  const router = createBrowserRouter([
    {
      path: "/",
      element:<SignUpForm></SignUpForm> ,
    },
  ]);


  export default router;