import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './components/layout';
import { lazy } from 'react';
const OverviewPage = lazy(() => import('./pages/overview-page'));
const CampaignsPage = lazy(() => import('./pages/campaign-page'));
const CreateCampaignPage = lazy(() => import('./pages/create-campaign-page'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <OverviewPage /> },
      { path: 'campaigns', element: <CampaignsPage /> },
      { path: 'create', element: <CreateCampaignPage /> },
    ],
  },
]);
