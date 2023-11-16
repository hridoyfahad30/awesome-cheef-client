import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Shared/User/Login";
import Register from "../Shared/User/Register";
import ChefRecipe from "../Pages/Home/ChefRecipe/ChefRecipe";
import AllChef from "../Pages/AllChef/AllChef";
import AllRecipes from "../Pages/AllRecipes/AllRecipes";
import Error from "../Pages/404Error/Error";
import PrivateRoute from "./PrivateRoute";
import About from "../Pages/About/About";
import Blogs from "../Pages/Blogs/Blogs";
import UserProfile from "../Pages/UserProfile/UserProfile";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'blogs',
          element: <Blogs></Blogs>
        },
        {
          path: 'profile',
          element: <UserProfile></UserProfile>
        },
        {
          path: 'all-chef',
          element: <AllChef></AllChef>,
          loader: () => fetch('https://awesome-chef-recipe-server.vercel.app/all-chef')
        },
        {
          path: 'chef/:id',
          element: <PrivateRoute><ChefRecipe></ChefRecipe></PrivateRoute>,
          loader: ({params})=> fetch(`https://awesome-chef-recipe-server.vercel.app/chef/${params.id}`)
        },
        {
          path: 'all-recipes',
          element: <PrivateRoute><AllRecipes></AllRecipes></PrivateRoute>,
          loader: ()=> fetch('https://awesome-chef-recipe-server.vercel.app/all-recipes')
        }
      ]
    },
  ]);


  export default router;