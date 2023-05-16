# Babylon.js-Croquet.io-ApplicationTemplate

Simple template to create a collaborative XR application using Babylon.js and Croquet.io.

To execute the empty scene go to `public/js/croquet_sesssionjs` and change the apiKey and the appId, in the code below.

``` JavaScript
Croquet.Session.join({
    apiKey: 'your_key',
    appId: 'your_app_id',
    name: "unnamed",
    password: "secret",
    model: RootModel,
    view: RootView
});
```