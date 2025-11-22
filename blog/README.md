# 📚 Blog Técnico: Estructura de Datos Grafos

Un blog profesional y completamente funcional sobre la estructura de datos **Grafos**, desarrollado con HTML5, CSS3 y JavaScript vanilla.

## 🎯 Objetivo

Crear un blog técnico de alta calidad que explique los conceptos fundamentales de grafos, incluyendo:
- Introducción a grafos (nodos, aristas, tipos)
- Representación en memoria (lista y matriz de adyacencia)
- Algoritmos fundamentales de recorrido (BFS y DFS)

## 📄 Artículos Incluidos

### Post #1: Introducción a los Grafos
- ✅ Definición formal de grafo
- ✅ Conceptos clave: Nodos/Vértices y Aristas/Ejes
- ✅ Tipos de grafos: Dirigidos, No Dirigidos, Ponderados
- ✅ Visualización interactiva: Grafo con 5 nodos

### Post #2: Representación de Grafos
- ✅ Lista de Adyacencia: concepto, ventajas, desventajas
- ✅ Matriz de Adyacencia: concepto, ventajas, desventajas
- ✅ Visualización de matriz con código interactivo
- ✅ Tabla comparativa de complejidad

### Post #3: Algoritmos de Recorrido
- ✅ BFS (Breadth-First Search): Búsqueda en Amplitud
- ✅ DFS (Depth-First Search): Búsqueda en Profundidad
- ✅ Pseudocódigo detallado para ambos
- ✅ Visualizaciones interactivas de orden de exploración
- ✅ Tabla comparativa y casos de uso

## 🏗️ Estructura del Proyecto

```
blog/
├── index.html              # Página principal del blog
├── css/
│   └── styles.css         # Estilos profesionales (responsivos)
├── js/
│   ├── main.js            # Lógica de navegación
│   └── visualizations.js  # Dibujo de gráficos con Canvas
├── images/                # Carpeta para imágenes (futuro)
├── posts/                 # Carpeta para posts modulares (futuro)
└── README.md              # Este archivo
```

## 🎨 Características de Diseño

### Interfaz
- **Navegación fluida**: Sistema de pestañas sin recargar página
- **Diseño responsivo**: Compatible con desktop, tablet y móvil
- **Tema moderno**: Colores profesionales (Indigo, Púrpura, Rosa)
- **Animaciones suaves**: Transiciones y efectos CSS3

### Contenido Visual
- **Canvas interactivos**: Dibujos de grafos en tiempo real
- **Código formateado**: Sintaxis de pseudocódigo clara
- **Tablas comparativas**: Información estructurada
- **Cajas de conceptos**: Destacado de puntos importantes

## 🚀 Cómo Usar

### Abrir localmente
1. Navega a la carpeta `blog/`
2. Abre `index.html` en tu navegador
3. Disfruta el contenido interactivo

### Características Interactivas
- Click en los cards de inicio para navegar a posts
- Visualización automática de gráficos
- Navegación con botones "Volver" en cada post
- Menu sticky para acceso rápido

## 💻 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Diseño responsivo y moderno
- **JavaScript (Vanilla)**: Interactividad sin dependencias
- **Canvas API**: Visualización de grafos
- **Font Awesome**: Iconografía profesional

## 📊 Visualizaciones Incluidas

### Canvas 1: Grafo No Dirigido con Pesos
- 5 nodos (A, B, C, D, E)
- Aristas ponderadas
- Representación clara

### Canvas 2: Matriz de Adyacencia
- Matriz 5x5
- Código de colores (1 = existe, 0 = no existe)
- Leyenda explicativa

### Canvas 3: Recorrido BFS
- Orden de exploración por niveles
- Numeración de visitas
- Código de colores progresivo

### Canvas 4: Recorrido DFS
- Orden de exploración en profundidad
- Numeración de visitas
- Código de colores diferenciado

## ✨ Puntos Destacados

✅ **Contenido educativo completo** - Cubre los 3 temas requeridos
✅ **Código limpio y comentado** - Fácil de mantener y extender
✅ **Visualizaciones profesionales** - Gráficos claros y educativos
✅ **Responsive design** - Funciona en todos los dispositivos
✅ **Sin dependencias externas** - Solo HTML, CSS, JavaScript puro
✅ **Fácil de extender** - Arquitectura modular

## 🔧 Extensiones Futuras

- [ ] Agregar más posts (Dijkstra, Kruskal, etc.)
- [ ] Simulador interactivo de algoritmos
- [ ] Editor visual para crear grafos
- [ ] Sección de práctica con ejercicios
- [ ] Comentarios y sección de comunidad
- [ ] Exportar contenido a PDF
- [ ] Sistema de búsqueda

## 📝 Notas de Implementación

### Funciones Clave (main.js)
```javascript
navigateToPost(postId)    // Navegar entre secciones
scrollToSection(sectionId) // Scroll suave
getCanvasContext(canvasId) // Obtener contexto 2D
```

### Funciones de Dibujo (visualizations.js)
```javascript
drawGraphPost1()          // Grafo del Post 1
drawMatrixVisualization() // Matriz del Post 2
drawBFSVisualization()    // BFS del Post 3
drawDFSVisualization()    // DFS del Post 3
drawNode(...)             // Dibujar nodo
drawEdge(...)             // Dibujar arista
```

## 📱 Compatibilidad

- ✅ Chrome/Edge (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (últimas versiones)
- ✅ Responsivo en móviles y tablets

## 👨‍💻 Autor

Desarrollado como proyecto educativo para la asignatura "Estructura de Datos 2"

## 📄 Licencia

Este proyecto es de uso educativo y puede ser modificado libremente.

---

**Última actualización**: 21 de Noviembre, 2025
