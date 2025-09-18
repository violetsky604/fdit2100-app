import{
  QueryClient,
  QueryClientProvider
} from '@canstack/react-query';

import { Separator } from '@/components/ui/separator';
import './App.css';
import Header from '@/components/header/Header';
import LatestPosts from '@/components/latestPosts/Latestposts';

function App() {
  const queryClient = new QueryClient();



  return (
    <QueryClientProvider client = {QueryClientProvider}>
      <Header />
      <Separator className="bg-amber-600" />
       <LatestPosts />
    </QueryClientProvider>
  );
}

export default App;