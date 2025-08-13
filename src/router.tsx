import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './components/layout';
import OverviewPage from './pages/overview-page';
import CampaignsPage from './pages/campaign-page';
import CreateCampaignPage from './pages/create-campaign-page';

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
