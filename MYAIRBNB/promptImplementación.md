# Prompt para Desarrollo de Componente: Detalle de Habitación

Actúa como un Desarrollador Frontend Junior en React y Tailwind CSS. Necesito que implementes el componente de la página de detalle de habitación para la ruta `/rooms/[id]`. El código debe ser **completo, funcional y no simplificado**.

Sigue estas especificaciones detalladas:

### 1. Carga de Datos y Ciclo de Vida
- Utiliza el hook `useEffect` para cargar los datos de la habitación al montar el componente.
- Obtén el `id` de la URL (asume el uso de `params` de `react-router-dom`).
- Simula una petición asíncrona usando `setTimeout` (1.5 segundos).
- Implementa un estado de carga (`isLoading`) y muestra un spinner o mensaje de "Cargando..." mientras los datos no estén disponibles.

### 2. Galería de Fotos (Superior)
- Define un array de strings con URLs de placeholders para las fotos.
- Usa `useState` para gestionar el índice de la foto visible actualmente.
- Añade botones superpuestos de "Anterior" y "Siguiente" para navegar por el array.
- Implementalo en la parte superior.

### 3. Información del Alojamiento y Anfitrión
- **Cabecera:** Renderiza el título de la propiedad, una valoración con estrellas (usa iconos), el número total de reseñas y la ubicación.
- **Sección del Anfitrión:** Crea una fila que incluya un placeholder de avatar circular, el nombre del anfitrión y una etiqueta que indique los años que lleva como anfitrión.

### 4. Servicios (Amenities)
- Implementa una sección de servicios usando una cuadrícula (grid).
- Cada servicio debe mostrar un par de **Icono + Etiqueta** (puedes usar la librería `lucide-react` para los iconos).

### 5. Tarjeta de Reserva (Sidebar)
- Muestra el precio por noche de forma destacada.
- **Contador de Huéspedes:** Implementa un control con `useState` para aumentar o reducir el número de personas.
  - Debe tener un límite mínimo de 1 y un máximo de 10.
- Añade un botón de "Reservar" (CTA).

### 6. Lógica de Fechas y Precio Total (Reto)
- Añade dos inputs de fecha (Check-in y Check-out).
- Implementa la lógica para calcular automáticamente el número de noches entre las fechas seleccionadas.
- Muestra el desglose del precio total (Precio por noche x número de noches).

### Requisitos Técnicos:
- Usa **Tailwind CSS** para un diseño moderno y responsive.
- Utiliza **Lucide React** para la iconografía.
