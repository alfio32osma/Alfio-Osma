# Arquitectura de Proyecto y Flujo de Trabajo

Este documento define la estructura de directorios y las reglas de decisión para la ubicación de archivos. Debe respetarse estrictamente para asegurar la escalabilidad y consistencia del código.

---

## 📂 Árbol de Decisión de Carpetas

### 1. `/app` — Vistas a Nivel de Página
* **Contenido:** Vistas basadas en rutas y layouts (ej. `page.tsx`, `layout.tsx`).
* **Regla:** Orquestan componentes, pero **no** contienen UI reutilizable. Define la estructura de la ruta.

### 2. `/components` — Piezas Reutilizables de UI
* **Contenido:** Bloques de construcción atómicos (ej. `Button`, `Card`, `Modal`).
* **Regla:** Deben ser agnósticos a la ruta y diseñados para usarse en múltiples lugares.

### 3. `/hooks` — Lógica de React
* **Contenido:** Hooks personalizados (ej. `useAuth`, `useFetch`).
* **Regla:** Cualquier archivo que utilice APIs internas de React (`useState`, `useEffect`, `useContext`).

### 4. `/services` — Comunicación con API
* **Contenido:** Funciones de fetch, llamadas a endpoints y lógica de negocio externa.
* **Regla:** Funciones asíncronas que interactúan con servicios fuera de la aplicación.

### 5. `/libs` — Configuraciones de Terceros
* **Contenido:** Envoltorios (wrappers) de librerías externas (ej. instancia de Axios, cliente Supabase, Firebase).
* **Regla:** Centralizar la configuración de dependencias externas para evitar duplicación.

### 6. `/utils` — Funciones Utilitarias Puras
* **Contenido:** Lógica pura de JS/TS (ej. `formatDate`, `calculateTotal`).
* **Regla:** No deben tener dependencias de React ni de servicios externos. Son funciones de propósito general.

### 7. `/types` — Definiciones de TypeScript
* **Contenido:** Interfaces y Type Aliases compartidos (ej. `User.ts`, `Product.ts`).
* **Regla:** Centralizar la forma de los datos para asegurar consistencia en todo el proyecto.

---

## 🛠️ Reglas de Oro para Colaboradores
1. **Funcionalidad Primero:** No simplificar el código al punto de perder funcionalidad; entregar siempre el código completo y ajustado.
2. **Prioridad de Ubicación:** Si un archivo cumple con dos categorías (ej. un hook que llama a un servicio), separar la lógica: la llamada al servicio en `/services` y el estado de React en `/hooks`.
3. **Escalabilidad:** Si un componente en `/app` empieza a crecer demasiado, extraer piezas lógicas a `/components`.