# NoSQL Cloud Application con Firebase

## Descripción
Aplicación de ejemplo que demuestra el uso de Firebase Firestore como base de datos NoSQL en la nube.

## Requisitos Previos
- Node.js (v14 o superior)
- Cuenta de Firebase

## Instalación
1. Clonar repositorio
2. Instalar dependencias
```bash
npm install
```

3. Configurar credenciales de Firebase
- Reemplazar `serviceAccount` en `src/config/database.ts` con tus credenciales reales

## Ejecución
- Desarrollo: `npm run dev`
- Producción: `npm run build && npm start`

## Endpoints
- POST `/api/users`: Crear usuario
- GET `/api/users/:id`: Obtener usuario

