import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider} from "react-redux"
import persistor, { store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <StrictMode>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </StrictMode>
  </Provider>,
)


// Redux Persist is a state management tool that allows the state in a Redux store to persist across browser and app sessions, improving user experience by pre-loading the store with persistent data.

// This is a component from Redux Persist library which delays the rendering of your app's UI until the persisted state has been retrieved and saved to redux