import Head from 'next/head';
import Header from '../components/Header';
import About from '../components/About';
import Home from '../components/Home';
import Project from '../components/Project';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { twitterSvg, githubSvg, gmailSvg } from '../assets/svgPaths';

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="index">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer>
        <p className="footer-text">Designed & Built by Sanberk Türker</p>
        <div className="icon-ctn">
          {twitterSvg}
          {githubSvg}
          {gmailSvg}
        </div>
      </footer>
    </div>
  );
}
