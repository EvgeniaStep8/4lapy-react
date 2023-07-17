import { FC } from 'react';
import Header from '../Header/Header';
import Info from '../Info/Info';
import Reasons from '../Reasons/Reasons';
import DogHandler from '../DogHandler/DogHandler';
import Footer from '../Footer/Footer';

const App: FC = () => {
  return (
    <div className='App'>
      <Header />
      <main>
        <Info />
        <Reasons />
        <DogHandler />
      </main>
      <Footer />
    </div>
  );
}

export default App;
