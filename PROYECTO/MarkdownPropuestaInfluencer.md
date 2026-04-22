# Dashboard para Influencers: Medición de Impacto y Conversión

## 🎯 El Reto
Una influencer que está empezando a relacionarse con marcas necesita medir el impacto de sus anuncios y su conversión. El problema es que tiene múltiples cuentas en redes sociales (Instagram, TikTok, YouTube, etc.) y necesita consolidar toda la información en un tablero de reporte para responder preguntas clave como:

* ¿Cuánto dinero estoy generando en comisiones?
* ¿Qué productos están generando más ingresos?
* ¿Qué tan bien convierten mis anuncios (conversiones / alcance)?
* ¿Qué plataformas están generando mejor retorno (ingresos/costes)?
* ¿Cuál es el *engagement rate* por plataforma y por producto?

Tu misión es diseñar un dashboard sólido y profesional que consolide la información de todas sus redes sociales y le muestre lo más importante para tomar decisiones rápidas.

---

## 💼 Contexto del Negocio
Para los cálculos y datos de muestra, se deben considerar los siguientes parámetros:
* **Productos:** Dispone de 3 productos promocionados con precios distintos:
    * **Producto A:** 50€
    * **Producto B:** 120€
    * **Producto C:** 80€
* **Comisión:** Por cada venta generada, la influencer recibe una **comisión del 15%**.

---

## 🏗️ Estructura del Dashboard
El dashboard debe organizarse en tres grandes bloques funcionales:

### 1. Bloque Superior: Indicadores Principales (KPIs)
* **Volumen:** Ventas, inscripciones, usuarios activos, impresiones.
* **Ingresos:** Revenue (comisiones, ventas), MRR, precio medio de venta.
* **Engagement:** Tasa de engagement, interacciones totales, tasa de conversión.
* **Rendimiento:** Conversiones totales, CTR (tasa de clics).
* **Eficiencia:** Coste por resultado, margen.

### 2. Bloque Intermedio: Drivers (Factores de resultado)
* **Conversión por etapas:** Funnel de ventas.
* **Rendimiento por plataforma:** Comparativa entre Instagram, TikTok, YouTube, etc.
* **Rendimiento por producto:** Qué producto genera más comisiones y mejor conversión.
* **Actividad:** Posts publicados, stories, reels, videos por plataforma.

### 3. Bloque Inferior: Detalles Operacionales
* **Tabla de productos:** Precios, comisiones generadas, ROI por producto.
* **Tabla de plataformas:** Alcance, engagement, conversiones, mejor plataforma por métrica.
* **Alertas/Listados:** Caídas en conversión, picos de rendimiento, "top productos" y "top plataformas".

---

## 🛠️ Especificaciones Técnicas (Obligatorio)

Este proyecto debe construirse bajo las siguientes reglas estrictas:

1.  **Tecnologías:** Solo HTML y **Tailwind CSS v4**.
2.  **No Frameworks:** No se permite el uso de React, Vue, Angular o similares.
3.  **Configuración Tailwind:** * Se debe utilizar la arquitectura de **Tailwind CSS v4**.
    * **Prohibido** usar el CDN antiguo (`cdn.tailwindcss.com`) o instrucciones exclusivas de la v3 que hayan quedado obsoletas.
4.  **Diseño Mobile-First:** El layout debe empezar por la pantalla más pequeña y adaptarse mediante breakpoints (`sm:`, `md:`, `lg:`) a tablet y escritorio.
5.  **HTML Semántico:** Uso correcto de etiquetas `<header>`, `<nav>`, `<main>`, `<section>`, `<table>`, etc.
6.  **Componentes Reutilizables:** Mantener consistencia visual en cards, botones y tablas.

---

## ✅ Criterios de Evaluación

Se evaluará el proyecto basándose en:

* **Jerarquía y Lógica:** Uso correcto de etiquetas estructurales y landmarks.
* **Dominio de Tailwind CSS:** Aplicación de utilidades sin CSS personalizado redundante. Uso adecuado de Flexbox y Grid.
* **Separación de Bloques:** Claridad en la distinción entre KPIs, Drivers y Operativo.
* **Responsividad:** El diseño debe ser funcional en al menos 3 tamaños de dispositivo sin scroll horizontal ni rotura del layout.

---

> **Nota:** No se valora si los KPIs elegidos son "correctos" para el negocio real, sino la estructura, el uso de Tailwind CSS y la capacidad de respuesta (responsividad) de la interfaz.