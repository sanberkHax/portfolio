import Head from 'next/head';
import Image from 'next/image';
import {
  firebaseSvg,
  reactSvg,
  reduxSvg,
  jestSvg,
  sassSvg,
} from '../assets/svgPaths';
const Project = () => {
  return (
    <div className="stack-organizer-details">
      <Head>
        <title>Stack Organizer</title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="stack-organizer-details__heading">Stack Organizer</h1>
      <section className="stack-organizer-details__showcase">
        <div
          className="stack-organizer-details__img-ctn"
          href="/stack-organizer"
        >
          <Image
            className="stack-organizer-details__img"
            src="/stack-organizer.png"
            alt="stack organizer screenshot"
            layout="fill"
            priority
          />
        </div>
      </section>
      <section className="stack-organizer-details__buttons">
        <a
          href="https://github.com/sanberkHax/stack-organizer"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          Repository
        </a>
        <a
          href="https://stack-organizer.sanberk.dev"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          Live Site
        </a>
      </section>
      <div className="card__ctn stack-organizer-details__purpose">
        <h2 className="stack-organizer-details__purpose__heading">
          Purpose of The Project
        </h2>
        <div className="card">
          <p>
            I built Stack Organizer because I realized I kept getting lost in
            multiple Stack Overflow tabs for different problems every time I was
            working on a project.
          </p>
          <p>
            You search for one problem and find a solution, but that solution
            leads to another problem, then that leads to another, then
            another...
          </p>
          <p>
            So I decided to solve this problem by building an organizing app
            that allows you to save your desired solutions inside a dedicated
            project or inside categorized nested folders to keep things even
            more organized.
          </p>
        </div>
      </div>
      <div className="stack-organizer-details__stack">
        <h2 className="stack-organizer-details__stack__heading">Tech Stack</h2>
        <div className="stack-organizer-details__stack__icons">
          {reactSvg}
          {reduxSvg}
          {sassSvg}
          {jestSvg}
          {firebaseSvg}
        </div>
      </div>
      <section className="features">
        <h2 className="heading-secondary">Features</h2>
        <div className="features__container">
          <div className="feature">
            <h3>Authentication</h3>
            <div className="feature__video">
              <video controls src="/auth.mp4"></video>
            </div>
          </div>
          <div className="feature">
            <h3>Custom File System</h3>
            <div className="feature__video">
              <video controls src="/file-system.mp4"></video>
            </div>
          </div>
          <div className="feature">
            <h3>CRUD Operations</h3>
            <div className="feature__video">
              <video controls src="/crud.mp4"></video>
            </div>
          </div>
          <div className="feature">
            <h3>Search with Stack Overflow API</h3>
            <div className="feature__video">
              <video controls src="/search.mp4"></video>
            </div>
          </div>
        </div>
      </section>
      <section className="process">
        <h2 className="heading-secondary">My Process</h2>
        <div className="process__container">
          <div className="card__ctn process__planning">
            <h3>Planning</h3>
            <div className="card">
              <p>
                My first step was researching how real world projects are built
                from start to finish. As this was my first {'big'}project, I
                needed to learn a lot about how to plan a project.
              </p>
              <p>
                Without even touching any code, I started brainstorming what
                features I need for the Minimum Viable Product and researched
                how it can be built.
              </p>
              <p>
                After figuring out the MVP, I wanted to use an Agile methodology
                to manage the project, so decided to go with Kanban because it
                would be better for a single person project. I used Trello to
                create the Kanban board. Then broke down the MVP to small
                managable tasks backed up by user stories.
              </p>
            </div>
          </div>
          <div className="process__kanban-ctn">
            <Image
              src="/kanban.png"
              layout="fill"
              alt="kanban board"
              className="process__img"
            />
          </div>
          <div className="process__figma-ctn">
            <Image
              src="/figma.png"
              layout="fill"
              alt="figma"
              className="process__img"
            />
          </div>

          <div className="card__ctn process__designing">
            <h3>Designing</h3>
            <div className="card">
              <p>
                I started designing process with a quick draft with mobile first
                approach, kept everything as minimal as possible to fit the MVP.
                After deciding the initial mobile layout, I moved on to desktop
                layout.
              </p>
              <p>
                Then I tried few variations of colors for the website and
                settled with the current blue and white combo.
              </p>
            </div>
          </div>

          <div className="card__ctn process__building">
            <h3>Building</h3>
            <div className="card">
              <p>
                Started building the app according to task order on Kanban
                board. As I already knew what each component would look like
                thanks to design phase, they were easy to build with React and
                Sass.
              </p>
              <p>
                {`However, there were a lot of things that needed to work together
                besides presentational components. So when I started
                implementing stuff like Redux, Firebase and Automated Testing on
                top of them, I've encountered a bunch of mind numbing bugs. But
                thanks to my Googling and problem solving skills I was able to
                crush them in the end.`}
              </p>
              <p>
                {`Building process was also a learning process for me. There were
                a lot of stuff I didn't know how to do and a lot of bugs I
                haven't encountered before. So most of my time was also spent on
                learning new things, trying different approaches, making lots of
                mistakes along the way but eventually learning from them.`}
              </p>
            </div>
          </div>
          <div className="process__google-ctn">
            <Image
              src="/google.png"
              layout="fill"
              alt="building"
              className="process__img"
            />
          </div>
        </div>
      </section>
      <section className="problems">
        <h2 className="heading-secondary">Problems I have Faced</h2>
        <div className="problems__container">
          <div className="card__ctn">
            <h3>File System</h3>
            <div className="card">
              <p>
                Even though I made a proper plan before writing any code, I
                highly underestimated how complicated the file system was.
              </p>
              <p>
                {` As I dived into implementation in the "Save As" modal first and
                succesfully implemented project selection, I got completely
                stuck with the folder selection. Since it needed to have nested
                folders, it couldn't just be a dropdown selection. And because I
                had a very specific design for it, I couldn't find any third
                party library to fit my needs.`}
              </p>
              <p>
                After days of researching how to properly store nested data in
                redux and database, learning more about normalized data and
                bunch of trial and errors. I finally managed to make it work.
              </p>
              <p>
                While it was a tough challenge, I really enjoyed getting my
                hands dirty with something like this, it was a great learning
                experience.
              </p>
            </div>
          </div>
          <div className="card__ctn">
            <h3>Firebase</h3>
            <div className="card">
              <p>
                Even though {`I've`} used Firebase in my other projects before,
                none of those projects scale was as big as this one. So I spent
                few days how to properly integrate Firebase with Automated
                Testing and Redux.
              </p>
              <p>
                After dealing with bunch of small bugs, I eventually set up
                Firebase Emulators for Automated Testing to mock Firebase
                services in tests.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="learned">
        <div className="card__ctn">
          <h2 className="heading-secondary">What I have Learned</h2>
          <div className="card">
            <p>
              This whole project was a challenge on another level but also a
              great opportunity to improve my knowledge, because stepping out of
              my comfort zone and diving right into something new is the best
              way for me to learn something.
            </p>
            <p>
              {`I've`} learned how to manage complex states with Redux and how
              to store data efficiently in database to work with.
            </p>
            <p>Greatly improved my knowledge on Automated Testing.</p>
            <p>
              Got the grasp of managing a bigger scale project from start to
              finish.
            </p>
            <p>
              And found out Stack Organizer is actually useful, because I kept
              getting lost inside multiple Stack Overflow tabs and wished I had
              built it sooner.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
