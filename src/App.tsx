import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import router from './router/router';
import { setupStore } from './store/store';
import './App.css';

const store = setupStore();

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
