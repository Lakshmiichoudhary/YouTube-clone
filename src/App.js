import Header from "./Components/Header/Header";
import Body from "./Components/MainContent/Body";
import { Provider } from "react-redux";
import store from "./Utils/Store";

function App() {
  

  return (
    <Provider store={store}>
    <div className='bg-black w-screen h-screen'>
      <Header/>
      <Body />
    </div>
    </Provider>
  );
}

export default App;
