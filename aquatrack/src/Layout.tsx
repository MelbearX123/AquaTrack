import Header from './components/Header.tsx';
import { Outlet } from 'react-router-dom';

function Layout(){
  return(
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>

  );
}

export default Layout;