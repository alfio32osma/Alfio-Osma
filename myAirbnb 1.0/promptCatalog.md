# Prompt: Implementación de la Vista de Catálogo (/catalog)

**Instrucción para la IA:**
Actúa como un Desarrollador Frontend Junior en Next.js (App Router) y Tailwind CSS. Tu objetivo es implementar la página de catálogo respetando estrictamente la arquitectura definida en `flujoTrabajo.md`. 

---

## 📋 Requisitos de la Página de Catálogo

### 1. Cabecera de Resultados y Ordenación
- **Contador:** Mostrar dinámicamente el número total de alojamientos encontrados.
- **Control de Ordenación:** Implementar un selector (dropdown o botones) para ordenar por precio: "Ascendente" y "Descendente".
- **Lógica de Estado:** Utilizar `useState` para gestionar el criterio de ordenación seleccionado y asegurar que la lista de tarjetas se reordene automáticamente al cambiar la opción.

### 2. Visualización de Contenido (Reutilización)
- **Componente de Tarjeta:** Reutilizar obligatoriamente el componente de tarjeta de alojamiento (`PropertyCard.tsx` o `ListingCard.tsx`) ubicado en `src/components/ui`, garantizando consistencia visual con la página de inicio.

### 3. Layout con Mapa (Diseño Dual)
- **Estructura Responsiva:**
  - **Escritorio:** Implementar una vista de dos columnas. A la izquierda, la cuadrícula de tarjetas con scroll; a la derecha, un área de mapa fija.
  - **Móvil:** El área de mapa debe posicionarse debajo de la lista de tarjetas.
- **Placeholder del Mapa:** Crear un contenedor gris con Tailwind CSS que ocupe el espacio correspondiente y contenga el texto central "Mapa", siguiendo el diseño de placeholder solicitado.

---

## 📂 Organización de Archivos (Arquitectura)

Debes generar el código para los siguientes archivos siguiendo la ruta de carpetas de mi proyecto:
1. **`src/app/catalog/page.tsx`**: Archivo de ruta que renderiza el orquestador.
2. **`src/components/views/CatalogPageView.tsx`**: Componente de vista principal donde reside la lógica de `useState` para la ordenación y el layout dual (tarjetas + mapa).
3. **`src/components/ui/CatalogHeader.tsx`** (si es necesario): Componente para el contador y el selector de ordenación.

---

## 🛠️ Especificaciones Técnicas
- **Documentación:** Incluye cada especificación generada como comentario dentro del código o indica que debe añadirse al archivo `context.md` antes de empezar.
- **Estilos:** Uso exclusivo de Tailwind CSS.
- **Tipado:** Asegurar el uso de las interfaces definidas en `src/types/home.ts` o `explore.ts`.

**Resultado esperado:** Proporciona el código completo, funcional y sin simplificaciones de los archivos mencionados.