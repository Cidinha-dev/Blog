//creador das rotas dos provedores
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//caminho das paginas
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);


//provedor de rotas
function App() {
  return (
  <div>
   <RouterProvider router={router}/>
  </div>);
}
export default App;


