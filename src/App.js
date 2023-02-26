import Myroutes from "./Myroutes";
import './index.css'
import GlobalContextProvider from "./hooks/GlobalContext";
import { Provider } from "react-redux";
// import { myStore } from "./hooks/redux/store";
// import { combineReducers, createStore } from "redux";
// import gameReducer from "./hooks/redux/gameReducer";
// import counterReducer from "./hooks/redux/counterReducer";
import {store} from './components/reducers/store'

function App() {
  // const myStore = createStore(gameReducer)
  // const rootReducer = combineReducers({
  //   counter: counterReducer,
  //   game: gameReducer
  // })
  // const myStore = createStore(rootReducer)
  return (
    <>
      <Provider store={store}>
        <GlobalContextProvider>
          <Myroutes />
        </GlobalContextProvider>
      </Provider>
    </>
  );
}

export default App;
