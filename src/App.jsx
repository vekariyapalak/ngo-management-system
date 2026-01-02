import { BrowserRouter } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react";
import AppRoutes from "./routes/app-routes"
import { ThemeSwitcher } from "./lib/use-config";
import { Provider } from "react-redux"
import { store } from "./redux/store/configure-store";
import persistStore from "redux-persist/es/persistStore";
const persistStoreData = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStoreData}>
        <ThemeSwitcher />
        <BrowserRouter>
          <div className="min-h-[calc(100vh-96px)]">
            <AppRoutes />
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
