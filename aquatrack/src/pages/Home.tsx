import Header from '../components/Header.tsx';
import Intro from '../components/Intro.tsx';

function Home(){
  return(
    <div>
      <Header />
      <Intro />
      <button>Add Parameters</button>
    </div>
  );
}

export default Home;