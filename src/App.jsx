import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  NewsLetter,
} from "./pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index:true,
        element:<Landing />
      },
      {
        path: "newsletter",
        element: <NewsLetter />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: 'cocktail/:id',
        element: <Cocktail />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
