import Hero from '../components/Hero';
import Mission from '../components/Mission';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div>
      <Navbar />
        <main>
            <Hero />
            <Mission />
        </main>
    </div>
  );
}

export default Home;