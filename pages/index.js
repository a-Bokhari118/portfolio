import About from '../components/About';
import ContactMe from '../components/ContactMe';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Tech from '../components/Tech';
import Head from 'next/head';
export default function Home() {
  return (
    <div className="bg-gray-900 h-full w-full ">
      <Head>
        <title>Abdulrhman Bokhari</title>
        <meta
          name="description"
          content="Abdulrhman bokhari. front end developer"
        />
        <meta
          name="keywords"
          content="web developer, reactjs,nextks,nodejs,expressjs,tailwindcss,abdulrhman,bokhari,front end,back end"
        />
        <link rel="icon" href="/Bk.svg" />
      </Head>
      <Header />
      <Hero />
      <About />
      <Tech />
      <Projects />
      <ContactMe />
    </div>
  );
}
