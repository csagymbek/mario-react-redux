import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { applyMiddleware, createStore, compose } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/reducers/rootReducer";
import thunk from "redux-thunk";
import { getFirestore, reduxFirestore } from "redux-firestore";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import fbConfig from "./configs/fbConfig";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(fbConfig, {
      attachAuthIsReady: true,
      useFirestoreForProfile: true,
      userProfile: "users",
    }), // redux binding for firebase
    reduxFirestore(fbConfig) // redux bindings for firestore
  )
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
});
