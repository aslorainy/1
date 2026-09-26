# MI INVENTARIO

Aplicación web offline para controlar inventario de Varadero y Matanzas.

## Tecnología
- React + TypeScript
- Vite
- Tailwind CSS
- Lucide React
- localStorage / Web APIs
- Sin Capacitor, Android, Gradle, Java o Kotlin

## Ejecutar
```bash
npm install
npm run dev
```

## Compilar
```bash
npm run build
```

## GitHub Actions
El workflow `.github/workflows/build.yml` instala Node 20 y compila automáticamente. Si el repositorio contiene `package-lock.json`, utiliza `npm ci`; si no, genera la instalación con `npm install`.
