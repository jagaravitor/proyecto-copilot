# 📋 Instrucciones para Subir a GitHub

## ⚠️ Requisito: Instalar Git

Primero necesitas instalar Git en tu computadora:

### Opción 1: Descarga desde web (Más fácil)
1. Ve a: https://git-scm.com/download/win
2. Descarga **Git for Windows** (versión de 64-bit)
3. Ejecuta el instalador
4. Acepta todas las opciones por defecto

### Opción 2: Usando Chocolatey (si lo tienes)
```powershell
choco install git
```

---

## 🚀 Pasos para Subir tu Proyecto a GitHub

### Paso 1: Crear un repositorio en GitHub
1. Ve a https://github.com/new
2. Nombre del repositorio: `proyecto-blog-grafos`
3. Descripción: `Blog Técnico sobre Grafos: Introducción, Representación y Algoritmos`
4. Selecciona: **Private** (privado) o **Public** (público)
5. NO selecciones "Initialize with README"
6. Haz clic en **Create repository**

### Paso 2: Configurar Git localmente
Abre PowerShell en tu proyecto y ejecuta:

```powershell
cd "c:\Users\jagaravitor\Documents\proyecto-copilot"

# Configurar tu nombre y email (solo una vez)
git config --global user.name "Javier Andres Garavito Ruiz"
git config --global user.email "tu-email@example.com"

# Inicializar repositorio local
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Initial commit: Blog técnico sobre Grafos con 3 posts, Queue data structure, y diseño profesional"

# Agregar el repositorio remoto (reemplaza USERNAME)
git remote add origin https://github.com/tu-usuario/proyecto-blog-grafos.git

# Cambiar rama a main (si es necesario)
git branch -M main

# Subir los cambios
git push -u origin main
```

### Paso 3: Autenticación en GitHub
Cuando ejecutes `git push`, te pedirá que inicies sesión. Tienes dos opciones:

**Opción A: Token Personal (Recomendado)**
1. Ve a https://github.com/settings/tokens
2. Haz clic en "Generate new token" → "Generate new token (classic)"
3. Dale un nombre: `git-push-token`
4. Selecciona: `repo` (acceso completo)
5. Copia el token
6. En PowerShell, usa el token como contraseña

**Opción B: Autenticación por SSH**
Ver: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

---

## 📁 Archivos que se subirán

```
proyecto-copilot/
├── blog/
│   ├── index.html          ✅ Blog principal
│   ├── css/
│   │   └── styles.css      ✅ Estilos profesionales
│   └── js/
│       ├── main.js         ✅ Lógica de navegación
│       └── visualizations.js ✅ Canvas gráficos
├── src/
│   └── Queue.js            ✅ Estructura Queue
├── tests/
│   └── Queue.test.js       ✅ Tests del Queue
└── [Documentación MD]      ✅ Archivos de ayuda
```

---

## ✅ Verificar que todo funcionó

Después de hacer `git push`, verifica en GitHub:
1. Ve a tu repositorio
2. Deberías ver todos los archivos
3. En la descripción verás el commit message

---

## 🌐 Alternativa: GitHub Desktop (Sin línea de comandos)

Si prefieres no usar terminal:
1. Descarga GitHub Desktop: https://desktop.github.com/
2. Inicia sesión con tu cuenta GitHub
3. Selecciona "Add" → "Local Repository"
4. Selecciona la carpeta del proyecto
5. Haz un commit
6. Haz clic en "Publish repository"

---

## 💡 Comandos Git útiles (futuros)

```powershell
# Ver cambios pendientes
git status

# Ver historial de commits
git log

# Ver cambios en un archivo
git diff archivo.txt

# Cambios locales sin subir
git status

# Deshacer último commit (cuidado)
git reset --soft HEAD~1
```

---

## ❓ Preguntas Frecuentes

**P: ¿Es seguro publicar mi código?**
R: Sí, pero puedes hacer el repositorio privado si quieres.

**P: ¿Se suben los cambios automáticamente?**
R: No, debes hacer `git commit` y `git push` manualmente.

**P: ¿Puedo hacer cambios después?**
R: Sí, solo modifica los archivos, haz commit y push.

---

**¡Listo! Cuando termines con estos pasos, tu proyecto estará en GitHub** 🎉
