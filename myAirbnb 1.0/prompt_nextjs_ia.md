# Prompt para Configuración de Proyecto Next.js 16

**Instrucciones para la IA:** Actúa como un principiante en Ingeniería de Software y Next.js. Genera el código completo y funcional con simplificaciones.

## 1. Requisitos Técnicos
* **Framework:** Next.js 16 (Versión estable más reciente).
* **Arquitectura:** App Router.
* **Lenguaje:** TypeScript.
* **Estilos:** Tailwind CSS.
* **Directorio `src/`:** Sí.
* **Alias de importación:** `@/*`.

## 2. Comando de Inicialización
Genera el comando `npx` con todos los flags automáticos para una instalación no interactiva:
`npx create-next-app@latest . --ts --tailwind --eslint --app --src-dir --import-alias "@/*"`

## 3. Estructura y Código (Full Snippets)
Genera el código funcional completo para los siguientes archivos, asegurando que la carpeta de componentes sea independiente:

### A. Componente Reutilizable
`src/components/ui/Button.tsx`: Un componente de botón con variantes de Tailwind CSS.

### B. Página de Inicio
`src/app/page.tsx`: Una landing page limpia que importe y utilice el componente `Button`.

### C. Layout Principal
`src/app/layout.tsx`: Configuración de fuentes de Google y metadatos básicos.

## 4. Reglas de Salida
* **Código Completo:** No uses comentarios tipo "// rest of the code". Entrega el archivo entero.
* **Tipado Estricto:** Asegura que todas las interfaces de TypeScript estén definidas.
* **Estructura:** Mantén `/components` dentro de `/src` pero fuera de `/app`.
