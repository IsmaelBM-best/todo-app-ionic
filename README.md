# To-Do App con Ionic y Firebase (Prueba Técnica)

Aplicación de lista de tareas mejorada con categorización dinámica y control remoto de funcionalidades mediante Feature Flags.

---

## Funcionalidades Implementadas

- **To-Do List:** Gestión completa de tareas (Agregar, completar y eliminar).
- **Categorización:** Sistema para crear, editar y eliminar categorías personalizadas.
- **Filtrado:** Visualización segmentada de tareas por la categoría seleccionada.
- **Firebase Remote Config:** Implementación de un Feature Flag para habilitar o deshabilitar la gestión de categorías en tiempo real desde la consola de Firebase.

---

## Requisitos e Instalación

1. Clonar el repositorio.

2. Instalar dependencias:
```bash
npm install
```

3. Instalar Ionic CLI globalmente:
```bash
npm install -g @ionic/cli
```

4. Ejecutar en entorno de desarrollo:
```bash
ionic serve
```

---

## Guía de Compilación (Mobile)

### Android

Requisitos:
- Java 17
- Android SDK
- Gradle 8.14

#### APK (debug):
```bash
cordova build android --debug
```
Ubicación:
```
platforms/android/app/build/outputs/apk/debug/app-debug.apk
```

#### Producción (AAB):
```bash
cordova build android --release
```
Ubicación:
```
platforms/android/app/build/outputs/bundle/release/app-release.aab
```

---

### iOS

```bash
cordova platform add ios
cordova prepare ios
```

**Nota:**
La exportación del archivo `.ipa` requiere macOS con Xcode para la firma digital.  
El proyecto está configurado y listo para compilar en ese entorno.

---

## Respuestas a la Evaluación Técnica

### 1. Principales desafíos

Uno de los principales desafíos fue la integración de Firebase Remote Config para gestionar dinámicamente la visibilidad de las categorías, ya que era una herramienta nueva en mi flujo de trabajo. Lograr que la interfaz reaccionara correctamente al Feature Flag implicó entender su ciclo de carga y sincronización.

Adicionalmente, la configuración del entorno de compilación (compatibilidad entre Gradle, Java y el SDK de Android) fue un punto crítico para asegurar builds estables.

---

### 2. Técnicas de optimización de rendimiento

- **Lazy Loading:** Implementación de carga diferida de módulos para reducir el tiempo de carga inicial.
- **Gestión de Remote Config:** Uso eficiente de la carga y activación de configuraciones para evitar llamadas innecesarias.
- **Optimización de renderizado:** Uso de `trackBy` en listas para minimizar re-renderizados del DOM.

---

### 3. Calidad y mantenibilidad del código

Se utilizó una arquitectura basada en servicios de Angular para separar la lógica de negocio de la capa de presentación. Esto permite un código más escalable, reutilizable y fácil de mantener.

El uso de TypeScript aporta tipado fuerte, facilitando la detección temprana de errores y mejorando la calidad general del desarrollo.
