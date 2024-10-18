import App from "@/App";
import AuthenticatedRoutes from "@/Auth/components/AuthenticatedRoutes";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "@/Home/views/Index";

export const router=createBrowserRouter([
    {
        path:'',
        element:<App/>,
        children:[
            {
                path:'',
                element:<AuthenticatedRoutes/>,
                children:[
                    {
                        path:'',
                        element:<Navigate to={'/home'}/>
                    },
                    {
                        path:'home',
                        element:<Home/>
                    }
                ]
            }
        ]
    }
])