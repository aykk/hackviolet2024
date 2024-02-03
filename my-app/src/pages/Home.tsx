import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div>
      <Navbar />
        <main>
            <Hero />
        </main>
    </div>
  );
}

export default Home;