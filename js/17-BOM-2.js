/**
 * BOM EN JAVASCRIPT - PARTE 2
 * ------------------------------------------------------------
 * En este archivo se agregan más funcionalidades del BOM que pueden
 * ser útiles para el desarrollo web.
 * 
 * 1. Eventos de visibilidad de la página
 * 2. Detección de cambios en el tamaño de la ventana
 * 3. Información de la batería
 * 4. Geolocalización
 * 5. Eventos de copiar/pegar
 * 6. Notificaciones del navegador
 * 7. Modo de pantalla completa
 * 8. Manipulación del portapapeles
 * ------------------------------------------------------------
 */

// 1. EVENTOS DE VISIBILIDAD DE LA PÁGINA
// ------------------------------------------------------------
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    console.log("La pestaña está en segundo plano.");
  } else {
    console.log("La pestaña está activa.");
  }
});

// 2. DETECCIÓN DE CAMBIOS EN EL TAMAÑO DE LA VENTANA
// ------------------------------------------------------------
window.addEventListener("resize", () => {
  console.log("Tamaño de la ventana cambiado:", window.innerWidth, window.innerHeight);
});

// 3. INFORMACIÓN DE LA BATERÍA
// ------------------------------------------------------------
navigator.getBattery().then((battery) => {
  console.log(`Nivel de batería: ${battery.level * 100}%`);
  console.log(`¿Está cargando?: ${battery.charging ? "Sí" : "No"}`);
});

// 4. GEOLOCALIZACIÓN
// ------------------------------------------------------------
navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log(`Latitud: ${position.coords.latitude}`);
    console.log(`Longitud: ${position.coords.longitude}`);
  },
  (error) => {
    console.error("Error obteniendo la ubicación:", error);
  }
);

// 5. EVENTOS DE COPIAR/PEGAR
// ------------------------------------------------------------
document.addEventListener("copy", () => {
  console.log("El usuario ha copiado contenido.");
});

document.addEventListener("paste", () => {
  console.log("El usuario ha pegado contenido.");
});

// 6. NOTIFICACIONES DEL NAVEGADOR
// ------------------------------------------------------------
if (Notification.permission === "granted") {
  new Notification("Hola, esta es una notificación del BOM!");
} else if (Notification.permission !== "denied") {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      new Notification("Ahora puedes recibir notificaciones!");
    }
  });
}

// 7. MODO DE PANTALLA COMPLETA
// ------------------------------------------------------------
function activarPantallaCompleta() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  }
}
// activarPantallaCompleta();

// 8. MANIPULACIÓN DEL PORTAPAPELES
// ------------------------------------------------------------
navigator.clipboard.writeText("Texto copiado al portapapeles").then(() => {
  console.log("Texto copiado correctamente.");
});

navigator.clipboard.readText().then((texto) => {
  console.log("Texto pegado:", texto);
});
