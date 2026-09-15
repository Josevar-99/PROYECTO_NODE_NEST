# Initial Setup Nest

Proyecto base para iniciar una API con NestJS, TypeScript, configuración global, Swagger y observabilidad con Nest Observe.

## Descripción

Este repositorio es una plantilla minimalista para crear aplicaciones backend con NestJS. Ya viene preparada con:

- Estructura base en módulos
- Configuración de variables de entorno
- Documentación Swagger
- Integración con observabilidad de Nest
- Pruebas unitarias y e2e
- Soporte para PostgreSQL con TypeORM (comentado y listo para activar)

## Tecnologías

- Node.js
- NestJS 12
- TypeScript
- Swagger
- PostgreSQL + TypeORM
- Vitest
- Zod
- ESLint con Oxlint

## Requisitos previos

Antes de iniciar, asegúrate de tener instalado:

- Node.js 20 o superior
- npm
- PostgreSQL (si vas a activar TypeORM)

## Instalación

```bash
npm install
```

## Variables de entorno

La app ya incluye configuración global de entorno con `@nestjs/config`. Puedes crear un archivo `.env` en la raíz del proyecto para definir tus variables locales.

Ejemplo:

```env
PORT=3000
```

> Actualmente la validación de variables está vacía en `src/config/env.validation.schema.ts`, por lo que puedes extenderla según tus necesidades.

## Ejecutar la aplicación

### Modo desarrollo

```bash
npm run start
```

### Modo watch

```bash
npm run start:dev
```

### Modo debug

```bash
npm run start:debug
```

### Producción

```bash
npm run build
npm run start:prod
```

La aplicación corre por defecto en:

```text
http://localhost:3000
```

## Documentación API

Swagger está configurado para exponerse en:

```text
http://localhost:3000/api/docs
```

## Estructura del proyecto

```text
src/
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── main.ts
├── config/
│   ├── env.config.ts
│   ├── env.validation.schema.ts
│   ├── index.ts
│   └── swagger.config.ts

test/
├── app.e2e-spec.ts
```

## Scripts disponibles

```bash
npm run build
npm run deploy
npm run format
npm run start
npm run start:dev
npm run start:debug
npm run start:prod
npm run lint
npm run test
npm run test:watch
npm run test:cov
npm run test:debug
npm run test:e2e
```

## Pruebas

### Ejecutar pruebas unitarias

```bash
npm run test
```

### Ejecutar pruebas e2e

```bash
npm run test:e2e
```

### Cobertura

```bash
npm run test:cov
```

## Observabilidad

El proyecto ya integra Nest Observe a través de `createObserveModule()`, lo cual permite añadir trazas, métricas y telemetría sin necesidad de una configuración compleja.

## Base de datos

En `src/app.module.ts` existe un bloque comentado para configurar TypeORM con PostgreSQL. Puedes descomentarlo y completar los datos de conexión según tu entorno.

Ejemplo de configuración base:

```ts
TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin123',
  database: 'Restaurant',
  entities: [],
  synchronize: true,
})
```

## Endpoint base

La app incluye un controlador inicial que responde con:

```http
GET /
```

Respuesta:

```text
Hello World!
```

## Personalización recomendada

Antes de continuar con el desarrollo, se recomienda:

1. Definir un nombre real del proyecto en `package.json`
2. Completar la validación de variables de entorno
3. Configurar la base de datos real
4. Crear módulos específicos por dominio
5. Agregar autenticación y validaciones de entrada
6. Definir una estructura de DTOs y entidades

## Licencia

Este proyecto está bajo la licencia del autor original de la plantilla. Si necesitas cambiarla, puedes editar el campo `license` en el archivo `package.json`.

## Nota

Este proyecto funciona como una base inicial para levantar una API NestJS con buenas prácticas de arranque y configuración, lista para evolucionar según tus necesidades.
