# Contexto del Proyecto: Reconstrucción del Frontend - Alquiler Vacacional

## 1. Resumen del Proyecto
Un estudio de diseño de producto ha ganado un contrato para reconstruir el frontend de una plataforma de alquiler vacacional. El objetivo es validar la arquitectura de componentes clonando la interfaz de **Airbnb**. Esto permitirá al equipo aprender qué componentes son necesarios, qué datos requiere cada uno y cómo se conectan entre las distintas vistas antes de crear su propio sistema de diseño.

**Misión:** Implementar tres vistas clave en **Next.js** usando componentes de **React**, convirtiendo capturas de pantalla en especificaciones técnicas.

---

## 2. Descripción de las tres páginas a construir

* **Página de Inicio (Home):** Es el punto de entrada. Muestra una vista general con opciones de exploración, categorías y una selección de alojamientos destacados para atraer al usuario.
* **Página de Catálogo (Resultados de búsqueda):** Presenta una lista organizada (cuadrícula) de las propiedades que coinciden con los criterios del usuario, permitiendo comparar precios y características rápidamente.
* **Vista de Detalle de una Habitación:** Contiene toda la información específica de una propiedad: galería de fotos, descripción del anfitrión, lista de servicios, ubicación y el widget de reserva.

---

## 3. Listado de componentes principales (Referencia Airbnb.com)

### Componentes Globales (Layout)
* **Navbar:** Barra superior con logo, buscador interactivo y acceso al perfil de usuario.
* **CategoryBar:** Menú de iconos para filtrar por tipos de alojamiento (ej: "Piscinas increíbles", "Cabañas").
* **Footer:** Sección final con información legal, soporte y selección de idioma.

### Componentes de Catálogo e Inicio
* **PropertyCard:** Tarjeta que muestra la imagen (carrusel), ubicación, calificación, fechas y precio.
* **GridContainer:** Contenedor responsivo que organiza las tarjetas de forma fluida.
* **SearchFilters:** Botones o modales para ajustar parámetros de búsqueda.

### Componentes de la Vista de Detalle
* **ImageGallery:** Mosaico visual con las fotos principales de la propiedad.
* **HostInfo:** Sección con la foto y descripción del anfitrión.
* **BookingWidget:** Formulario lateral para elegir fechas, huéspedes y ver el total del precio.
* **AmenitiesList:** Listado de servicios con iconos (Wifi, Cocina, Aire acondicionado).

---

## 4. Descripción del usuario y objetivo
El usuario es una persona que planea un viaje y busca alojamiento que se ajuste a sus necesidades de presupuesto y comodidad. 

**Objetivo:** Conseguir una experiencia de reserva clara, rápida y sin fricciones. El usuario busca visualizar con precisión el lugar donde se hospedará y confirmar la disponibilidad de los servicios necesarios para tomar una decisión de compra segura.