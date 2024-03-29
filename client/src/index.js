import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom'
import App from './App';
import UserLogin from './components/UserLogin';
import CreateAccount from './components/CreateAccount';
import Cities from  "./components/Cities";
import  Activity  from "./components/Activity"
import Footer from './components/Footer'
import store from './store'; 
import { Provider } from 'react-redux';


class Index extends Component{
  render(){
    return(
      <Provider store={store}>
      <BrowserRouter>
      <div className="Routing">
        <Route path="/UserLogin" component={UserLogin} />
        <Route exact path="/" component={App} />
        <Route path="/CreateAccount" component={CreateAccount} />
        <Route path="/itinerarios/:id" component={Activity} />
        <Route path="/Cities" component={Cities}/>
        <Footer/>
        
      </div>
    </BrowserRouter>
    </Provider>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);