importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyB-gYQ-t92rNARvCLlmEMHKVj5ArZ29rJ0",
    authDomain: "msr-odev-takip-ve-duyuru.firebaseapp.com",
    projectId: "msr-odev-takip-ve-duyuru",
    messagingSenderId: "282364522003",
    appId: "1:282364522003:web:b6320b950230ba6c6c19e6"
});

const messaging = firebase.messaging();

// Arka planda bildirim geldiğinde yapılacak işlem
messaging.onBackgroundMessage((payload) => {
    console.log('[sw.js] Arka plan bildirimi alındı: ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'logo.jpeg' // Buraya bir logo yolu ekleyebilirsiniz
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});