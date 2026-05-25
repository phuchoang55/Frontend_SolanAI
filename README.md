# SolanAI Frontend

Dự án Frontend của SolanAI được xây dựng với:
- **React 18**
- **TypeScript 5**
- **Vite 5**
- **React Router v6**
- **Axios** - HTTP Client
- **Zustand** - State Management

## Cài đặt

```bash
npm install
```

## Chạy development server

```bash
npm run dev
```

Ứng dụng sẽ chạy tại [http://localhost:3000](http://localhost:3000)

## Cấu trúc thư mục

```
src/
├── assets/          # Static assets (images, fonts, ...)
├── components/      # Shared/reusable UI components
├── features/        # Feature-based modules
│   └── <feature>/
│       ├── components/
│       ├── hooks/
│       ├── services/
│       └── types/
├── hooks/           # Global custom hooks
├── layouts/         # Layout components
├── pages/           # Page components (route-level)
├── router/          # Router configuration
├── services/        # API services (axios instances, interceptors)
├── store/           # Zustand global stores
├── types/           # Global TypeScript types
└── utils/           # Utility functions
```

## Build

```bash
npm run build
```