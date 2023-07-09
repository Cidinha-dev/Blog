//creador das rotas dos provedores
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

//paginas 
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Single } from "./pages/Single";
import { Write } from "./pages/Write";
//componentes
import { Navebar } from "./components/Navebar";
import { Footer } from "./components/Footer";
//sass
import "./style.scss"


//função para renderizar a navebar e o footer e no meio o filho
const Layout = () => {
  return (
    <>
      <Navebar />
      <Outlet />
      <Footer />
    </>
  );
};


//caminho das paginas
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

//provedor das rotas função app que renderiza a tela
function App() {
  return (
  <div className="app">
    <div className="container">
      <RouterProvider router={router}/>
   </div>
  </div>
  );
}
export default App;


