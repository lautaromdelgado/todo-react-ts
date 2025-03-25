# Tareas Pendientes - React + TypeScript + Vite

Este proyecto es una aplicación de lista de tareas desarrollada con **React**, **TypeScript** y **Vite**. Permite a los usuarios agregar y eliminar tareas de manera sencilla.

Prueba el proyecto aquí: listar-tareas-react-ts.netlify.app

## Características

- **React + TypeScript**: Aprovecha las ventajas de React con tipado estático.
- **Vite**: Configuración rápida y eficiente para desarrollo y construcción.
- **Componentes reutilizables**: Componentes como `Tarea` y `ListaTareas` para una estructura modular.
- **Estilos personalizados**: Diseño simple y funcional con CSS.

## Estructura del Proyecto

```
├── public/                # Archivos estáticos
├── src/                   # Código fuente
│   ├── components/        # Componentes React
│   │   ├── TodoApp.tsx    # Componente principal
│   │   ├── listaTareas.tsx # Lista de tareas
│   │   └── tarea.tsx      # Componente de tarea individual
│   ├── styles.css         # Estilos globales
│   ├── main.tsx           # Punto de entrada de la aplicación
│   └── vite-env.d.ts      # Tipos de Vite
├── .gitignore             # Archivos ignorados por Git
├── index.html             # Archivo HTML principal
├── package.json           # Dependencias y scripts
├── tsconfig.json          # Configuración de TypeScript
├── vite.config.ts         # Configuración de Vite
```

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/tareas-pendientes-react-ts.git
   cd tareas-pendientes-react-ts
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Construye la aplicación para producción.
- `npm run preview`: Previsualiza la aplicación construida.
- `npm run lint`: Ejecuta ESLint para analizar el código.

## Uso

1. Ejecuta el servidor de desarrollo:

   ```bash
   npm run dev
   ```

2. Abre tu navegador en [http://localhost:5173](http://localhost:5173).

3. Agrega tareas en el campo de texto y elimínalas con el botón correspondiente.

## Tecnologías Utilizadas

- **React**: Biblioteca para construir interfaces de usuario.
- **TypeScript**: Superset de JavaScript con tipado estático.
- **Vite**: Herramienta de desarrollo rápida y ligera.
- **ESLint**: Linter para mantener la calidad del código.

## Personalización

Puedes modificar los estilos en el archivo [`src/styles.css`](src/styles.css) para personalizar el diseño de la aplicación.

## Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras algún problema o tienes una idea para mejorar la aplicación, no dudes en abrir un issue o enviar un pull request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.
