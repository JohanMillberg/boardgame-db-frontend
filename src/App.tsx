import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FrontPage } from './components/FrontPage/FrontPage';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Details } from './components/Details/Details';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity
    },
  }
});

function App() {
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/game/:id" element={<Details />} />
            <Route path="/" element={<FrontPage />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  )
}

export default App
