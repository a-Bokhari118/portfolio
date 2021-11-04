import About from '../components/About';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="bg-gray-900 h-full w-full ">
      <Header />
      <Hero />
      <About />
    </div>
  );
}
