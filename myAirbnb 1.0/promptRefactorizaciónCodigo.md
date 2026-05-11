# Prompt: Refactorización y Calidad de Código (Clean Code)

Actúa como un desarrollador Senior de React. Necesito que revises y refactorices mi código actual aplicando estrictamente las siguientes reglas de calidad de código:

### 1. Arquitectura de Archivos
- Cada componente debe vivir en su propio archivo individual.
- Los componentes deben estar ubicados dentro de la carpeta `/components`. No dejes lógica de componentes complejos dentro de las páginas.

### 2. Principio de Responsabilidad Única y Extensión
- **Límite de líneas:** Ningún componente debe superar las **~80 líneas** (incluyendo lógica y JSX). 
- Si un componente excede este tamaño o se vuelve demasiado complejo, **divídelo en subcomponentes** más pequeños y reutilizables.

### 3. Definición de Componentes
- Utiliza exclusivamente **componentes funcionales**.
- Todos los componentes deben estar definidos utilizando la sintaxis de **`const`** (Arrow Functions).
- **PROHIBIDO:** No utilices componentes de clase ni declaraciones de función tradicionales (`function ComponentName...`) para los componentes internos.

### Resultado esperado:
- Devuélveme el código **completo, funcional y listo para usar**, organizado por archivos si es necesario, asegurándote de que todas las exportaciones e importaciones entre los nuevos componentes sean correctas.