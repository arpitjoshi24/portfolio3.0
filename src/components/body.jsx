import React, { useEffect, useState,useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Typewriter } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VanillaTilt from 'vanilla-tilt';



export default function Body() {
  //  tilt
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        scale: 1.1,
        max: 25, // Adjust the tilt settings as needed
        speed: 400,
        glare: true, // Add a "glare" effect
        "max-glare": 0.5,
      });
    }
  }, []);

  // AOS initialization
  useEffect(() => {
    AOS.init({
      offset: 250,
      delay: 0,
      duration: 500,
    });
  }, []);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4, // Number of cards per view
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '10px',
        }}
      >
        <ul style={{ display: 'flex', padding: '0px' }}> {dots} </ul>
      </div>
    ),
  };


  const skills = [
    { img: '/react.png', title: 'React' },
    { img: 'js.png', title: 'JavaScript' },
    { img: 'figma.png', title: 'Figma' },
    { img: 'css.png', title: 'CSS' },
    { img: 'mongodb.png', title: 'MongoDB' },
    { img: 'node.png', title: 'Node.js' },
    { img: 'tailwind.png', title: 'Tailwind CSS' },
    { img: 'html.png', title: 'HTML' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div >
      {/* nav */}
      <div>
      <nav className="flex justify-between items-center px-12 py-6 bg-[#061A34] text-secondary">
        <h5 className="text-xl">Arpit</h5>

        {/* Hamburger Icon */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <svg
            className="w-6 h-6 text-secondary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div>

        {/* Nav Links for larger screens */}
        <ul className="hidden md:flex gap-6">
  <li className="hover:underline hover:underline-offset-4 hover:text-tertiary">
    <a href="#hero">Home</a>
  </li>
  <li className="hover:underline hover:underline-offset-4 hover:text-tertiary">
    <a href="#about">About</a>
  </li>
  <li className="hover:underline hover:underline-offset-4 hover:text-tertiary">
    <a href="#skills">Skills</a>
  </li>
  <li className="hover:underline hover:underline-offset-4 hover:text-tertiary">
    <a href="#projects">Projects</a>
  </li>
  <li className="hover:underline hover:underline-offset-4 hover:text-tertiary">
    <a href="#contact">Contact</a>
  </li>
</ul>

{/* Mobile Menu */}
<div className={`md:hidden absolute top-16 left-0 w-full bg-[#061A34] text-center transition-transform duration-300 ${isOpen ? 'block' : 'hidden'}`}>
  <ul className="flex flex-col gap-4 py-4">
    <li className="hover:underline hover:underline-offset-4 hover:text-tertiary" onClick={toggleMenu}>
      <a href="#hero">Home</a>
    </li>
    <li className="hover:underline hover:underline-offset-4 hover:text-tertiary" onClick={toggleMenu}>
      <a href="#about">About</a>
    </li>
    <li className="hover:underline hover:underline-offset-4 hover:text-tertiary" onClick={toggleMenu}>
      <a href="#skills">Skills</a>
    </li>
    <li className="hover:underline hover:underline-offset-4 hover:text-tertiary" onClick={toggleMenu}>
      <a href="#projects">Projects</a>
    </li>
    <li className="hover:underline hover:underline-offset-4 hover:text-tertiary" onClick={toggleMenu}>
      <a href="#contact">Contact</a>
    </li>
  </ul>
</div>

      </nav>
    </div>
      {/* Hero Section */}
      <section id="hero" className="lg:h-screen bg-primary">
        <div className="lg:flex" >
          <div className="md:py-44 py-24 mx-20">
            <h1 className="text-3xl  md:mx-0 md:text-6xl text-secondary pb-4">Hello,</h1>
            <h2 className="text-2xl  md:mx-0 md:text-6xl text-secondary pb-4">
              This is <span className="text-tertiary">ARPIT JOSHI</span>
            </h2>
            <h3 className="text-xl  md:mx-0 md:text-3xl text-secondary">
              <Typewriter
                words={['I am a web developer']}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h3>
          </div>
          {/* Uncomment and use the video if needed */}
          <div className=" flex justify-center  md:mt-36 md:ml-48">
          <img
        ref={tiltRef}
        src="arpit1.jpg"
        alt="Arpit"
        className="your-element object-cover rounded-full h-56 md:h-96"
      />
          </div>


        </div>
      </section>

      {/* About Section */}
      <section id='about' className="bg-primary lg:h-screen text-secondary" >
        <h3 className="text-center text-3xl md:text-6xl  py-12">ABOUT ME</h3>

        <div className="lg:flex px-4 py-6 md:py-0 md:px-10 md:space-x-10 h-full" data-aos="fade-in">
          {/* Left side with text */}
          <div className="basis-1/2">
            <p className="text-lg">
            Hi, I'm Arpit, a Web Developer from India with over 1 year of experience in web design. I love combining logic and creative design to craft user-friendly websites that not only look great but also function seamlessly. I specialize in creating custom websites that help entrepreneurs grow and succeed by delivering unique digital experiences tailored to their business needs.

My expertise includes front-end technologies like HTML, CSS, JavaScript, and modern frameworks such as React. I focus on responsive design, ensuring that every site I create looks and performs perfectly on all devices. I'm passionate about solving problems with innovative solutions and continually pushing myself to learn the latest trends and tools in web development.

Whether you're looking to establish an online presence or improve your existing website, I’m dedicated to helping you turn your vision into reality.
            </p>
          </div>

          {/* Right side with image */}
          <div className="flex justify-center  mt-12 md:mt-0 ">
            <img src="/about.jpg" alt="Arpit" className="object-cover md:ml-16  rounded-xl h-56 md:h-96"  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id='skills' className="lg:h-screen  bg-primary">
  <h3 className="text-center text-secondary text-3xl md:text-6xl  py-24">SKILLS</h3>

  <div className="px-10 py-24">
    <Slider {...settings} className="container mx-auto">
      {skills.map((skill, index) => (
        <div key={index} className="px-4">
          <div className="bg-gradient-to-b from-[#777777] via-[#00e1ff1a] transition-transform duration-300 transform hover:scale-105 to-[#061A34] rounded-lg p-6 flex flex-col items-center shadow-[0_4px_20px_rgba(0,0,0,0.3),_0_6px_10px_1px_rgba(0,255,255,0.4)] ">
            <img
              src={skill.img}
              alt={skill.title}
              className="h-20 mb-4 object-contain"
            />
            <h4 className="text-lg text-white">{skill.title}</h4>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</section>

      
      {/* projects */}
      <section   className=' text-secondary bg-primary' id='projects'>
      <h3 className="text-center  text-3xl md:text-6xl pt-12 pb-8">Projects</h3>
      <div className='flex flex-col space-y-28'>
        {/* 1st */}
        <section data-aos="zoom-in-up" className="body-font shadow-xl shadow-purple-900 mx-4 md:mx-12">
  <div className="container mx-auto flex flex-col md:flex-row px-5 py-12 md:py-16 border-2 rounded-xl border-blue-900 items-center">
   
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-8 md:mb-0">
      <img ref={tiltRef} className=" your-element object-cover object-center rounded border-2 border-black" alt="hero" src="/onestop.png" />
    </div>
    
  
    <div className="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-10 flex flex-col md:items-start md:text-left items-center text-center">
      <h3 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-tertiary">ONESTOP</h3>
      <p className="mb-8 leading-relaxed text-sm md:text-base">
        Developed a full-fledged website for a beauty and wellness parlour to offer customers a seamless experience in exploring services and booking appointments online. The site showcases a modern, user-friendly interface with easy navigation and responsive design.
      </p>

      <div className="flex flex-wrap justify-center md:justify-start gap-4">
        <button className="inline-flex text-white bg-blue-900 border-0 py-2 px-4 rounded text-sm md:text-lg">HTML</button>
        <button className="inline-flex text-white bg-blue-900 border-0 py-2 px-4 rounded text-sm md:text-lg">CSS</button>
        <button className="inline-flex text-white bg-blue-900 border-0 py-2 px-4 rounded text-sm md:text-lg">JavaScript</button>
        <button className="inline-flex text-white bg-blue-900 border-0 py-2 px-4 rounded text-sm md:text-lg">React</button>
        <button className="inline-flex text-white bg-blue-900 border-0 py-2 px-4 rounded text-sm md:text-lg">MongoDB</button>
      </div>

     
      <div className="flex flex-wrap justify-center md:justify-start gap-4 my-6">
        <button className="inline-flex text-white bg-blue-900 border-0 py-2 px-4 rounded text-sm md:text-lg">Tailwind CSS</button>
        <button className="inline-flex text-white bg-blue-900 border-0 py-2 px-4 rounded text-sm md:text-lg">Node.js</button>
        <button className="inline-flex text-white bg-blue-900 border-0 py-2 px-4 rounded text-sm md:text-lg">Express.js</button>
      </div>
    </div>
  </div>
</section>

{/* 2nd */}
<section data-aos="zoom-in-up" className="body-font shadow-xl shadow-purple-900 mx-4 md:mx-12">
  <div className="container mx-auto flex flex-col md:flex-row px-5 py-16 md:py-20 border-2 rounded-xl border-blue-900 items-center">

    <div className="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-12 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-tertiary">SIMON GAME</h1>
      <p className="mb-8 leading-relaxed text-sm md:text-base">
        A web-based interactive memory game inspired by the classic Simon game. Players must replicate an increasingly complex sequence of colors and sounds to advance through levels. The game becomes progressively more challenging as the sequence lengthens.
      </p>

      <div className="flex flex-wrap justify-center md:justify-start gap-4">
        <button className="inline-flex text-white bg-blue-900 border-0 py-2 px-4 rounded text-sm md:text-lg">HTML</button>
        <button className="inline-flex text-white bg-blue-900 border-0 py-2 px-4 rounded text-sm md:text-lg">CSS</button>
        <button className="inline-flex text-white bg-blue-900 border-0 py-2 px-4 rounded text-sm md:text-lg">JavaScript</button>
        <button className="inline-flex text-white bg-blue-900 border-0 py-2 px-4 rounded text-sm md:text-lg">Node.js</button>
        <button className="inline-flex text-white bg-blue-900 border-0 py-2 px-4 rounded text-sm md:text-lg">Express.js</button>
      </div>
    </div>

   
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mt-8 md:mt-0">
      <img   ref={tiltRef} className=" your-element object-cover object-center rounded border-2 border-black" alt="hero" src="/simon.png" />
    </div>
  </div>
</section>

{/* 3rd */}
<section data-aos="zoom-in-up" className="body-font shadow-xl shadow-purple-900 mx-4 md:mx-12">
  <div className="container mx-auto flex flex-col md:flex-row px-5 py-16 md:py-24 border-2 rounded-xl border-blue-900 items-center">
   
    <div className="lg:max-w-lg w-full md:w-1/2 mb-10 md:mb-0 ">
      <img ref={tiltRef} className=" your-element object-cover border-2 border-black object-center rounded" alt="SpyDown Screenshot" src="/spydown.png"/>
    </div>
    
   
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-12 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-tertiary">SpyDown</h1>
      <p className="mb-8 leading-relaxed text-sm md:text-base">
        This project showcases a dynamic gaming studio website designed to attract gamers and showcase our latest titles. The website features a user-friendly interface, vibrant graphics, and smooth navigation to enhance the user experience.
      </p>
      
      <ul className="flex flex-wrap justify-center md:justify-start gap-4">
        <li className="inline-flex text-white bg-blue-900 border-0 py-2 px-4 rounded text-sm md:text-lg">HTML</li>
        <li className="inline-flex text-white bg-blue-900 border-0 py-2 px-4 rounded text-sm md:text-lg">CSS</li>
        <li className="inline-flex text-white bg-blue-900 border-0 py-2 px-4 rounded text-sm md:text-lg">JavaScript</li>
        <li className="inline-flex text-white bg-blue-900 border-0 py-2 px-4 rounded text-sm md:text-lg">Tailwind CSS</li>
      </ul>
    </div>
  </div>
</section>

</div>
      </section>
   {/* stay connected */}
   <section id='contact' className='bg-primary text-secondary h-screen'>
  <h3 className="text-center text-2xl  md:text-6xl pt-40 pb-36">STAY CONNECTED WITH ME</h3>

  <div className='flex justify-around items-center'>
    {/* Instagram */}
    <div className="relative group" data-aos="zoom-in-down">
  <a
    className="focus:outline-none"
    href='https://www.instagram.com/arpitjoshi126/profilecard/?igsh=Z3JtbzVyY3J1a2o4'
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram Profile"
  >
    <svg
      viewBox="0 0 16 16"
      className="bi bi-instagram transform transition-transform duration-300 hover:scale-125 hover:text-blue-500"
      fill="currentColor"
      height="40"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
    </svg>
  </a>
  <span className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold text-white bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100">Instagram</span>
</div>



    {/* LinkedIn */}
    <div className="group relative" data-aos="zoom-in-down">
  <a 
    href="https://www.linkedin.com/in/arpit-joshi-999a58282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " 
    target="_blank" 
    rel="noopener noreferrer" 
    className="focus:outline-none"
    aria-label="LinkedIn Profile"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className="bi bi-linkedin transform transition-transform duration-300 hover:scale-125 hover:text-blue-500"
      fill="currentColor"
      height="40"
      width="40"
    >
      <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
    </svg>
  </a>
  <span className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold text-white bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100">
    LinkedIn
  </span>
</div>



    {/* GitHub */}
    <div className="group relative  " data-aos="zoom-in-down">
      <a className="focus:outline-none"
      href='https://github.com/arpitjoshi24'>
        <svg
          viewBox="0 0 16 16"
          className="bi bi-github transform transition-transform duration-300 hover:scale-125 hover:text-blue-500"
          fill="currentColor"
          height="40"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 0a8 8 0 0 0-2.528 15.588c.4.074.546-.174.546-.387 0-.191-.007-.698-.011-1.372-2.225.484-2.698-1.074-2.698-1.074-.364-.925-.888-1.17-.888-1.17-.727-.496.055-.486.055-.486.804.056 1.226.825 1.226.825.716 1.225 1.875.87 2.335.664.073-.519.28-.87.508-1.070-1.775-.203-3.648-.885-3.648-3.946 0-.872.312-1.585.825-2.144-.082-.203-.358-1.026.079-2.135 0 0 .67-.214 2.197.825a7.706 7.706 0 0 1 2.007-.27c.682.003 1.367.092 2.007.27 1.528-1.04 2.197-.825 2.197-.825.437 1.109.161 1.932.079 2.135.513.559.825 1.272.825 2.144 0 3.067-1.876 3.743-3.653 3.942.286.247.54.735.54 1.48 0 1.069-.011 1.935-.011 2.198 0 .215.144.464.553.386A8 8 0 0 0 8 0" />
        </svg>
      </a>
      <span className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold text-white bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100">GitHub</span>
    </div>
    {/* discord */}
    <div className="relative group" data-aos="zoom-in-down">
  <a className="focus:outline-none"
  href=''
  target="_blank" 
    rel="noopener noreferrer" 
    aria-label="discord Profile">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
      className="bi bi-new-icon transform transition-transform duration-300 hover:scale-125 hover:text-blue-500"
      fill="currentColor"
      height="40"
      width="40"
    >
      <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
    </svg>
  </a>
  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold text-white bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100">
    Discord
  </span>
</div>

  </div>
  {/* footer */}
  <section className='mt-60 md:mt-72 bg-[#061A34] h-24 flex items-center justify-center'>
    <footer className="bg-[#061A34] body-font ">
    <p className=' text-base md:text-xl text-secondary'>Copyright &copy; {new Date().getFullYear()} Arpit joshi. All rights reserved.</p>
</footer>
</section>
</section>

    
    </div>
  );
}
