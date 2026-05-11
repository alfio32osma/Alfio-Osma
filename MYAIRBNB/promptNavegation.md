# Prompt: Implementación de Navegación en Next.js

Actúa como un experto en Next.js. Necesito implementar la lógica de navegación entre la página principal (Home/Catálogo) y la página de detalle de habitación, cumpliendo estrictamente con los siguientes requisitos:

### 1. Navegación desde Tarjetas de Alojamiento
- En los componentes de tarjeta (ya sea en la Home o en el Catálogo), envuelve la estructura o el elemento de acción principal para que, al hacer clic, redirija a la ruta dinámica `/rooms/[id]`.
- Asegúrate de pasar el ID correcto de la habitación a la URL.

### 2. Uso de Componentes Oficiales
- **REGLA ESTRICTA:** Utiliza exclusivamente el componente `<Link>` de `next/link` para toda la navegación interna.
- **PROHIBIDO:** No utilices etiquetas `<a href="...">` planas, ya que rompen la navegación de Single Page Application (SPA) en Next.js.

### 3. Botón de Retorno / Breadcrumb
- En el componente de la página de detalle (`RoomDetailPageClient`), añade en la parte superior un botón de **"Volver al Catálogo"** o un sistema de **Breadcrumb**.
- Este elemento debe usar también el componente `<Link>` y apuntar a la ruta `/catalog` o `/`.
- Estiliza el botón con un icono de flecha hacia la izquierda (usa `lucide-react`) y asegúrate de que sea visualmente coherente con el resto de la interfaz.

### Requisitos Técnicos
- El código debe ser **completo, funcional y no simplificado**.
- Usa **Tailwind CSS** para los estilos del botón de volver.
- Asegúrate de que las importaciones sean correctas según la estructura de archivos de Next.js (App Router).