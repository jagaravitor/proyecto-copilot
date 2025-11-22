# 📚 Proyecto Copilot - Estructura de Datos 2

## 📋 Descripción

Proyecto completo con dos componentes principales:

1. **Estructura de Datos: Cola (Queue)** - Implementación FIFO completa con tests
2. **Blog Técnico: Grafos** - Blog educativo profesional sobre estructura de datos Grafos

## 🎯 Componente 1: Estructura de Datos Cola

### Métodos Principales Solicitados

| Método | Descripción | Parámetros | Retorna |
|--------|-------------|-----------|---------|
| **`enqueue(element)`** | Encolar - Añade elemento al final | `element`: cualquier tipo | `void` |
| **`dequeue()`** | Desencolar - Extrae del principio | - | Elemento o `undefined` |
| **`isEmpty()`** | Está Vacía - Verifica si hay elementos | - | `boolean` |
| **`size()`** | Tamaño - Retorna cantidad de elementos | - | `number` |

### Métodos Adicionales

| Método | Descripción |
|--------|-------------|
| `front()` | Ver primer elemento sin extraerlo |
| `rear()` | Ver último elemento sin extraerlo |
| `clear()` | Vaciar completamente la cola |
| `toString()` | Representación en string |
| `getAll()` | Obtener copia de todos los elementos |

### Ejecutar Tests de Cola

```bash
node tests/Queue.test.js
```

Verás todos los tests funcionando y ejemplos de uso práctico.

## 📁 Estructura del Proyecto

```
proyecto-copilot/
├── src/
│   └── Queue.js                 # Implementación de Cola (FIFO)
├── tests/
│   └── Queue.test.js            # Tests y ejemplos de uso
├── blog/
│   ├── index.html               # Página principal del blog
│   ├── css/
│   │   └── styles.css           # Estilos profesionales
│   ├── js/
│   │   ├── main.js              # Lógica de navegación
│   │   └── visualizations.js    # Visualizaciones con Canvas
│   ├── images/                  # Recursos de imágenes
│   ├── posts/                   # Posts modulares (futuro)
│   └── README.md                # Documentación del blog
├── .gitignore                   # Configuración de Git
├── package.json                 # Dependencias del proyecto
└── README.md                    # Este archivo
```

## 🌐 Componente 2: Blog Técnico - Grafos

### Artículos Incluidos

#### ✅ Post #1: Introducción a los Grafos
- Definición formal de grafo (G = (V, E))
- Conceptos: Nodos/Vértices, Aristas/Ejes
- Tipos: Dirigidos, No Dirigidos, Ponderados
- Visualización interactiva de grafo con 5 nodos

#### ✅ Post #2: Representación de Grafos
- Lista de Adyacencia: ventajas para grafos dispersos
- Matriz de Adyacencia: ventajas para grafos densos
- Visualización comparativa de ambas
- Tabla de complejidad temporal y espacial

#### ✅ Post #3: Algoritmos de Recorrido
- **BFS (Breadth-First Search)**: Búsqueda en Amplitud
- **DFS (Depth-First Search)**: Búsqueda en Profundidad
- Pseudocódigo detallado
- Visualizaciones interactivas
- Casos de uso y comparación

### Abrir el Blog

1. Abre el navegador
2. Ve a: `blog/index.html`
3. Disfruta del contenido interactivo

**Características:**
- ✨ Navegación fluida sin recargas
- 🎨 Diseño responsivo y moderno
- 📊 Gráficos interactivos con Canvas
- 📱 Compatible con móviles y tablets

## 📝 Casos de Uso Práctico

### 1. Cola de Atención al Cliente
```javascript
const banco = new Queue();
banco.enqueue('Juan');
banco.enqueue('María');
banco.enqueue('Pedro');

while (!banco.isEmpty()) {
  const cliente = banco.dequeue();
  console.log(`Atendiendo a: ${cliente}`);
}
```

