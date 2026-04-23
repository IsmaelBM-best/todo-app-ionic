# To-Do App con Ionic & Firebase (Prueba Técnica)

Aplicación de lista de tareas mejorada con categorización dinámica y control remoto de funcionalidades.

## 🚀 Funcionalidades Implementadas
- **To-Do List:** Agregar, completar y eliminar tareas.
- **Categorización:** Crear, editar y eliminar categorías personalizadas.
- **Filtrado:** Visualización de tareas por categoría seleccionada.
- **Firebase Remote Config:** Feature Flag para habilitar/deshabilitar la gestión de categorías en tiempo real.

## 🛠️ Requisitos e Instalación
1. Clonar el repositorio.
2. Instalar dependencias: `npm install`.
3. Instalar Ionic CLI: `npm install -g @ionic/cli`.
4. Para compilar en Android:
   - Configurar Java 17 y Android SDK.
   - Gradle 8.14 (configurado en el sistema).
   - Comando: `cordova build android --release`.

## 📈 Respuestas a la Evaluación Técnica

### 1. Principales desafíos
Al principio me parecio muy complicado la validacion desde firebase que en este caso la inyecte en las categorias 
(crear, editar, eliminar y filtrar tareas por categoria), ya que era algo que no conocia, tambien la configuración técnica
del entorno de compilación (específicamente la compatibilidad entre Gradle y Java) para asegurar que el APK se generara correctamente 
con todas las dependencias de Firebase. Pero el proyecto en realidad fue un proceso muy divertido en el que me encanto participar.

### 2. Técnicas de optimización de rendimiento
- **Lazy Loading:** Los módulos de la aplicación se cargan bajo demanda para acelerar el inicio.
- **Firebase Remote Config:** Permite gestionar el estado de la aplicación sin realizar peticiones pesadas a bases de datos en cada interacción.
- **Estrategia de Detección de Cambios:** Se optimizó la renderización de la lista de tareas para evitar repintados innecesarios en el DOM.

### 3. Calidad y mantenibilidad
Se utilizó una arquitectura limpia basada en **Servicios de Angular** para separar la lógica de negocio (Firebase/Almacenamiento) de la interfaz de usuario.
El código está tipado con **TypeScript** para prevenir errores en tiempo de ejecución y facilitar futuras escalabilidades.
