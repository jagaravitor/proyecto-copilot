// ==================== VISUALIZACIONES DE GRAFOS ====================

/**
 * Post 1: Dibuja un grafo no dirigido con 5 nodos
 */
function drawGraphPost1() {
    const ctx = getCanvasContext('graphCanvas1');
    if (!ctx) return;

    const canvas = ctx.canvas;
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Posiciones de los nodos
    const nodes = {
        'A': { x: 150, y: 80 },
        'B': { x: 80, y: 150 },
        'C': { x: 220, y: 150 },
        'D': { x: 80, y: 280 },
        'E': { x: 220, y: 280 }
    };

    // Dibujar aristas primero (debajo de los nodos)
    const edges = [
        { from: 'A', to: 'B', weight: 5 },
        { from: 'A', to: 'C', weight: 3 },
        { from: 'B', to: 'D', weight: 7 },
        { from: 'C', to: 'E', weight: 4 },
        { from: 'B', to: 'E', weight: 6 }
    ];

    edges.forEach(edge => {
        const fromPos = nodes[edge.from];
        const toPos = nodes[edge.to];
        drawEdge(ctx, fromPos.x, fromPos.y, toPos.x, toPos.y, edge.weight);
    });

    // Dibujar nodos
    Object.entries(nodes).forEach(([label, pos]) => {
        drawNode(ctx, pos.x, pos.y, label, 25, '#6366f1', 'white');
    });

    // Leyenda
    ctx.fillStyle = '#64748b';
    ctx.font = '12px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Nodos: A, B, C, D, E | Aristas: líneas con pesos', 10, canvas.height - 10);
}

/**
 * Post 2: Visualiza matriz de adyacencia
 */
function drawMatrixVisualization() {
    const ctx = getCanvasContext('matrixCanvas');
    if (!ctx) return;

    const canvas = ctx.canvas;
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Matriz de ejemplo
    const nodes = ['A', 'B', 'C', 'D', 'E'];
    const matrix = [
        [0, 1, 1, 0, 0],
        [1, 0, 0, 1, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 0, 0, 0],
        [0, 1, 1, 0, 0]
    ];

    const cellSize = 40;
    const startX = 80;
    const startY = 50;

    // Dibujar encabezados (nodos)
    nodes.forEach((node, i) => {
        ctx.fillStyle = '#6366f1';
        ctx.fillRect(startX + (i + 1) * cellSize, startY, cellSize, cellSize);
        drawCenteredText(ctx, node, startX + (i + 1.5) * cellSize, startY + cellSize / 2, 14, 'white');

        ctx.fillStyle = '#6366f1';
        ctx.fillRect(startX, startY + (i + 1) * cellSize, cellSize, cellSize);
        drawCenteredText(ctx, node, startX + cellSize / 2, startY + (i + 1.5) * cellSize, 14, 'white');
    });

    // Dibujar matriz
    matrix.forEach((row, i) => {
        row.forEach((value, j) => {
            const x = startX + (j + 1) * cellSize;
            const y = startY + (i + 1) * cellSize;

            ctx.strokeStyle = '#e2e8f0';
            ctx.lineWidth = 1;
            ctx.strokeRect(x, y, cellSize, cellSize);

            // Colorear celdas con 1
            if (value === 1) {
                ctx.fillStyle = '#d1fae5';
                ctx.fillRect(x, y, cellSize, cellSize);
            }

            ctx.fillStyle = value === 1 ? '#10b981' : '#64748b';
            ctx.font = 'bold 16px Arial';
            drawCenteredText(ctx, value, x + cellSize / 2, y + cellSize / 2, 16, value === 1 ? '#10b981' : '#64748b');
        });
    });

    // Leyenda
    ctx.fillStyle = '#64748b';
    ctx.font = '12px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Verde (1) = arista existe | Blanco (0) = no existe arista', 10, canvas.height - 10);
}

/**
 * Post 3: Visualiza BFS (Breadth-First Search)
 */
