import Header from '@/components/header/Header';
import LatestPosts from '@/components/latestPosts/LatestPosts';
import { Separator } from '@/components/ui/separator';
import './App.css';

function App() {

  return (
    <>
      <Header />
      <Separator />
      <LatestPosts />
    </>
  )
}

export default App
