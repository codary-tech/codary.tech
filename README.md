# Codary.tech

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)](package.json)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue)](package.json)
[![Astro](https://img.shields.io/badge/Astro-5.2.5-FF5D01)](package.json)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

[![Link Checking](https://github.com/codary-tech/codary.tech/actions/workflows/links.yml/badge.svg)](https://github.com/codary-tech/codary.tech/actions/workflows/links.yml)
[![Lighthouse CI](https://github.com/codary-tech/codary.tech/actions/workflows/pagespeed-insights.yml/badge.svg)](https://github.com/codary-tech/codary.tech/actions/workflows/pagespeed-insights.yml)

> 🚀 Un blog técnico moderno construido con Astro, enfocado en rendimiento y experiencia de usuario.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/codary-tech/codary.tech)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/codary-tech/codary.tech)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/codary-tech/codary.tech?devcontainer_path=.devcontainer/basics/devcontainer.json)

**Codary.tech** es el sitio web oficial basado en el [Astro Starter Kit: Basics](https://astro.build). Está construido con tecnologías modernas para ofrecer un sitio rápido, escalable y fácil de mantener.

## Tabla de Contenidos

- [Codary.tech](#codarytech)
	- [Tabla de Contenidos](#tabla-de-contenidos)
	- [Descripción](#descripción)
	- [Características](#características)
	- [Tecnologías Utilizadas](#tecnologías-utilizadas)
	- [Entorno de Desarrollo](#entorno-de-desarrollo)
		- [Requisitos del Sistema](#requisitos-del-sistema)
		- [Configuración del Editor](#configuración-del-editor)
	- [Guía de Desarrollo](#guía-de-desarrollo)
		- [Estructura de Branches](#estructura-de-branches)
		- [Flujo de Trabajo](#flujo-de-trabajo)
		- [Convenciones de Código](#convenciones-de-código)
	- [Solución de Problemas](#solución-de-problemas)
		- [Problemas Comunes](#problemas-comunes)
		- [Logs y Debugging](#logs-y-debugging)
	- [Requisitos Previos](#requisitos-previos)
	- [Instalación](#instalación)
	- [Scripts y Comandos](#scripts-y-comandos)
	- [Despliegue](#despliegue)
	- [Contribuciones](#contribuciones)
		- [Proceso de Pull Request](#proceso-de-pull-request)
		- [Guías de Estilo](#guías-de-estilo)
	- [Licencia](#licencia)
	- [Contacto](#contacto)
	- [Contribuciones en el Repositorio](#contribuciones-en-el-repositorio)

## Descripción

Este proyecto es el sitio web de **Codary.tech**. Basado en Astro, aprovecha lo último en tecnologías web para generar páginas estáticas con tiempos de carga ultrarrápidos y una estructura modular que facilita su mantenimiento y escalabilidad.

## Características

- **Rendimiento Optimizado:** Construido con Astro para generar páginas estáticas y ligeras.
- **Código Modular:** Organización por componentes y layouts que facilitan el desarrollo y la ampliación.
- **Soporte Multilenguaje:** Utiliza tecnologías como TypeScript, JavaScript, CSS y MDX para una experiencia de desarrollo moderna.
- **Despliegue Sencillo:** Genera una carpeta de producción (`./dist`) lista para desplegar en servicios como Netlify, Vercel o GitHub Pages.

## Tecnologías Utilizadas

![Astro](https://img.shields.io/badge/Astro-FF5D01?logo=astro&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-f0db4f?logo=javascript&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=white)
![MDX](https://img.shields.io/badge/MDX-000000?logo=mdx&logoColor=white)

- [Astro](https://astro.build) – Framework moderno para crear sitios web estáticos.
- [TypeScript](https://www.typescriptlang.org) – Superset de JavaScript con tipado estático.
- [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) – Lenguaje de programación esencial para la web.
- [CSS](https://developer.mozilla.org/es/docs/Web/CSS) – Para el estilizado de la interfaz.
- [MDX](https://mdxjs.com) – Permite integrar JSX en archivos Markdown.

## Entorno de Desarrollo

### Requisitos del Sistema

- Sistema Operativo: Windows, macOS, o Linux
- Node.js: v14.x o superior
- pnpm v8.x o superior (aunque también puedes usar npm/yarn)
- Git

### Configuración del Editor

Recomendamos Visual Studio Code con las siguientes extensiones:

- Biome
- Astro
- Tailwind CSS IntelliSense

## Guía de Desarrollo

### Estructura de Branches

- `main`: Rama principal de producción
- `feature/*`: Ramas para nuevas funcionalidades
- `fix/*`: Ramas para correcciones de bugs

### Flujo de Trabajo

1. Crea una nueva rama desde `main`

   ```bash
   git checkout -b feature/nueva-funcionalidad main
   # o
   git checkout -b fix/bug-correccion main
   ```

2. Desarrolla tu funcionalidad o corrección
3. Ejecuta tests y linting
4. Crea un Pull Request hacia `main`

### Convenciones de Código

- Seguimos [Conventional Commits](https://www.conventionalcommits.org/)
- Usamos ESLint y Prettier para formato de código
- Los tests son obligatorios para nuevas funcionalidades

## Solución de Problemas

### Problemas Comunes

1. **Error: Cannot find module 'xyz'**

   ```bash
   pnpm install
   ```

2. **Error de puerto en uso**

   ```bash
   lsof -i :4321
   kill -9 <PID>
   ```

### Logs y Debugging

- Logs de desarrollo: `npm run dev -- --verbose`
- Análisis de bundle: `npm run analyze`

## Requisitos Previos

- [Node.js](https://nodejs.org) v14 o superior.
- [npm](https://www.npmjs.com) o [pnpm](https://pnpm.io).

## Instalación

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/codary-tech/codary.tech.git
   ```

2. **Accede al directorio del proyecto:**

   ```bash
   cd codary.tech
   ```

3. **Instala las dependencias:**

   ```bash
   pnpm install
   ```

   > También puedes usar npm o yarn si lo prefieres

## Scripts y Comandos

Desde la raíz del proyecto, utiliza los siguientes comandos:

- **Instalar dependencias:**

  ```bash
  pnpm install
  ```

- **Iniciar el servidor de desarrollo:**

  ```bash
  pnpm dev
  ```

  Accede a `http://localhost:4321` para ver el sitio en funcionamiento.

- **Construir el sitio para producción:**

  ```bash
  pnpm build
  ```

- **Previsualizar la build de producción:**

  ```bash
  pnpm preview
  ```

- **Ejecutar comandos de Astro:**

  ```bash
  pnpm astro --help
  ```

## Despliegue

Para desplegar el sitio en producción:

1. **Construye el sitio:**

   ```bash
   pnpm run build
   ```

2. **La versión de producción se genera en la carpeta `./dist/`.**

3. **Despliega el contenido de `dist` en la plataforma de hosting de tu elección** (por ejemplo, Netlify, Vercel o GitHub Pages).

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas ayudar a mejorar este proyecto, sigue estos pasos:

1. Haz un *fork* del repositorio.
2. Crea una rama para la nueva funcionalidad o corrección:

   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

3. Realiza tus cambios y haz un commit:

   ```bash
   git commit -m "Añadir nueva funcionalidad"
   ```

4. Envía un *pull request* describiendo los cambios realizados.

### Proceso de Pull Request

1. **Fork y Clone**

   ```bash
   git clone https://github.com/your-username/codary.tech.git
   ```

2. **Configura el Repositorio**

   ```bash
   git remote add upstream https://github.com/codary-tech/codary.tech.git
   ```

3. **Crea una Rama**

   ```bash
   git checkout -b feature/amazing-feature
   ```

4. **Commit y Push**

   ```bash
   git commit -m "feat: add amazing feature"
   git push origin feature/amazing-feature
   ```

### Guías de Estilo

- **JavaScript/TypeScript**: [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
- **Commits**: [Conventional Commits](https://www.conventionalcommits.org/)
- **Documentación**: Documenta cualquier nueva funcionalidad o cambio

```mermaid
graph TD
    subgraph "Frontend/Presentation Layer"
        FEComponents["Astro Components & i18n"]:::frontend
        FELayouts["Layouts"]:::frontend
        FEPages["Pages"]:::frontend
        FEStyles["Global Styles"]:::frontend
    end

    subgraph "Content/Data Layer"
        DataArticles["MDX Articles & Content"]:::data
        DataModels["Data Models"]:::data
    end

    subgraph "API/Backend Layer"
        APIEndpoints["API Endpoints"]:::api
    end

    subgraph "External Service Integration"
        Supabase["Supabase Service"]:::external
    end

    subgraph "Build & Deployment"
        AstroConfig["Astro Configuration"]:::build
        PackageCI["Package & CI/CD"]:::build
        DevContainer["Dev Container Setup"]:::build
    end

    FEComponents -->|"renders"| FELayouts
    FELayouts -->|"composes"| FEPages
    FEPages -->|"styledBy"| FEStyles
    DataArticles -->|"processedBy"| DataModels
    DataModels -->|"suppliesDataTo"| FEPages
    FEPages -->|"calls"| APIEndpoints
    APIEndpoints -->|"invokes"| Supabase
    AstroConfig -->|"builds"| FEComponents
    AstroConfig -->|"buildsContent"| DataArticles
    PackageCI -->|"triggersBuild"| AstroConfig
    DevContainer -->|"setsEnv"| PackageCI

    classDef frontend fill:#D1E8FF,stroke:#0366d6,stroke-width:2px;
    classDef data fill:#FFF2CC,stroke:#B58900,stroke-width:2px;
    classDef api fill:#FFE6E6,stroke:#D04437,stroke-width:2px;
    classDef external fill:#E6FFED,stroke:#28A745,stroke-width:2px;
    classDef build fill:#F0F0F0,stroke:#6F42C1,stroke-width:2px;

    %% Click Events
    click FEComponents "https://github.com/codary-tech/codary.tech/tree/main/src/components"
    click FEComponents "https://github.com/codary-tech/codary.tech/tree/main/src/components/i18n"
    click FELayouts "https://github.com/codary-tech/codary.tech/tree/main/src/layouts"
    click FEPages "https://github.com/codary-tech/codary.tech/tree/main/src/pages"
    click FEStyles "https://github.com/codary-tech/codary.tech/tree/main/src/styles"
    click DataArticles "https://github.com/codary-tech/codary.tech/tree/main/src/data"
    click DataModels "https://github.com/codary-tech/codary.tech/tree/main/src/models"
    click APIEndpoints "https://github.com/codary-tech/codary.tech/tree/main/src/pages/api"
    click Supabase "https://github.com/codary-tech/codary.tech/tree/main/supabase"
    click Supabase "https://github.com/codary-tech/codary.tech/blob/main/src/lib/supabase.helper.ts"
    click Supabase "https://github.com/codary-tech/codary.tech/blob/main/src/lib/supabase.ts"
    click AstroConfig "https://github.com/codary-tech/codary.tech/blob/main/astro.config.mjs"
    click PackageCI "https://github.com/codary-tech/codary.tech/blob/main/package.json"
    click PackageCI "https://github.com/codary-tech/codary.tech/tree/main/.github/workflows"
    click DevContainer "https://github.com/codary-tech/codary.tech/blob/main/.devcontainer"
```

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

- **Autor:** [yacosta738](https://github.com/yacosta738)
- **Sitio Web:** [codary.tech](https://codary.tech)
- **Soporte y Consultas:** Abre un issue en el repositorio o contacta al autor a través de sus redes sociales.
