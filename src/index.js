import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';

import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Router>
    <Provider store={store()}>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route exact path="/home" component={Home} />
        </Switch>
      </Provider>
    </Router>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
