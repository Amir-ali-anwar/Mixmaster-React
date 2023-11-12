import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {Error} from './pages'
const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<h2>homepage</h2>,
      errorElement:<Error />,
      children:[
        
        {
          path:'/about',
          element:<h2>aboutpage</h2>
        }
      ]
    }
  ]
)
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
