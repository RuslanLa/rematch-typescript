import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { init } from "@rematch/core";
import { Provider } from "react-redux";

import sharks from "./models/sharks";

const store = init({
  models: {
    sharks,
  },
});

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
