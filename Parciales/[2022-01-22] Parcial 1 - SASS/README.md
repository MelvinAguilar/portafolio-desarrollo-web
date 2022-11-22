# Primer examen parcial - PW2022

Realizado por el grupo de trabajo 27 los-fullstack

- [Primer examen parcial - PW2022](#primer-examen-parcial---pw2022)
  - [Indicaciones generales](#indicaciones-generales)
    - [Uso exclusivo de sass](#uso-exclusivo-de-sass)
    - [.gitignore](#gitignore)
    - [Orden de código](#orden-de-código)
    - [Trabajo en equipo](#trabajo-en-equipo)
    - [Entrega](#entrega)
  - [Recursos y medidas utilizados](#recursos-y-medidas-utilizados)
    - [Fuentes](#fuentes)
    - [Colores](#colores)
    - [Imágenes](#imágenes)
  - [Resultado esperado](#resultado-esperado)
    - [PC Render](#pc-render)
    - [Tablet Render](#tablet-render)
    - [Phone Render](#phone-render)

## Indicaciones generales

Dada la estructura y los archivos proporcionados en este repositorio, generar un sitio web que garantice los estándares y elementos que se muestran en la sección de [Resultado esperado](#resultado-esperado).

Con el fin de ahondar en algunos puntos dentro del examen, se encuentra disponible el siguiente [vídeo](https://youtu.be/h093vGCvUuM).

Además, se deben de tomar en cuenta los siguientes aspectos dentro del desarrollo del sitio web

### Uso exclusivo de sass

Para los estilos se requiere el uso exclusivo del pre-procesador sass (scss). Cualquier uso de únicamente css, anulará la entrega.

Para la estructura de los archivos, se requiere el uso de módulos de sass, dividendo el proyecto en, por lo menos, los siguientes elementos: *base, layouts, components*

Además, se debe garantizar el uso de variables y mixins, con el fin de reutilizar elementos y estructuras.

### .gitignore

El archivo *gitignore* garantiza que no se suba al repositorio cualquier archivo css, enfatizando el uso exclusivo de scss.

Para la defensa del parcial, se clonará el repositorio de cada equipo, y se correrá el siguiente comando:

```
sass assets/sass/main.scss assets/css/style.css
```
Por lo que, se debe garantizar que la estructura de archivos se adapte a este comando.

> No se modificará ningún elemento dentro de los repositorios para que funcione el comando. Debe de adaptarse desde el inicio

> Cualquier modificación al archivo, invalida la nota del equipo
### Orden de código

En todo momento se debe garantizar que la legibilidad y estructura del proyecto sea excelente. Además, se debe evitar el uso de identificadores poco semánticos, como *este-bolado* o *i_01*; utilizar mejor identificadores que representen los elementos que almacenan o seleccionan, aunque sean mas largos
### Trabajo en equipo

La realización del proyecto es, en su totalidad, un trabajo colaborativo; por lo que, en todo momento se debe de trabajar en equipo, representado de forma tangible con los commits en el repositorio.

Para garantizar este apartado, se requiere que, por integrante, se realicen al menos 5 commits. Estos deben de poseer un mensaje que represente el trabajo reportado en la versión, y no se una carga completa de todo el proyecto.

Cualquier incumplimiento de esta norma, afectará el modificador individual de miembro involucrado.

### Entrega

La entrega se realizará a través de este repositorio en github, respetando las normas presentadas en clase, laboratorios y tareas.

La fecha límite para el último commit será el 21 de septiembre del 2022, hasta las 23:30.

## Recursos y medidas utilizados

A continuación se muestra una lista de los elementos, medidas y estándares que se han utilizado para la realización del sitio web
### Fuentes

- Roboto (Google Font)
- Montserrat (Google Font)
- Space Mono (Google Font)
- Handlee (Google Font)

### Colores

- `color-primary: hsl(213, 58%, 19%);`
- `color-primary-light: hsl(213, 33%, 33%);`
- `color-accent: hsl(224, 100%, 58%);`
- `color-accent-dark: hsl(223, 100%, 40%);`
- `color-accent-light: hsl(229, 100%, 73%);`
- `color-accent-alt: hsl(166, 37%, 73%);`
- `color-accent-alt-dark: hsl(173, 100%, 91%);`
- `color-accent-alt-light: hsl(166, 22%, 54%);`
- `background-color: white;`
- `background-color-alt: hsl(0, 0%, 93%);`
- `background-color-alt-dark: hsl(0, 0%, 85%);`
- `text-color: hsl(0, 0%, 25%);`
- `text-color-alt: white;`
- `heading-color: hsl(0, 0%, 0%);`

### Imágenes

Estas pueden ser encontradas en el directorio *images* dentro de *assets*

## Resultado esperado

### PC Render

![PC Render](./results/PC_render.png)

### Tablet Render

![PC Render](./results/Tablet_render.png)

### Phone Render

![PC Render](./results/Phone_render.png)
