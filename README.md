To-Do App con Ionic y Firebase (Prueba Tecnica)
Aplicacion de lista de tareas mejorada con categorizacion dinamica y control remoto de funcionalidades (Feature Flags).

Funcionalidades Implementadas
To-Do List: Gestion completa de tareas (Agregar, completar y eliminar).

Categorizacion: Sistema para crear, editar y eliminar categorias personalizadas.

Filtrado: Visualizacion segmentada de tareas por la categoria seleccionada.

Firebase Remote Config: Implementacion de un Feature Flag para habilitar o deshabilitar la gestion de categorias en tiempo real desde la consola de Firebase.

Requisitos e Instalacion
Clonar el repositorio.

Instalar dependencias de Node: npm install.

Instalar Ionic CLI de forma global: npm install -g @ionic/cli.

Ejecutar en navegador (desarrollo): ionic serve.

Guia de Compilacion y Ejecucion en Dispositivos
Android
Para generar los archivos ejecutables se requiere Java 17, Android SDK y Gradle 8.14 configurados en las variables de entorno del sistema.

Para generar el APK de prueba (Recomendado para evaluacion):

Bash
cordova build android --debug
El archivo se generara en: platforms/android/app/build/outputs/apk/debug/app-debug.apk

Para generar el paquete de produccion (AAB):

Bash
cordova build android --release
El archivo se generara en: platforms/android/app/build/outputs/bundle/release/app-release.aab

iOS
La estructura base del proyecto ha sido configurada y preparada para plataformas iOS.

Agregar plataforma: cordova platform add ios.

Preparar el proyecto: cordova prepare ios.
Nota: La exportacion del archivo final (.IPA) requiere obligatoriamente de un entorno macOS con Xcode instalado para la firma digital del paquete. El codigo fuente incluido es plenamente compatible y esta listo para ser compilado en dicha plataforma.

Respuestas a la Evaluacion Tecnica
1. Principales desafios
Un desafio importante fue la integracion de Firebase Remote Config para gestionar la visibilidad de las categorias, ya que era una herramienta con la que no habia interactuado previamente. Lograr que la interfaz reaccionara en tiempo real al Feature Flag fue un proceso de aprendizaje muy enriquecedor. Asimismo, la configuracion tecnica del entorno (ajustes de compatibilidad entre Gradle, Java y el SDK de Android) fue clave para asegurar un flujo de compilacion exitoso y estable.

2. Tecnicas de optimizacion de rendimiento
Lazy Loading: Se implemento la carga de modulos bajo demanda para minimizar el tiempo de carga inicial de la aplicacion.

Gestion Eficiente de Remote Config: Se optimizaron las peticiones al servicio de Firebase para evitar sobrecarga en la red y asegurar la disponibilidad de las configuraciones de forma asincrona.

Estrategia de Deteccion de Cambios: Se utilizo la logica de Angular para optimizar la renderizacion de la lista de tareas, evitando procesos innecesarios en el DOM al realizar filtros o actualizaciones.

3. Calidad y mantenibilidad del codigo
Se utilizo una arquitectura modular basada en Servicios de Angular, lo que permite desacoplar la logica de negocio y el manejo de datos de la capa de presentacion. El uso de TypeScript asegura un tipado fuerte, facilitando la deteccion de errores en desarrollo y garantizando que el codigo sea escalable y facil de mantener por otros desarrolladores.
