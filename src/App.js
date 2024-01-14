import Header from "./Components/Header/Header";
import Body from "./Components/MainContent/Body";
import { Provider } from "react-redux";
import store from "./Utils/Store";
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import MainBody from "./Components/MainContent/MainBody";
import WatchVideo from "./Components/Video/WatchVideo";

function App() {
  
  const appRouter = createBrowserRouter([
    {
    path: "/",
    element: <Body />,
    children:[
      {
        path:"/",
        element: <MainBody />

      },
      {
        path:"watch",
        element: <WatchVideo />

      }
    ]}
  ])

  return (
    <Provider store={store}>
    <div className='bg-black w-full h-full md:w-screen md:h-full'>
      <Header/>
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}

export default App;
