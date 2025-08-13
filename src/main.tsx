import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Providers from './providers/root-provider.tsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </StrictMode>
);
