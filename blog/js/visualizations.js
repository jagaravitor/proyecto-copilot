// ==================== VISUALIZACIONES DE GRAFOS ====================

/**
 * Post 1: Dibuja un grafo no dirigido con 5 nodos - MEJORADO
 */
function drawGraphPost1() {
    const ctx = getCanvasContext('graphCanvas1');
    if (!ctx) return;

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, 500, 375);

    // Posiciones de los nodos
    const nodes = {
        'A': { x: 150, y: 80 },
        'B': { x: 80, y: 150 },
        'C': { x: 220, y: 150 },
        'D': { x: 80, y: 280 },
        'E': { x: 220, y: 280 }
    };

    // Dibujar aristas primero
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
        
        ctx.strokeStyle = '#3b82f6';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(fromPos.x, fromPos.y);
        ctx.lineTo(toPos.x, toPos.y);
        ctx.stroke();
        
        const midX = (fromPos.x + toPos.x) / 2;
        const midY = (fromPos.y + toPos.y) / 2;
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(midX - 10, midY - 10, 20, 20);
        ctx.fillStyle = '#ec4899';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(edge.weight, midX, midY);
    });

    // Dibujar nodos
    Object.entries(nodes).forEach(([label, pos]) => {
        ctx.fillStyle = 'rgba(37, 99, 235, 0.1)';
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 22, 0, 2 * Math.PI);
        ctx.fill();
        
        ctx.fillStyle = '#2563eb';
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 20, 0, 2 * Math.PI);
        ctx.fill();
        
        ctx.strokeStyle = '#1e40af';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(label, pos.x, pos.y);
    });

    // Leyenda
    ctx.fillStyle = '#475569';
    ctx.font = '11px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('✓ Grafo No Dirigido | 5 Nodos | Conexiones Ponderadas', 10, 365);
}

/**
 * Post 2: Visualiza matriz de adyacencia - MEJORADO
 */
function drawMatrixVisualization() {
    const ctx = getCanvasContext('matrixCanvas');
    if (!ctx) return;

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, 500, 375);

    // Matriz de ejemplo
    const nodes = ['A', 'B', 'C', 'D', 'E'];
    const matrix = [
        [0, 1, 1, 0, 0],
        [1, 0, 0, 1, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 0, 0, 0],
        [0, 1, 1, 0, 0]
    ];

    const cellSize = 35;
    const startX = 80;
    const startY = 50;

    // Dibujar encabezados
    nodes.forEach((node, i) => {
        const gradient = ctx.createLinearGradient(
            startX + (i + 1) * cellSize, startY,
            startX + (i + 1) * cellSize, startY + cellSize
        );
        gradient.addColorStop(0, '#2563eb');
        gradient.addColorStop(1, '#1e40af');
        ctx.fillStyle = gradient;
        ctx.fillRect(startX + (i + 1) * cellSize, startY, cellSize, cellSize);
        
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(node, startX + (i + 1.5) * cellSize, startY + cellSize / 2);

        ctx.fillStyle = gradient;
        ctx.fillRect(startX, startY + (i + 1) * cellSize, cellSize, cellSize);
        
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 12px Arial';
        ctx.fillText(node, startX + cellSize / 2, startY + (i + 1.5) * cellSize);
    });

    // Dibujar matriz
    matrix.forEach((row, i) => {
        row.forEach((value, j) => {
            const x = startX + (j + 1) * cellSize;
            const y = startY + (i + 1) * cellSize;

            ctx.strokeStyle = '#cbd5e1';
            ctx.lineWidth = 1;
            ctx.strokeRect(x, y, cellSize, cellSize);

            if (value === 1) {
                ctx.fillStyle = '#10b981';
                ctx.fillRect(x, y, cellSize, cellSize);
            } else {
                ctx.fillStyle = '#f3f4f6';
                ctx.fillRect(x, y, cellSize, cellSize);
            }

            ctx.fillStyle = value === 1 ? '#ffffff' : '#6b7280';
            ctx.font = 'bold 14px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(value, x + cellSize / 2, y + cellSize / 2);
        });
    });

    // Leyenda
    ctx.fillStyle = '#475569';
    ctx.font = '11px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('✓ Verde (1) = existe conexión | Gris (0) = sin conexión', 10, 365);
}

/**
 * Post 3: Visualiza BFS (Breadth-First Search) - MEJORADA
 */
function drawBFSVisualization() {
    const ctx = getCanvasContext('bfsCanvas');
    if (!ctx) return;

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, 500, 375);

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

    // Escala de colores para BFS
    const colors = ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#dbeafe', '#eff6ff'];

    // Dibujar nodos
    Object.entries(nodes).forEach(([label, data]) => {
        const colorIndex = Math.min(data.visited - 1, colors.length - 1);
        const nodeColor = colors[colorIndex];
        
        ctx.fillStyle = 'rgba(37, 99, 235, 0.1)';
        ctx.beginPath();
        ctx.arc(data.x, data.y, 18, 0, 2 * Math.PI);
        ctx.fill();
        
        ctx.fillStyle = nodeColor;
        ctx.beginPath();
        ctx.arc(data.x, data.y, 16, 0, 2 * Math.PI);
        ctx.fill();
        
        ctx.strokeStyle = '#1e40af';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 13px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(label, data.x, data.y);

        ctx.fillStyle = '#1e40af';
        ctx.font = 'bold 10px Arial';
        ctx.fillText(data.visited, data.x + 19, data.y - 15);
    });

    // Leyenda
    ctx.fillStyle = '#475569';
    ctx.font = '11px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('✓ BFS: Búsqueda por Amplitud | Oscuro→Claro = Orden de visita (1→7)', 10, 365);
}

/**
 * Post 3: Visualiza DFS (Depth-First Search) - MEJORADO
 */
function drawDFSVisualization() {
    const ctx = getCanvasContext('dfsCanvas');
    if (!ctx) return;

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, 500, 375);

    // Grafo para DFS
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

    // Escala de colores para DFS
    const colorsDFS = ['#059669', '#10b981', '#34d399', '#6ee7b7', '#d1fae5', '#ecfdf5'];

    // Dibujar nodos
    Object.entries(nodes).forEach(([label, data]) => {
        const colorIndex = Math.min(data.visited - 1, colorsDFS.length - 1);
        const nodeColor = colorsDFS[colorIndex];
        
        ctx.fillStyle = 'rgba(5, 150, 105, 0.1)';
        ctx.beginPath();
        ctx.arc(data.x, data.y, 18, 0, 2 * Math.PI);
        ctx.fill();
        
        ctx.fillStyle = nodeColor;
        ctx.beginPath();
        ctx.arc(data.x, data.y, 16, 0, 2 * Math.PI);
        ctx.fill();
        
        ctx.strokeStyle = '#047857';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 13px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(label, data.x, data.y);

        ctx.fillStyle = '#047857';
        ctx.font = 'bold 10px Arial';
        ctx.fillText(data.visited, data.x + 19, data.y - 15);
    });

    // Leyenda
    ctx.fillStyle = '#475569';
    ctx.font = '11px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('✓ DFS: Búsqueda en Profundidad | Verde oscuro→claro = Orden de visita (1→7)', 10, 365);
}

// ==================== FUNCIONES AUXILIARES (HEREDADAS DE main.js) ====================

function getCanvasContext(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.warn(`Canvas con ID '${canvasId}' no encontrado`);
        return null;
    }
    
    // Establecer tamaño fijo del canvas
    canvas.width = 500;
    canvas.height = 375;
    
    const ctx = canvas.getContext('2d');
    return ctx;
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
