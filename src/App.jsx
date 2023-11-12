import { RouterProvider, createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<h2>homepage</h2>
    }
  ]
)
const App = () => {
  return <h2>mixmaster starter</h2>;
};
export default App;
