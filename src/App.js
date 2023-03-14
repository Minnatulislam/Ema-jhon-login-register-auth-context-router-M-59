import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import About from './component/About/About';
import Shop from './component/Shop/Shop';
import Orders from './component/Orders/Orders';
import Inventory from './component/Inventory/Inventory';
import { productsAndCartloader } from './loaders/productsAndCartloader';
import Login from './component/Login/Login';
import SignUp from './component/SignUp/SignUp';

function App() {

    const router = createBrowserRouter([
      {
        path:'/', 
        element: <Main></Main>,
        children:[
          {
            path:'/',
            loader: () => fetch('products.json'),
            element:<Shop></Shop>
          },
          {
            path:'/orders',
            loader: productsAndCartloader,
            element:<Orders></Orders>
          },
          {
            path:'/inventory',
            element: <Inventory></Inventory>
          },
          {
            path:'/about',
            element:<About></About>
          },
          {
            path:'/login',
            element:<Login></Login>
          },
          {
            path:'signup',
            element:<SignUp></SignUp>
          }
        ]
      }


    ])

  return (
    <div >
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
