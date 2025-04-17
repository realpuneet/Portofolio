import React, { useState } from "react";
import aboutimg from '../assets/puneetup.png';
import { gsap } from "gsap";

const About = () => {

  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300); // Reset the animation after 300ms
  };

  const info = [
    {text: 'Experience', count: '03 mos'},
    {text: 'Completed Projects', count: '05'},
    {text: 'Companies Work', count: '01'},
  ]
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold ">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-400 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              I am a committed MERN stack developer who is enthusiastic about creating dependable and scalable web
applications. Having practical experience in Node.js, API development, and backend programming at
LeopardRuns Innovations and Technology, I am looking for chances to apply my expertise in MongoDB,
Express.js, React.js, and Node.js to cutting-edge projects.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {
                  info.map(content=>(
                    <div key={content.text}>
                      <h3 className="md:text-4xl text-2xl font-semibold text-white">{content.count}
                        <span className="text-cyan-600">+</span>
                      </h3>
                      <span className="md:text-base text-xs">{content.text}</span> 
                    </div>
                  ))
                }
              </div>
              <br />
              <br />

              <button
                onClick={handleButtonClick}
                className={`px-4 py-2 bg-cyan-600 text-white font-bold rounded-lg transition-transform ease-linear ${
                  isClicked ? "scale-95" : "hover:scale-100"
                }`}
              >
                <a href="../../public/Puneet.pdf" download target="_blank">
                  Download CV
                </a>
              </button>            
            </div>
          </div>

          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center ">
              <div className="lg:w-96 h-full  relative sm:w-10/12 w-10/12 max-w-sm aboutImg ">
                <img src={aboutimg} alt="" 
                className="w-full object-cover bg-cyan-600 rounded-xl hover:rotate-12 transition-all ease-in-out duration-1000"
                />
              </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