### 2. Procesamiento de Tareas
```javascript
const tareas = new Queue();
tareas.enqueue({ id: 1, tarea: 'Limpiar' });
tareas.enqueue({ id: 2, tarea: 'Organizar' });
tareas.enqueue({ id: 3, tarea: 'Reparar' });

while (!tareas.isEmpty()) {
  const { id, tarea } = tareas.dequeue();
  console.log(`Ejecutando tarea ${id}: ${tarea}`);
}
```

## 🧪 Ejecutar los Tests

Asegúrate de tener Node.js instalado, luego ejecuta:

```bash
node tests/Queue.test.js
```

Verás una salida con todos los tests y ejemplos funcionando.

## 📊 Complejidad Temporal

| Operación | Complejidad |
|-----------|------------|
| `enqueue()` | O(1) |
| `dequeue()` | O(n) en array, O(1) si usas índices |
| `isEmpty()` | O(1) |
| `size()` | O(1) |
| `front()` | O(1) |
| `rear()` | O(1) |

## � Cómo Usar Este Proyecto

### Requisitos
- **Navegador moderno** (Chrome, Firefox, Safari, Edge)
- **Node.js** (opcional, solo para ejecutar tests de la cola)

### Opción 1: Ver el Blog (sin requisitos)
```bash
# Simplemente abre en el navegador:
blog/index.html
```

### Opción 2: Ejecutar Tests de Cola
```bash
# Necesita Node.js instalado
node tests/Queue.test.js
```

### Opción 3: Clonar y Desarrollar
```bash
git clone https://github.com/jagaravitor/proyecto-copilot.git
cd proyecto-copilot

# Para ver el blog
# Abre: blog/index.html en navegador

# Para tests
npm test
```

## ✅ Checklist de Implementación

- [x] Método `enqueue()` - Encolar elemento
- [x] Método `dequeue()` - Desencolar elemento  
- [x] Método `isEmpty()` - Verificar si está vacía
- [x] Método `size()` - Retornar tamaño
- [x] Método `front()` - Ver primer elemento
- [x] Método `rear()` - Ver último elemento
- [x] Método `clear()` - Vaciar cola
- [x] Documentación completa
- [x] Tests funcionales
- [x] Ejemplos de uso

## � Casos de Uso Práctico

### Cola - Ejemplo de Atención al Cliente
```javascript
const banco = new Queue();
banco.enqueue('Juan');
banco.enqueue('María');
banco.enqueue('Pedro');

while (!banco.isEmpty()) {
  const cliente = banco.dequeue();
  console.log(`Atendiendo a: ${cliente}`);
}
```

### Grafos - Casos en el Blog
1. **BFS**: Encontrar amigos más cercanos en redes sociales
2. **DFS**: Detectar ciclos en sistemas de dependencias
3. **Representación**: Optimizar almacenamiento de redes

## 🛠️ Tecnologías Utilizadas

### Cola
- JavaScript (Node.js)
- Métodos de Array nativo
- Tests con console.log

### Blog
- HTML5 (estructura semántica)
- CSS3 (diseño responsivo)
- JavaScript Vanilla (sin dependencias)
- Canvas API (visualizaciones)
- Font Awesome (iconografía)

## ✅ Checklist de Requisitos

### Componente 1: Cola
- [x] Método `enqueue()` - Encolar
- [x] Método `dequeue()` - Desencolar
- [x] Método `isEmpty()` - Verificar vacío
- [x] Método `size()` - Retornar tamaño
- [x] Tests funcionales
- [x] Ejemplos de uso

### Componente 2: Blog Grafos
- [x] **Post 1**: Introducción a Grafos
  - [x] Definición y conceptos
  - [x] Tipos de grafos
  - [x] Diagrama visual (5 nodos)

- [x] **Post 2**: Representación de Grafos
  - [x] Lista de Adyacencia
  - [x] Matriz de Adyacencia
  - [x] Visualización comparativa
  - [x] Análisis de complejidad

- [x] **Post 3**: Algoritmos
  - [x] BFS: concepto y pseudocódigo
  - [x] DFS: concepto y pseudocódigo
  - [x] Visualizaciones interactivas
  - [x] Comparación y casos de uso

## 📚 Recursos Adicionales
