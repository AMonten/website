# Alberto Montenegro | Personal Website 🚀
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Hosted on Netlify](https://img.shields.io/badge/Hosted%20on-Netlify-00C7B7?logo=netlify&logoColor=white)](https://amonten.com)

[🌐 Ver mi sitio web](https://amonten.com)


Bienvenido a mi sitio web personal, un portafolio simple pero elegante para mostrar mi perfil profesional, intereses y redes sociales. 🎨💻

## 🛠️ Tecnologías Utilizadas

Este sitio web ha sido desarrollado utilizando:
- **HTML5** 📄 - Estructura del contenido.
- **CSS3** 🎨 - Estilización y diseño responsivo.
- **Google Fonts** 🔤 - Fuentes tipográficas utilizadas: Reem Kufi y Roboto.
- **SVG inline ([Simple Icons](https://simpleicons.org/), MIT)** 🎭 - Íconos para enlaces a redes sociales, sin dependencia de ninguna librería externa.
- **Netlify Functions** ⚡ - Proxy server-side para el ticker de acciones (Finnhub), sin exponer ninguna API key en el cliente.

## 📥 Instalación y Uso

Si deseas clonar y ejecutar este proyecto en tu máquina local, sigue estos pasos:

### 1. 🔽 Clonar el repositorio
```bash
 git clone https://github.com/AMonten/website.git
```

### 2. 🌐 Abrir en un navegador
Navega hasta la carpeta del proyecto y abre `index.html` en tu navegador preferido.

### 3. 📈 Ticker de acciones (Netlify Function)
El ticker no llama a Finnhub directo desde el navegador — pasa por `netlify/functions/quotes.js` para que la API key nunca quede expuesta en el cliente. Para que funcione en un deploy de Netlify hay que configurar la variable de entorno `FINNHUB_API_KEY` (Site configuration → Environment variables, o `netlify env:set FINNHUB_API_KEY <tu-key>`) con una API key de [Finnhub](https://finnhub.io/) — nunca la pongas directamente en el código.

### 4. 🎨 Personalización
Si deseas cambiar el tema de colores, edita directamente `white-blue.css` en la raíz del proyecto (es la única hoja de tema que carga `index.html` hoy).

## 📁 Estructura del Proyecto
```
website/
├── index.html           # Página principal
├── reset.css            # Reset básico de estilos
├── styles.css           # Estilos generales del sitio
├── white-blue.css       # Tema de colores activo
├── robots.txt / sitemap.xml
├── site.webmanifest
├── favicon.ico, favicon.svg, favicon-*.png, apple-touch-icon.png, android-chrome-*.png, web-app-manifest-*.png
├── netlify.toml         # Config de build/functions de Netlify
├── _headers             # Cache-Control por tipo de archivo
└── netlify/
    └── functions/
        └── quotes.js    # Proxy server-side a Finnhub (ver sección del ticker)
```

## 🙌 Créditos
- **Desarrollador:** [Alberto Montenegro](https://github.com/AMonten) 👨‍💻
- **Fuentes:** [Google Fonts](https://fonts.google.com/) 🔠
- **Íconos:** [Simple Icons](https://simpleicons.org/) 🎭
- **Hosting:** [Netlify](https://www.netlify.com/) ⚡
- **Datos de mercado:** [Finnhub](https://finnhub.io/) 📈

## 📜 Licencia
Este proyecto es de código abierto bajo la licencia MIT. ¡Siéntete libre de usarlo y modificarlo a tu gusto! ✨
