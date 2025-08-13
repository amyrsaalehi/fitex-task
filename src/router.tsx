import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './components/layout';
import OverviewPage from './pages/overview-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{ index: true, element: <OverviewPage /> }],
  },
]);
