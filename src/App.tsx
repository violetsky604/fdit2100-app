import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/header/Header';
import LatestPosts from '@/components/latestPosts/Latestposts';
import OurToursSection from '@/components/tours';

import './App.css';

function App() {
  const queryClient = new QueryClient();  

  return (
    <QueryClientProvider client={queryClient}>
       {/* posts from first class */} 
      <Header />
      <Separator className="sticky top-19 bg-white" />
      <LatestPosts />

      {/* assignment 1 */}
      <OurToursSection />

    </QueryClientProvider>
  );
}

export default App;
