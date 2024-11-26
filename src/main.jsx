import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import ListPageGraph from './components/ListPageGraph/ListPageGraph.jsx';
import GrapList from './components/GrapList/GrapList.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/books/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/booksList.json')
      },
      {
        path: '/list-book',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/booksList.json') 
      },
      {
        path: '/page-graph',
        element: <ListPageGraph></ListPageGraph>,
        loader: () => fetch('/booksList.json') 
      
      },
      {
        path: '/read/:bookId',
        element: <GrapList></GrapList>,
        loader: () => fetch('/booksList.json') 
      
      
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