function drawBFSVisualization() {
    const ctx = getCanvasContext('bfsCanvas');
    if (!ctx) return;

    const canvas = ctx.canvas;
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Grafo para BFS
    const nodes = {
        'A': { x: 150, y: 50, visited: 1 },
        'B': { x: 60, y: 140, visited: 2 },
        'C': { x: 240, y: 140, visited: 3 },
        'D': { x: 150, y: 230, visited: 4 },
        'E': { x: 240, y: 230, visited: 5 },
        'F': { x: 60, y: 320, visited: 6 },
        'G': { x: 240, y: 320, visited: 7 }
    };

    // Aristas
    const edges = [
        { from: 'A', to: 'B' },
        { from: 'A', to: 'C' },
        { from: 'B', to: 'D' },
        { from: 'C', to: 'E' },
        { from: 'D', to: 'F' },
        { from: 'E', to: 'G' }
    ];

    // Dibujar aristas
    edges.forEach(edge => {
        const fromPos = nodes[edge.from];
        const toPos = nodes[edge.to];
        ctx.strokeStyle = '#cbd5e1';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(fromPos.x, fromPos.y);
        ctx.lineTo(toPos.x, toPos.y);
        ctx.stroke();
    });

    // Dibujar nodos con colores según orden de visita
    Object.entries(nodes).forEach(([label, data]) => {
        let color = '#e0e7ff';
        if (data.visited <= 2) color = '#6366f1'; // Primeros visitados
        else if (data.visited <= 4) color = '#8b5cf6'; // Medio
        else color = '#d946ef'; // Últimos

        drawNode(ctx, data.x, data.y, label, 20, color, 'white');

        // Número de visita
        ctx.fillStyle = '#ec4899';
        ctx.font = 'bold 10px Arial';
        ctx.fillText(data.visited, data.x + 25, data.y - 15);
    });

    // Leyenda
    ctx.fillStyle = '#64748b';
    ctx.font = '11px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('BFS: Exploración por niveles (Azul → Púrpura → Rosa) | Orden: A→B→C→D→E→F→G', 10, canvas.height - 10);
}

/**
 * Post 3: Visualiza DFS (Depth-First Search)
 */
function drawDFSVisualization() {
    const ctx = getCanvasContext('dfsCanvas');
    if (!ctx) return;

    const canvas = ctx.canvas;
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Grafo para DFS (mismo que BFS pero diferente orden de visita)
    const nodes = {
        'A': { x: 150, y: 50, visited: 1 },
        'B': { x: 60, y: 140, visited: 2 },
        'C': { x: 240, y: 140, visited: 5 },
        'D': { x: 150, y: 230, visited: 3 },
        'E': { x: 240, y: 230, visited: 6 },
        'F': { x: 60, y: 320, visited: 4 },
        'G': { x: 240, y: 320, visited: 7 }
    };

    // Aristas
    const edges = [
        { from: 'A', to: 'B' },
        { from: 'A', to: 'C' },
        { from: 'B', to: 'D' },
        { from: 'C', to: 'E' },
        { from: 'D', to: 'F' },
        { from: 'E', to: 'G' }
    ];

    // Dibujar aristas
    edges.forEach(edge => {
        const fromPos = nodes[edge.from];
        const toPos = nodes[edge.to];
        ctx.strokeStyle = '#cbd5e1';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(fromPos.x, fromPos.y);
        ctx.lineTo(toPos.x, toPos.y);
        ctx.stroke();
    });

    // Dibujar nodos con colores según orden de visita
    Object.entries(nodes).forEach(([label, data]) => {
        let color = '#e0e7ff';
        if (data.visited <= 2) color = '#10b981'; // Primeros visitados
        else if (data.visited <= 4) color = '#f59e0b'; // Medio
        else color = '#f97316'; // Últimos

        drawNode(ctx, data.x, data.y, label, 20, color, 'white');

        // Número de visita
        ctx.fillStyle = '#7c3aed';
        ctx.font = 'bold 10px Arial';
        ctx.fillText(data.visited, data.x + 25, data.y - 15);
    });

    // Leyenda
    ctx.fillStyle = '#64748b';
    ctx.font = '11px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('DFS: Exploración en profundidad (Verde → Ámbar → Naranja) | Orden: A→B→D→F→C→E→G', 10, canvas.height - 10);
}

// ==================== FUNCIONES AUXILIARES (HEREDADAS DE main.js) ====================

function getCanvasContext(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.warn(`Canvas con ID '${canvasId}' no encontrado`);
        return null;
    }
    return canvas.getContext('2d');
}

function drawCenteredText(ctx, text, x, y, fontSize = 12, color = '#1e293b') {
    ctx.font = `${fontSize}px Arial`;
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, x, y);
}

function drawNode(ctx, x, y, label, radius = 25, fillColor = '#6366f1', textColor = 'white') {
    ctx.fillStyle = fillColor;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();

    ctx.strokeStyle = '#4f46e5';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = textColor;
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, x, y);
}

function drawEdge(ctx, x1, y1, x2, y2, weight = null, directed = false) {
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    if (weight !== null) {
        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2;
        ctx.fillStyle = '#ec4899';
        ctx.font = 'bold 12px Arial';
        ctx.fillText(weight, midX, midY - 10);
    }

    if (directed) {
        drawArrow(ctx, x1, y1, x2, y2);
    }
}

function drawArrow(ctx, fromX, fromY, toX, toY) {
    const headlen = 15;
    const angle = Math.atan2(toY - fromY, toX - fromX);

    ctx.strokeStyle = '#64748b';
    ctx.fillStyle = '#64748b';
    ctx.beginPath();
    ctx.moveTo(toX - headlen * Math.cos(angle - Math.PI / 6), toY - headlen * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(toX, toY);
    ctx.lineTo(toX - headlen * Math.cos(angle + Math.PI / 6), toY - headlen * Math.sin(angle + Math.PI / 6));
    ctx.stroke();
    ctx.fill();
}
