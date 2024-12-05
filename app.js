// Importa Firebase y los servicios necesarios
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
import { getMessaging, getToken, onMessage } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging.js';

// Configuración de Firebase (reemplaza con tus datos)
// Configuración de Firebase (reemplaza con tus datos)
const firebaseConfig = {
    apiKey: "AIzaSyDy9x3TfwvSZhLbu0hir-UndtOz5xipaQs",
    authDomain: "picperch-5b821.firebaseapp.com",
    projectId: "picperch-5b821",
    storageBucket: "picperch-5b821.firebasestorage.app",
    messagingSenderId: "483644712126",
    appId: "1:483644712126:web:ce023e7429a6e7011caaef",
    measurementId: "G-VNWW3TEQEJ"
  };
  
// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firebase Messaging
const messaging = getMessaging(app);

// Registra el Service Worker y solicita el token
// navigator.serviceWorker.register('/firebase-messaging-sw.js')
//   .then((registration) => {
//     console.log('Service Worker registrado correctamente:', registration);

//     // Obtén el token de Firebase Messaging
//     getToken(messaging, { vapidKey: 'BI1TEbpDHL9LU0ms8iX3iHKkisguomMRcA6nWqVvImsvhYDK9OkINqlEAKjVdv56MK2UJLOpUqTTEcfGladJRog', serviceWorkerRegistration: registration })
//       .then((currentToken) => {
//         if (currentToken) {
//           console.log('Token de registro obtenido:', currentToken);
//           // Envía este token a tu servidor si es necesario
//         } else {
//           console.warn('No se pudo obtener el token. Asegúrate de que las notificaciones estén habilitadas.');
//         }
//       })
//       .catch((err) => {
//         console.error('Error al obtener el token:', err);
//       });
//   })
//   .catch((error) => {
//     console.error('Error al registrar el Service Worker:', error);
//   });
// Registra el Service Worker y solicita el token
navigator.serviceWorker.register('/firebase-messaging-sw.js')
  .then((registration) => {
    console.log('Service Worker registrado correctamente:', registration);

    // Obtén el token de Firebase Messaging
    getToken(messaging, { vapidKey: 'BKM4h1dy5hcHpsjAuCTNUhQW_meu-_S682eBOffHwrG64Gi7kdqKaCHO74275Vkzp2FeNtdYDVyvdVulUx-X9Rg', serviceWorkerRegistration: registration })
      .then((currentToken) => {
        if (currentToken) {
          console.log('Token de registro obtenido:', currentToken);
          
          // Envía el token al HTML
          const tokenElement = document.getElementById('firebase-token');
          if (tokenElement) {
            tokenElement.textContent = currentToken;
          }

          // Opcional: Guarda el token en localStorage
          localStorage.setItem('firebaseToken', currentToken);
        } else {
          console.warn('No se pudo obtener el token. Asegúrate de que las notificaciones estén habilitadas.');
        }
      })
      .catch((err) => {
        console.error('Error al obtener el token:', err);
      });
  })
  .catch((error) => {
    console.error('Error al registrar el Service Worker:', error);
  });


// Manejo de mensajes en primer plano
onMessage(messaging, (payload) => {
  console.log('Mensaje recibido en primer plano:', payload);

  // Opcional: Muestra la notificación manualmente si no se maneja automáticamente
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };

  if (Notification.permission === 'granted') {
    new Notification(notificationTitle, notificationOptions);
  }
});
