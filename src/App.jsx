import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  NewsLetter,
  SinglePageError
} from "./pages";
import {loader as landingLoader} from './pages/Landing'
import {loader as SingleCocktailLoader} from './pages/Cocktail'
import {action as NewsLetterAction} from './pages/NewsLetter'
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index:true,
        element:<Landing />,
        errorElement:<SinglePageError/>,
        loader:landingLoader
      },
      {
        path: "newsletter",
        element: <NewsLetter />,
        action:NewsLetterAction,
        errorElement: <SinglePageError />,
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: 'cocktail/:id',
        element: <Cocktail />,
        errorElement:<SinglePageError/>,
        loader:SingleCocktailLoader
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
