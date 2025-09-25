import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import Header from '@/components/header/Header';
import LatestPosts from '@/components/latestPosts/LatestPosts';
import { Separator } from '@/components/ui/separator';
import './App.css';

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Separator className="sticky top-19" />
        <LatestPosts />
      </QueryClientProvider>
    </>
  )
}

export default App
