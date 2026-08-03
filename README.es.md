<!-- hide -->
<div align="center">

# Curso de React.js desde cero y ejercicios interactivos

[![Certificado por 4Geeks](https://img.shields.io/badge/4Geeks-certified-2563eb)](https://4geeks.com/es/interactive-exercise/curso-react-desde-cero)
[![Autocorregido con LearnPack](https://img.shields.io/badge/LearnPack-autograded-2563eb)](https://4geeks.com/docs/learnpack)
[![Abrir en Codespaces](https://img.shields.io/badge/Open_in-Codespaces-fb5a1f)](https://codespaces.new/?repo=4GeeksAcademy/react-tutorial-exercises)

</div>
<!-- endhide -->

Este tutorial interactivo de React.js tiene 21 ejercicios y se completa en unas 8 horas. Empiezas renderizando un simple `<span>` con `ReactDOM.render` y terminas creando componentes con props, renderizado condicional, estilos CSS-in-JS y eventos de clic. 20 de los ejercicios se corrigen solos con Jest, y los 21 llevan su propio vídeo explicativo.

<!-- hide -->
## 📋 Sobre este tutorial

- **Dificultad**: fácil — no hace falta experiencia previa con React
- **Duración estimada**: 8 horas (unos 20 minutos por ejercicio)
- **Ejercicios**: 21 carpetas, 20 de ellas con tests automáticos
- **Tecnologías**: JavaScript, React.js (JSX, prop-types, marcado de Bootstrap 5)
- **Corrección**: incremental, con Jest 29.7.0 y `react-test-renderer`
- **Vídeo de introducción**: [español](https://www.youtube.com/watch?v=L21NvjxiVmc) · [inglés](https://www.youtube.com/watch?v=yRjmuLAH25s)
- **Idiomas**: [Español](https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/HEAD/README.es.md) · [English](https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/HEAD/README.md)
<!-- endhide -->

## 🎯 ¿Qué vas a aprender?

- A pintar HTML en el DOM con `ReactDOM.render(qué, dónde)`, entendiéndolo como el sustituto de `innerHTML` en React.
- A [escribir JSX](https://react.dev/learn/writing-markup-with-jsx): mezclar HTML y JavaScript en el mismo fichero, meter variables entre llaves `{ }` y leer propiedades de un objeto.
- A convertir arrays de datos en arrays de HTML con `.map()`, y a entender por qué React te pide una [`key`](https://react.dev/learn/rendering-lists) en cada elemento.
- A ver cómo una función que devuelve HTML se convierte en un componente que puedes usar como etiqueta propia: `<BootstrapCard />` en vez de `BootstrapCard()`.
- A [pasar datos con props](https://react.dev/learn/passing-props-to-a-component) y declarar sus tipos con `propTypes`, para que el mismo componente sirva para Bob Dylan y para Paul McCartney.
- A hacer [renderizado condicional](https://react.dev/learn/conditional-rendering): devolver `null` para ocultar un componente, o traducir una prop `color` a distintas clases de Bootstrap.
- A dar estilos con objetos CSS-in-JS, donde las propiedades van en camelCase (`fontSize`, `borderRadius`) y los valores son cadenas de texto.
- A escuchar acciones del usuario añadiendo `onClick` a una etiqueta JSX.

## 👀 ¿Qué vas a construir?

Los 21 ejercicios están numerados para que la dificultad suba poco a poco. Esta es la progresión real dentro de la carpeta `exercises/`:

- **`00` Bienvenida** — una introducción breve, solo de lectura, que explica los cuatro pilares del curso: JSX, componentes, HTML dinámico y módulos de JS.
- **`01` a `01.4` — Bases de JSX (5 ejercicios)**: renderizar `James is 12 years old`, inyectar una variable `name`, construir un bloque `<h1>/<h2>` a partir de un objeto de cliente, montar una tarjeta de Bootstrap con la ficha de Bob Dylan y generar un `<ul class="nav">` a partir de un array de enlaces.
- **`02` a `02.2` — Arrays y `.map()` (3 ejercicios)**: convertir `['Horse', 'Turtle', 'Elephant', 'Monkey']` en elementos `<li>`, repetirlo partiendo de un array de objetos y pintar un list-group de Bootstrap con seis planetas (Mars, Venus, Jupiter, Earth, Saturn y Neptune).
- **`03` a `03.5` — Componentes y props (6 ejercicios)**: renderizar con funciones, crear tu primer componente, rehacer la tarjeta como `<BootstrapCard />`, hacerla reutilizable con cinco props y, por último, construir desde cero un `<Hero />` y un `<Alert />`.
- **`04` a `04.2` — Renderizado condicional (3 ejercicios)**: mostrar u ocultar la alerta con un booleano `show`, alternar entre rojo y amarillo mediante un objeto `colorClasses` y añadir el verde como tercera opción.
- **`05` y `05.1` — Estilos (2 ejercicios)**: aplicar un objeto CSS-in-JS con fuente de 16px, fondo negro y borde amarillo de 1px, y después restilizar un badge con un `border-radius` del 50%.
- **`06` — Eventos (1 ejercicio)**: conectar la función que gestiona el clic a la propiedad `onClick` de un botón y comprobar la consola.

Dos de los resultados que tendrás que reproducir, tal cual aparecen en los enunciados:

![Bloque hero de Bootstrap generado por el componente Hero del ejercicio 03.4: un panel gris grande con el titular Welcome to React, el subtítulo React is the most popular rendering library in the world y un botón azul con el texto Go to the officia website](https://raw.githubusercontent.com/4GeeksAcademy/react-tutorial-exercises/master/.learn/assets/03.4-1.png)

![Tres alertas de Bootstrap apiladas creadas por el componente Alert del ejercicio 04.2: una alerta roja que dice OMG! Something really bad has happended!, una amarilla que dice Well, it is not that bad after all! y una verde que dice I am supposed to be green](https://raw.githubusercontent.com/4GeeksAcademy/react-tutorial-exercises/master/.learn/assets/04.2-1.png)

## 🎓 ¿Qué necesitas saber antes de empezar?

- **HTML**: etiquetas, atributos y anidación. Varios ejercicios te piden reproducir marcado de Bootstrap 5 como [tarjetas](https://getbootstrap.com/docs/5.0/components/card/), [alertas](https://getbootstrap.com/docs/5.0/components/alerts/) y [list groups](https://getbootstrap.com/docs/5.0/components/list-group/).
- **Fundamentos de JavaScript**: variables, objetos, arrays, funciones flecha y el operador punto. A partir del ejercicio `02` usarás `.map()` en casi todos los ficheros.
- **React**: nada. El tutorial está marcado como fácil y arranca desde la primera llamada a `ReactDOM.render`.
- **Herramientas**: nada si abres el repositorio en un editor en la nube. Para ejecutarlo en local necesitas [Node.js](https://nodejs.org) y la CLI de LearnPack.

## ✅ ¿Cómo funciona la corrección automática?

La corrección es *incremental*: cada ejercicio se valida por separado, así que siempre sabes por dónde vas. Cada carpeta de ejercicio con código contiene los mismos tres ficheros más el enunciado:

- **`app.jsx`** — el único fichero que debes tocar.
- **`tests.js`** — la batería de tests de Jest de ese ejercicio. Está en 20 de las 21 carpetas; `00-welcome` es una introducción de solo lectura y no lleva tests.
- **`solution.hide.jsx`** — una solución que funciona, escondida para que no te estorbe mientras trabajas.
- **`README.md` y `README.es.md`** — el enunciado en los dos idiomas, cada uno con su vídeo de YouTube.

Los tests se ejecutan con Jest y `react-test-renderer`: hacen un mock de `ReactDOM.render`, capturan lo que le has pasado y comparan el árbol renderizado con un snapshot embebido, así que tienen que coincidir tanto la estructura como el texto. Por eso algunos tests comprueban además que `ReactDOM.render` se haya llamado exactamente una vez.

> 💡 La corrección es deliberadamente estricta con la salida esperada. Toma un test en rojo como una pista de qué sigue siendo distinto, no como un juicio sobre tu código, y tira del vídeo del ejercicio cuando te atasques.

## 💡 ¿Qué errores conviene evitar?

- **Escribir `class` en vez de `className`**. En JSX el atributo es `className`; casi todo el mundo tropieza con esto en los ejercicios de la tarjeta y del list-group.
- **Olvidar la prop `key`** al construir listas con `.map()`. React te avisará por consola. Aquí basta con usar el segundo parámetro de la función de mapeo (el índice).
- **Llamar a un componente con paréntesis**. Cuando `PrintHello` ya es un componente se usa `<PrintHello />`, no `PrintHello()`.
- **Perder las llaves**. `<span>James is age years old</span>` imprime la palabra literal; `{ age }` imprime el valor.
- **Nombrar componentes en minúscula**. Los componentes van en mayúscula a propósito: JSX interpreta una etiqueta en minúscula como un elemento HTML normal.
- **Usar sintaxis CSS dentro del objeto de estilos**. Es `{ fontSize: "16px" }`, no `{ "font-size": 16 }`: claves en camelCase y valores como texto.
- **Saltarse `propTypes`**. Desde el ejercicio `03.3` se espera que declares las props que recibes, por ejemplo `Alert.propTypes = { text: PropTypes.string }`.
- **Renderizar el mismo componente dos veces**. Una sola llamada a `ReactDOM.render` por ejercicio; los tests las cuentan.

## ❓ Preguntas frecuentes

### ¿Cuánto se tarda en hacer este tutorial de React?

El paquete está estimado en 8 horas. Repartidas entre 21 ejercicios salen unos 20 minutos por ejercicio, y los primeros de JSX son bastante más cortos que eso. Como la corrección es incremental, puedes parar en cualquier ejercicio y retomarlo más adelante.

### ¿Hace falta saber JavaScript antes de empezar con React?

Sí, lo básico. Conviene manejar variables, objetos, arrays, funciones flecha y sobre todo `.map()`, que aparece desde el ejercicio `02`. No necesitas clases, promesas ni async/await en ninguno de los 21 ejercicios.

### ¿Este tutorial cubre los Hooks y el estado?

No. Los 21 ejercicios cubren renderizado, JSX, listas y keys, componentes de función, props con prop-types, renderizado condicional, estilos CSS-in-JS y eventos. En el paquete no hay `useState`, `useEffect` ni ningún otro hook, así que cuenta con otro tutorial aparte para el manejo de estado cuando termines.

### ¿Sigue mereciendo la pena con el React actual?

Los conceptos sí: JSX, `.map()` con keys, componentes de función, props y renderizado condicional funcionan igual en el React de hoy. Lo único que ha cambiado es el punto de entrada: estos ejercicios usan `ReactDOM.render(qué, dónde)`, mientras que desde React 18 las aplicaciones se montan con [`createRoot`](https://react.dev/reference/react-dom/client/createRoot). Todo lo que escribes dentro de los componentes se aprovecha tal cual.

### ¿Incluye soluciones y explicaciones en vídeo?

Sí. Los 21 ejercicios traen un vídeo de YouTube enlazado desde su propio README, y los 20 ejercicios con código incluyen un fichero `solution.hide.jsx` con una solución que funciona, para que compares enfoques después de resolverlos por tu cuenta.

### ¿Es gratis? ¿Puedo republicar los ejercicios?

Acceder al tutorial y ejecutarlo no cuesta nada, y el código que escribas mientras lo resuelves es tuyo. Redistribuir el material es otra cosa: el fichero [LICENSE.md](https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/HEAD/LICENSE.md) se reserva todos los derechos de propiedad intelectual y prohíbe expresamente republicar, vender, sublicenciar, duplicar o redistribuir el contenido, así que no es un paquete de código abierto.

<!-- hide -->
## 📚 Tutoriales interactivos relacionados

- [Aprende lo básico de HTML interactivamente](https://4geeks.com/es/interactive-exercise/html-exercises-es)
- [Tutorial para principiantes de Javascript (interactivo)](https://4geeks.com/es/interactive-exercise/ejercicios-javascript-para-principiantes)

## 🚀 Cómo empezar

Lo más rápido es abrir el repositorio en un editor en la nube, con todo preinstalado:

1. Haz clic en [Abrir en Codespaces](https://codespaces.new/?repo=4GeeksAcademy/react-tutorial-exercises) (recomendado) o en [Abrir en Gitpod](https://gitpod.io#https://github.com/4GeeksAcademy/react-tutorial-exercises.git).
2. Espera a que el contenedor termine de instalar LearnPack y su plugin de React.
3. Los ejercicios deberían abrirse solos. Si no ocurre, ejecuta `learnpack start` en la terminal.

## 💻 Instalación local

1. Instala [Node.js](https://nodejs.org). El contenedor de desarrollo de este repositorio usa Node 22.
2. Clona este repositorio o descárgalo en zip y sitúate en la raíz del proyecto, donde está la carpeta `exercises`.
3. Instala la CLI y el plugin de React, y arranca el tutorial:

```bash
npm i jest@29.7.0 jest-environment-jsdom@29.7.0 -g
npm i @learnpack/learnpack -g
learnpack plugins:install @learnpack/react
learnpack start
```

Tienes más detalle en la [guía rápida de LearnPack para estudiantes](https://4geeks.com/docs/learnpack/quickstart-for-learners#how-to-download-and-run-learnpack-tutorial-in-your-local-computer).

## 📝 Cómo están organizados los ejercicios

Cada ejercicio vive en su propia carpeta dentro de [`exercises/`](https://github.com/4GeeksAcademy/react-tutorial-exercises/tree/HEAD/exercises), con su número y su tema en el nombre, por ejemplo `03.4-hero-component`. Dentro encontrarás `app.jsx` (tu fichero de trabajo), `README.md` y `README.es.md` (el enunciado y el vídeo), `tests.js` (el corrector, no hace falta abrirlo) y `solution.hide.jsx`. Las imágenes compartidas están en `.learn/assets`.

## 🤝 Colaboradores

Gracias a estas personas maravillosas ([leyenda de emojis](https://github.com/kentcdodds/all-contributors#emoji-key)):

1. [Alejandro Sánchez (alesanchezr)](https://github.com/alesanchezr) — programación 💻, idea 🤔, tests ⚠️, revisión de pull requests 👀, creación del tutorial ✅, documentación 📖
2. [Paolo Lucano (plucodev)](https://github.com/plucodev) — reporte de bugs 🐛, programación 💻, traducción 🌎
3. [Marco Gómez (marcogonzalo)](https://github.com/marcogonzalo) — reporte de bugs 🐛, traducción 🌎

Este proyecto sigue la especificación [all-contributors](https://github.com/kentcdodds/all-contributors). Toda contribución es bienvenida: si detectas un fallo o una errata, [abre un issue](https://github.com/4GeeksAcademy/react-tutorial-exercises/issues) o manda un pull request. Puedes ver [todas las personas que han contribuido](https://github.com/4GeeksAcademy/react-tutorial-exercises/graphs/contributors).

Este tutorial lo crea y lo mantiene [4Geeks Academy](https://4geeksacademy.com/es/coding-bootcamps/desarrollador-full-stack/) junto a su comunidad.
<!-- endhide -->
