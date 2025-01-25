const About = () => {
  return (
    <div
      id="about"
      className="About flex flex-col items-center my-10 lg:mx-10 550:mx-7 400:mx-5 310:mx-3"
    >
      <h1 className="title lg:text-6xl 550:text-5xl 400:text-4xl mb-5 310:text-3xl 220:text-2xl font-bold name">
        AboutME
      </h1>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="birth timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2005</time>
            <div className="lg:text-2xl 550:text-xl 310:text-[18px] font-black talk">
              Birth
            </div>
            I was born in 2005 in Tboung Khmum Province, Cambodia. I come from a
            poor family, and I have one sister.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2011</time>
            <div className="text-lg font-black talk lg:text-2xl 550:text-xl 310:text-[18px] ">
              I am old enough to study.
            </div>
            When I was 6 years old, my family took me to school in my village.
            You know, I cried a lot because I didn’t know anyone there. After
            about a week, I stopped crying.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2020</time>
            <div className="text-lg font-black talk lg:text-2xl 550:text-xl 310:text-[18px] ">
              Completed Secondary School
            </div>
            I completed secondary school in my province, and I continued my
            studies in high school for 3 more years.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2023</time>
            <div className="text-lg font-black talk lg:text-2xl 550:text-xl 310:text-[18px] ">
              Graduated From High School
            </div>
            I gratuated from high school in 2023. I’m not happy with my result
            since I expected A but got B.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2024</time>
            <div className="text-lg font-black talk lg:text-2xl 550:text-xl 310:text-[18px] ">
              University Life
            </div>
            In 2024, I turned 18 years old. I came to Phnom Penh to continue my
            studies at university. In November, I completed the foundation year
            of Computer Science and Engineering at the Royal University of Phnom
            Penh. I began my internship in Networking.
          </div>
        </li>
      </ul>
    </div>
  );
};

export default About;
