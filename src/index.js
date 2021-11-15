import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './context'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import dataReducer from './reducers/dataReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
  data: dataReducer,
  filters: filterReducer,
})

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
