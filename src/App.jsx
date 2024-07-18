import HomePage from "./routes/homepage/homepage";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import ListPage from "./routes/listPage/ListPage";
import Layout from "../src/routes/layout/layout";

function App() {

  const router=createBrowserRouter([
    {
    path:'/',
    element:<Layout />,
    children:[
      {
        path:"/",
        element:<HomePage />
      },
      {
        path:"/list",
        element:<ListPage />
      }
    ]
  }
  ]);
  return (
    // <div className="layout">
    //   <div className="navbar">
    //     <Navbar />
    //   </div>
    //   <div className="content">
    //     <HomePage />
    //   </div>
    // </div>
    <RouterProvider router={router}/>
  );
}

export default App;
