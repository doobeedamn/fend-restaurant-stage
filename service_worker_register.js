document.addEventListener("DOMContentLoaded", event => {
    if (navigator.serviceWorker) {
        navigator.serviceWorker
            .register("service_worker.js")
            .then(registered => console.log("Service Worker registered", registered))
            .catch(err => console.log("Failed to register", err));
    }
});
