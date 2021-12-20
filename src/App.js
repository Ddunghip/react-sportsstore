import logo from './logo.svg';
import './App.css';
import React from 'react';
import { SportsStoreDataStore } from './data/DataStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { ShopConnector } from './shop/ShopConnector';

class App extends React.Component {
  render() {
    return (
      <Provider store={SportsStoreDataStore}>
        <Router>
          <Switch>
            <Route path="/shop " component={ShopConnector}></Route>
            <Redirect to="/shop" />
          </Switch>
        </Router>
      </Provider>
    )
  }
}
// function App() {

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Provider store={SportsStoreDataStore}>
//           <Router>
//             <Switch>
//               <Route path="/shop " component={ShopConnector} />
//               <Redirect to="/shop" />
//             </Switch>
//           </Router>
//         </Provider>

//       </header>
//     </div>
//   );
// }

export default App;
