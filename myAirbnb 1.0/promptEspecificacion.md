# Prompt de Especificación de Componentes - Proyecto Airbnb

**Instrucciones para la IA:**
Actúa como un Arquitecto Frontend Junior. Analiza las capturas de pantalla proporcionadas del clon de Airbnb (Alojamientos, Experiencias y Servicios) y genera una especificación técnica de componentes siguiendo las reglas de `FlujoTrabajo.md`.

---

## Estructura Requerida por Componente:

Para cada elemento visual identificado en las imágenes, genera:

1. **Nombre del Componente:** - Utiliza PascalCase (ej. `PropertyCard`, `CategoryTab`, `BottomNav`).
   
2. **Propiedades (Props):** - Define una interfaz de TypeScript (`interface Props`).
   - Incluye tipos de datos (string, number, boolean).
   - Define estados opcionales (ej. `isActive?: boolean`).

3. **Relación de Layout y Ubicación:**
   - Define si el componente es **UI Reutilizable** (`/components/ui`).
   - Define si es un **Componente de Orquestación** (`/components`).
   - Explica su posición (ej. "Hijo de GridContainer", "Fijo en la base del Layout").

---

## Componentes Críticos a Identificar:
- **Navigation:** El `Navbar` superior (con buscador) y el `BottomNavigation` (móvil).
- **Categories:** El selector de tipos (Alojamientos, Experiencias, Servicios).
- **Listing:** La tarjeta de item individual y el contenedor de cuadrícula.
- **Badges/Tags:** Etiquetas de "Nuevo", "Popular" o "Recomendación".

## Reglas de Salida:
- Clasifica si debe ser un **Client Component** (si tiene interacción) o **Server Component**.
- Mantén la coherencia con la estructura de carpetas: `/app`, `/components`, `/hooks`, `/services`, `/libs`, `/utils`, y `/types`.