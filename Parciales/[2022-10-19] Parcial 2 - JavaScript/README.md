# Segundo examen parcial - PW2022

- [Segundo examen parcial - PW2022](#segundo-examen-parcial---pw2022)
  - [Indicaciones generales](#indicaciones-generales)
    - [Acumulación de conocimientos](#acumulación-de-conocimientos)
    - [Uso exclusivo de JS](#uso-exclusivo-de-js)
    - [UI/UX](#uiux)
    - [API](#api)
    - [Modularización de código](#modularización-de-código)
    - [Orden de código](#orden-de-código)
    - [Trabajo en equipo](#trabajo-en-equipo)
    - [Entrega](#entrega)
    - [Sobre consultas](#sobre-consultas)
  - [Contexto del caso de aplicación](#contexto-del-caso-de-aplicación)
    - [Background](#background)
    - [A realizar](#a-realizar)
    - [Funcionalidad de Boosters](#funcionalidad-de-boosters)
    - [Funcionalidad de Administración de deck](#funcionalidad-de-administración-de-deck)
    - [Estructura general del sitio](#estructura-general-del-sitio)
    - [Consideraciones / Requerimientos](#consideraciones--requerimientos)
  - [Recursos y medidas utilizados](#recursos-y-medidas-utilizados)
    - [Fuentes](#fuentes)
    - [Colores](#colores)
    - [Imágenes](#imágenes)
  - [Resultado esperado](#resultado-esperado)
    - [PC Render](#pc-render)
    - [Tablet Render](#tablet-render)
    - [Phone Render](#phone-render)

## Indicaciones generales

A continuación, se presenta un caso de aplicación donde, a partir de los conocimientos generados en las clases, tareas y laboratorios, se generará un sitio web que garantice los estándares y elementos que se muestran en la sección de [Resultado esperado](#resultado-esperado).

Con el fin de ahondar en algunos puntos dentro del examen, se encuentra disponible el siguiente [vídeo](https://youtu.be/qKfdBEFe5Qc).

Además, se deben de tomar en cuenta los siguientes aspectos dentro del desarrollo del sitio web

> Sugerencia: Leer todas las indicaciones antes de comenzar

### Acumulación de conocimientos

En esta evaluación se tomará en cuenta, no solo la lógica del sitio web. Además de eso, se evaluarán aspectos relacionados con la creación de interfaces de usuario (HTML y CSS), orientado a la dinamización del sitio y la creación de contenido de acuerdo a las distintas interacciones del usuario.

### Uso exclusivo de JS

Para la parte de  lógica y dinámica del sitio web, se podrá utilizar exclusivamente JavaScript puro. Cualquier librería (como JQuery), quedan restringidas en su uso.

El uso de alguna de estas librerías invalida el examen, y la nota. 

### UI/UX

La interfaz gráfica es una parte importante del desarrollo en esta evaluación. El resultado que se espera, no es una copia exacta del sitio que se muestra en los Resultados; este, mas bien, es una guía que les permitirá visualizar de forma mas sencilla los requerimientos solicitados.

Es importante que, aunque no se utilicen los colores, formas, o estilos del ejemplo, si se debe de mantener la esencia, garantizando que todas las interacciones mostradas se implementen en el resultado final (Animaciones, posicionamiento, orden de elementos, responsive, etc).

Pueden encontrar mas información de las interacciones en el vídeo que se encuentra al inicio de esta sección.

### API

La API que se utilizará unicamente será la que se encuentra definida en el contexto del parcial. 

Enlace: [https://scryfall.com/docs/api](https://scryfall.com/docs/api)

> Sugerencia: Revisar la documentación y entender los filtros antes de comenzar a trabajar

### Modularización de código

Se garantiza que el código entregado cumpla con dos requisitos importantes:

1. El código se encuentra separado por módulos lógicos y semánticos, que agrupan métodos y variables afines (p.e. servicios, helpers, binders, etc)
   
2. Existe la menor cantidad de código repetido. Es decir, está optimizado de tal forma que la reutilización de componentes y métodos es una prioridad en la implementación de la solución

### Orden de código

En todo momento se debe garantizar que la legibilidad y estructura del proyecto sea excelente. Además, se debe evitar el uso de identificadores poco semánticos, como *este-bolado* o *i_01*; utilizar mejor identificadores que representen los elementos que almacenan o seleccionan, aunque sean mas largos

### Trabajo en equipo

La realización del proyecto es, en su totalidad, un trabajo colaborativo; por lo que, en todo momento se debe de trabajar en equipo, representado de forma tangible con los commits en el repositorio.

Para garantizar este apartado, se requiere que, por integrante, se realicen al menos 7 commits. Estos deben de poseer un mensaje que represente el trabajo reportado en la versión, y no ser una carga completa de todo el proyecto, archivos vacíos, o modificaciones de 1 letra.

Además, debe de tenerse cuidado de las ramas que se utilicen, y su incorporación en el contenido principal del proyecto. Solo se calificará la solución que se encuentre en la rama main, y no se realizará ningún paso de merge, o resolución de conflictos.

Cualquier incumplimiento de esta norma, afectará el modificador individual de miembro involucrado.

### Entrega

La entrega se realizará a través de este repositorio en github, respetando las normas presentadas en clase, laboratorios y tareas.

La fecha límite para el último commit será el 20 de septiembre del 2022, hasta las 07:00.

### Sobre consultas

Solo se atenderán consultas en un horario en específico, y de forma presencial. Cualquier pregunta en otro medio y/o lugar, no será atendida.

Este espacio será el Miércoles 19 de octubre, de 14:00 a 17:30, en la oficina del docente de la materia (si no se me encuentro ahí, estaré en los laboratorios).

las preguntas deberán ser de forma y no de contenido, es decir, no se solucionarán bugs, no se darán respuestas, etc

## Contexto del caso de aplicación

### Background

> Aclaración: Se han omitido detalles del juego para simplificar las funcionalidades.

Magic: The Gathering, frecuentemente abreviado como Magic, MTG y Cartas Magic, es un juego de cartas coleccionables diseñado en 1993 por Richard Garfield. Cada partida de Magic representa una batalla entre poderosos magos (en el juego conocidos como planeswalkers), en el que cada uno de estos es uno de los jugadores de la partida. Los jugadores pueden usar hechizos (conjuros, artefactos, tierras, criaturas fantásticas, etc.), representados individualmente en cada carta, para derrotar a sus oponentes. (Fuente: Wikipedia).

Cada jugador posee una biblioteca (deck) de cartas, que puede utilizar en las partidas que juegue. Las cartas, de forma tradicional, son obtenidas en sobres (boosters) de 12 o 15 unidades, seleccionadas al alzar de un conjunto específico (set).

Cada carta posee información acerca del hechizo que representa. En la siguiente imagen se muestran las partes mas importantes de una carta en MTG, de las cuales resaltan:

1. Nombre del hechizo
2. Coste de maná para invocar el hechizo
3. Tipo de carta, entre las cuales se pueden encontrar
   1. Criaturas
   2. Conjuros
   3. Artefactos
   4. Instantáneo
   5. Encantamientos
   6. Planeswakers
   7. Combinación entre ellas
4. Símbolo de expansión, que representa el set a la que pertenece la carta. El color del símbolo representa la rareza de la carta, entre las que encontramos:
   1. Comunes
   2. No-Comunes
   3. Raras
   4. Míticas
5. Oráculo, que representa la descripción de la carta en sí; este brinda los efectos de los hechizos al entrar en batalla.
6. Fuerza y Resistencia, que representan los atributos de una criatura. Se utiliza para calcular el daño y defensa en una batalla. La sintaxis es &lt;fuerza&gt;/&lt;resistencia&gt;

![Anatomía de Carta Magic](./results/anatomia_carta.png)

### A realizar

Se le solicita que, a partir del contexto brindado anteriormente, realize una herramienta web que realize las siguientes funcionalidades:

1. Obtención de booster: Una herramienta que permita simular la obtención de un sobre completamente al alzar de cartas de MTG, respetando las reglas que se detallarán posteriormente.
2. Manejo de deck: Una herramienta que me permita administrar una librería de cartas de MTG, a partir de las cartas que se obtengan en la funcionalidad anterior.

La información de las cartas se obtendrán del compendio de cartas Scryfall, el cual provee una API para el desarrollo de aplicaciones que giran alrededor de MTG. El enlace de la documentación es el siguiente: [https://scryfall.com/docs/api](https://scryfall.com/docs/api)

La página principal de Scryfall, para que puedan probar los filtros y las búsquedas avanzadas de cartas, es la siguiente: [https://scryfall.com/](https://scryfall.com/)

### Funcionalidad de Boosters

La funcionalidad de boosters girará en torno a consumir la información que Scryfall pueda proporcionarnos. En la realidad, los boosters siguen ciertas reglas y características, que la herramienta deberá implementar.

1. Cantidad de cartas: Limitaremos la herramienta al contenido de los boosters clásicos, los cuales poseen 15 cartas de un set específico.
2. Tipos de cartas: En este formato de booster sellado, siempre se cumplen las siguientes consideraciones con los tipos de cartas: 
   - 1 carta rara, 1 tierra básica, 3 no-comunes, 10 comunes
   - En una caja de boosters, estadísticamente, cada 8 sobres se cumple: 1 carta mítica, 1 tierra básica, 3 no-comunes, 10 comunes

Estas reglas deberán de cumplirse, al momento de solicitar un nuevo booster de cartas. Por lo que deberán de realizarse los filtros necesarios, al momento de consumir la información de la API

La herramienta llevará el control de cuantos sobres ha abierto el usuario, y lo mantendrá en cache para futuros usos de la app. Lo que significa que, cada 8 sobres, deberá aparecer una carta mítica.

Con el fin de simplificar las consultas en scryfall y mejoras de QoL, realizaremos las siguientes modificaciones a las reglas:
1. Se ignorará el set de pertenencia del booster, se realizará de forma general con la base de cartas de scryfall,
2. La carta mítica no aparecerá cada 8 boosters, sino que cada 4.

Se deberá proporcionar al usuario la posibilidad de realizar las siguientes acciones dentro de la sección:
1. Obtener un nuevo booster. Si ya existe uno, se reemplazará
2. Guardar todas las cartas en el deck, que almacenará una copia de cada carta en el deck
3. Limpiar la información del booster

Con el fin de brindar una sensación similar al abrir un sobre, se deberá mostrar siempre el espacio para las 15 cartas. En el caso de no haber solicitado aún, o haber borrado la info se mostrará el reverso de una carta. Además, las cartas no aparecerán de golpe, sino que irán 1 por 1, con un retraso de 1 segundo entre cada una de ellas

Para finalizar, cuando se muestren las cartas, se debe proporcionar un botón por carta, que permita al usuario añadir el hechizo al deck.
### Funcionalidad de Administración de deck

La administración del deck se alimenta de la información proporcionada por la funcionalidad de booster. En general se limitará a mostrar las cartas que se han guardado de los boosters. Se debe de tomar las siguientes consideraciones para ello:

1. Se pueden guardar multiples copias de 1 misma carta
2. Se debe proporcionar 1 botón de eliminar por carta, para sacarla del deck. No debe de borrar todos los ejemplares de 1 misma carta, solo la que se seleccionó
3. Se deben de separar las cartas por tipos (Criaturas, conjuros, etc), y solo se deben de mostrar esas categorías si existe al menos 1 ejemplar dentro del deck. Caso contrario no se debe mostrar el espacio
4. Los tipos a mostrar deben de ser dinámicos con lo que la API devuelva; no deben de estar quemados en el código

El contenido del deck deberá almacenarse en cache, para poder consultar su valor en el futuro (debe persistir al dar f5).

Por último, se debe dar al usuario la posibilidad de borrar el contenido de todo el deck.

### Estructura general del sitio

Dentro de la página se pueden identificar 3 secciones principales

1. Landing page: con dos enlaces a las secciones de booster y my deck. Al presionar una, deberá de navegar a cada sección respectivamente. En el caso del booster, deberá realizar el primer pedido de cartas
2. Boosters: Contiene la funcionalidad de obtención de boosters
3. My Deck: Contiene la funcionalidad de administración de deck

### Consideraciones / Requerimientos

1. Los jugadores de MTG, les gusta poder ver de forma clara la carta, por la que los componentes de las cartas, no debe de ser invasivo ni limitar la visión general de todas las cartas; por lo que la información extra debe de aparecer en una interacción del usuario, y no desde el inicio
2. Tanto en la sección de booster como deck, se deberán mostrar por carta, al menos 5 atributos de la misma.
3. El usuario, al estar en cualquiera de las secciones, debe poder ver en todo momento las acciones generales descritas previamente.
4. Si existe un enlace dentro de la misma página, este no debe teletransportar, sino que debe de realizar un scrool suave
5. Toda interacción del usuario debe poseer retroalimentación visual. Esto no es necesariamente un texto; puede ser una animación, un modal, etc.
6. Para los procesos que requieren tiempo (como la consulta de cartas), se deberá mostrar un mensaje de cargando (deberá de evitar que el usuario interactue en esos momentos), mientras el proceso termine. (Buscar: Loading Spinners)

## Recursos y medidas utilizados

A continuación se muestra una lista de los elementos, medidas y estándares que se han utilizado para la realización del sitio web
### Fuentes

- Roboto (Google Font)
- Montserrat (Google Font)
- Space Mono (Google Font)
- Handlee (Google Font)
- Bebas Neue (Google Font)

### Colores

- `primary-color: #222831;`
- `primary-color-alt: #393e46;`
- `secondary-color: #495c83;`
- `secondary-color-alt: #7a86b6;`
- `accent-color: #d1274b;`
- `accent-color-alt: #d1274b;`
- `background-color: #eee;`
- `light-color: #fff4e4;`
- `dark-color: #222831;`

### Imágenes

Estas pueden ser encontradas en el directorio *images* dentro de *assets*

## Resultado esperado

### PC Render

![PC Render](./results/PC_render.png)

### Tablet Render

![PC Render](./results/Tablet_render.png)

### Phone Render

![PC Render](./results/Mobile_render.png)