import "../styles/App.css";
import "../styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
/**Import Components */
import Login from "./Login";
import Quiz from "./Quiz";
import Results from "./Results";
import Signup from "./Signup";
import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";
import { CheckUserExist } from "../helper/helper";

/**React Routs */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home> </Home>,
  },
  {
    path: "/login",
    element: <Login> </Login>,
  },
  {
    path: "/quiz",
    element: (
      <CheckUserExist>
        <Quiz></Quiz>
      </CheckUserExist>
    ),
  },
  {
    path: "/results",
    element: <Results />,
  },
  {
    path: "/Signup",
    element: <Signup></Signup>,
  },
  {
    path: "/About",
    element: <About></About>,
  },
  {
    path: "/Contact",
    element: <Contact></Contact>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
