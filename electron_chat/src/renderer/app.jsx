import React from "react";
import { render } from "react-dom";
import { Router, Route, hashHistory } from "react-router";
import Login from "./Login";
import Signup from "./Signup";
import Rooms from "./Rooms";
import Room from "./Room";

import firebase from "firebase/firebase-browser";

const config = {
    apiKey: "AIzaSyCtdtTOz5imTNbA3R-YS7IwYtuYgB5r9Eg",
    authDomain: "electron-chat-7eeb7.firebaseapp.com",
    databaseURL: "https://electron-chat-7eeb7.firebaseio.com",
    storageBucket: "electron-chat-7eeb7.appspot.com",
};

firebase.initializeApp(config);

// Routingの定義
const appRouting = (
    <Router history={hashHistory}>
        <Route path="/">
            <Route path="login" component={Login} />
            <Route path="signup" component={Signup} />
            <Route path="rooms" component={Rooms}>
                <Route path=":roomId" component={Room} />
            </Route>
        </Route>
    </Router>
);

// Routingの初期化
if (!location.hash.length) {
    location.hash = "#/login";
}

// Applicationをrendering
render(appRouting, document.getElementById("app"));
