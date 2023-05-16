// Croquet Tutorial 1
// Hello World 
// Croquet Corporation 
// 2021

import { RootView } from "./view.js";
import { RootModel } from "./model.js";

Croquet.Session.join({
    apiKey: 'your_key',
    appId: 'your_app_id',
    name: "unnamed",
    password: "secret",
    model: RootModel,
    view: RootView
});