import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import { Router, Switch, Route } from 'react-router-dom';
// import { firebaseApp } from './firebase';
// import history from './history'
// import reducer from './reducers';
// import { logUser } from './actions';

import App from './App';
// import Home from './components/Home';
// import TaskManager from './components/TaskManager';
// import SignIn from './components/SignIn';
// import SignUp from './components/SignUp';
// import Header from './components/Header';
// import Footer from './components/Footer';

import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHeart, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faHeart, faEnvelope, faCalendarCheck )

// const store = createStore(reducer);

// firebaseApp.auth().onAuthStateChanged(user => {
//     if(user){
//         const { email } = user;
//         store.dispatch(logUser(email));
//         // history.push('/app');
//     }else{
//         // history.replace('/signin');
//     }
// });

// ReactDOM.render(
//     <Provider store={store}>
//         <Router path="/" history={history}>
//             <div>
//                 <Header />
//                 <Switch>
//                     <Route exact path="/" component={Home} />
//                     <Route path="/tasks" component={TaskManager} />
//                     <Route path="/signin" component={SignIn} />
//                     <Route path="/signup" component={SignUp} />
//                 </Switch>
//                 <Footer />
//             </div>
//         </Router>
//     </Provider>,
//     document.getElementById('root')
// );
ReactDOM.render(
    <App />,
    document.getElementById('root')
);

registerServiceWorker();