import { Separator } from '@/components/ui/separator';
import './App.css';
import Header from '@/components/header/Header';
import LatestPosts from '@/components/latestPosts/Latestposts';

function App() {
  return (
    <>
      <Header />
      <Separator className="bg-amber-600" />
       <LatestPosts />
    </>
  );
}

export default App;