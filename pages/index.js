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
        <title>Abdulrhman Bokhari Portfolio</title>
        <meta name="description" content="Abdulrhman Bokhari Web Developer" />
        <meta
          name="keywords"
          content="web developer, reactjs,nextks,nodejs,expressjs,tailwindcss,abdulrhman,bokhari,front end,back end"
        />
        <meta name="author" content="Abdulrhman Samir Bokhari" />

        {/* OG */}
        <meta
          property="og:title"
          content="Abdulrhman Bokhari - Web Developer Portfolio"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/BK.png" />
        <meta property="og:url" content="https://www.bk23.dev" />

        <link rel="icon" href="/favicon.ico" />
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
