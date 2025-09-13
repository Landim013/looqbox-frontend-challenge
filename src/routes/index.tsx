import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Statistics from '../pages/Statistics';

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/pokemon/:id', element: <Statistics /> },
  //   { path: '/pokemon/:name', element: <Details /> },
]);
