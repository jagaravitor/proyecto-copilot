// ==================== NAVEGACIÓN Y CONTROL DE SECCIONES ====================

/**
 * Navega a una sección específica del blog
 * @param {string} postId - ID de la sección a mostrar
 */
function navigateToPost(postId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.post-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Mostrar la sección seleccionada
    const targetSection = document.getElementById(postId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Actualizar links de navegación
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    const activeLink = document.querySelector(`[data-post="${postId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // Scroll suave al inicio (muy arriba para que se vea todo)
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // También scroll del contenedor principal si es necesario
    const mainElement = document.querySelector('main');
    if (mainElement) {
        mainElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

/**
 * Scroll suave a una sección
 * @param {string} sectionId - ID de la sección
 */
function scrollToSection(sectionId) {
    navigateToPost(sectionId);
}

// ==================== EVENT LISTENERS ====================

document.addEventListener('DOMContentLoaded', function () {
    // Agregar listeners a los links de navegación
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const postId = this.getAttribute('data-post');
            navigateToPost(postId);
        });
    });

    // Dibujar gráficos después de cargar el DOM
    setTimeout(() => {
        drawGraphPost1();
        drawMatrixVisualization();
        drawBFSVisualization();
        drawDFSVisualization();
    }, 100);

    console.log('✓ Blog de Grafos cargado correctamente');
});

// ==================== FUNCIONES AUXILIARES ====================

/**
 * Obtiene el contexto 2D de un canvas de forma segura
 */
function getCanvasContext(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.warn(`Canvas con ID '${canvasId}' no encontrado`);
        return null;
    }
    return canvas.getContext('2d');
}

/**
 * Centra un texto en el canvas
 */
function drawCenteredText(ctx, text, x, y, fontSize = 12, color = '#1e293b') {
    ctx.font = `${fontSize}px Arial`;
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, x, y);
}

/**
 * Dibuja un círculo (nodo) en el canvas
 */
function drawNode(ctx, x, y, label, radius = 25, fillColor = '#6366f1', textColor = 'white') {
    // Dibujar círculo
    ctx.fillStyle = fillColor;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();

    // Dibujar borde
    ctx.strokeStyle = '#4f46e5';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Dibujar texto
    ctx.fillStyle = textColor;
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, x, y);
}

/**
 * Dibuja una línea (arista) entre dos nodos
 */
function drawEdge(ctx, x1, y1, x2, y2, weight = null, directed = false) {
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    // Dibujar peso si existe
    if (weight !== null) {
        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2;
        ctx.fillStyle = '#ec4899';
        ctx.font = 'bold 12px Arial';
        ctx.fillText(weight, midX, midY - 10);
    }

    // Dibujar flecha si es dirigido
    if (directed) {
        drawArrow(ctx, x1, y1, x2, y2);
    }
}

/**
 * Dibuja una flecha para grafos dirigidos
 */
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

// ==================== EXPORTAR FUNCIONES ====================

window.navigateToPost = navigateToPost;
window.scrollToSection = scrollToSection;
