import { createBrowserRouter } from "react-router";
import Root from "../Pages/Layout/Root";
import Blogs from "../Pages/Blogs";
import BlogDea from "../Components/BlogDea";
import Home from "../Pages/Home";
import BookMark from "../Pages/BookMark";
import Content from "../Components/Content";
import Author from "../Components/Author";
import "../index.css"
import "../App.css"

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children:[
      {
    path: '/blogs',
    element: <Blogs />,
    loader:()=>fetch("https://dev.to/api/articles?per_page=20&top=7"),
  },
      {
    path: '/blog/:id',
    element: <BlogDea></BlogDea>,
    loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
    children:[
        {
            index:true,
            element:<Content></Content>,
            loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),

        },
        {
            path:"author",
            element:<Author></Author>,
            loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
        }
    ]
  },
      {
    path: '/',
    index: true,
    element: <Home></Home>,
  },
  {
    path: '/bookMark',
    element: <BookMark />,
  },
    ]
  },
  
]);