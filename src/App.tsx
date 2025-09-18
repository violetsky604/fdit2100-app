import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Separator } from '@/components/ui/separator';
import './App.css';

import Header from '@/components/header/Header';
import LatestPosts from '@/components/latestPosts/Latestposts';

function App() {
  const queryClient = new QueryClient();



  return (  
    <QueryClientProvider client = {queryClient}>
      <Header />
      <Separator className="bg-white" />
       <LatestPosts />
    </QueryClientProvider>
  );
}

export default App;