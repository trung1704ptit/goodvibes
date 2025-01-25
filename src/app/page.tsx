/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import BrandsBar from "@/components/BrandsBar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <div className="bg-blue-light">
        <div className="container px-8 mx-auto flex flex-col lg:flex-row items-start md:min-h-[600px]">
          <div className="flex flex-col w-full lg:w-6/12 justify-center lg:pt-24 items-start text-center lg:text-left mb-5 md:mb-0">
            <h1
              data-aos="fade-right"
              data-aos-once="true"
              className="my-4 text-4xl md:text-5xl font-bold leading-tight text-darken aos-init aos-animate"
            >
              Good Vibes IT Solutions
            </h1>
            <p
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay={300}
              className="leading-normal text-2xl mb-3 aos-init aos-animate text-center md:text-left w-full"
            >
              One-Stop HR Solutions
            </p>
            <p className="lg:max-w-[500px] mb-10 text-lg md:text-base">
              We provide one stop HR solutions specifically to meet basic or
              complex payroll and HR administration for businesses. With more
              than 100 experienced consultants globally, our team can assist
              with local payroll processing as well as regional payroll
              management.
            </p>
            <div
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay={700}
              className="w-full md:flex items-center justify-center lg:justify-start md:space-x-5 aos-init aos-animate"
            >
              <Link href={"/contact"}>
                <button className="lg:mx-0 bg-[--main-color] text-white text-xl font-bold rounded-full py-4 px-9 btn-zoom outline-none">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
          <div
            id="girl"
            className="w-full lg:w-6/12 mt-10 md:min-h-[500px] relative"
          >
            <img
              data-aos="fade-up"
              data-aos-once="true"
              src="man-with-laptop.png"
              className="w-auto lg:h-[500px] mx-auto 2xl:-mb-20 aos-init aos-animate"
            />
            <div
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-once="true"
              className="absolute top-10 -left-6 sm:top-32 sm:left-10 md:top-10 md:left-16 lg:-left-0 lg:top:32 floating-4 aos-init aos-animate"
            >
              <div className="bg-white p-3 rounded-lg flex justify-center align-middle">
                <img
                  src="/email.png"
                  className="mr-2"
                  width={25}
                  height={"auto"}
                />
                1000+ Jobs served
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-once="true"
              className="absolute top-10 right-10 sm:right-24 sm:top-28 md:top-24 md:right-32 lg:top-24 lg:right-16 floating aos-init aos-animate"
            >
              <img src="business.png" width={60} height={60}/>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay={500}
              data-aos-once="true"
              className="absolute bottom-20 -left-4 sm:left-2 sm:bottom-20 lg:bottom-24 lg:-left-4 floating aos-init aos-animate"
            >
              <img
                src="we-are-hiring.png"
                alt=""
                className="bg-white bg-opacity-80 rounded-lg md:h-36 h-24"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay={600}
              data-aos-once="true"
              className="absolute bottom-20 md:bottom-48 lg:bottom-52 -right-6 lg:right-32 floating-4 aos-init aos-animate"
            >
              <img
                src="jobs-banner.jpg"
                alt=""
                className="bg-white bg-opacity-80 rounded-lg h-20 sm:h-26 lg:h-24"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 p-20 mx-auto text-gray-700 overflow-x-hidden">
        <h1 className="text-center text-xl text-black font-medium mb-10">
          Trusted by 100+ Companies Worldwide
        </h1>
        <BrandsBar />

        <div
          data-aos="flip-up"
          className="max-w-xl mx-auto text-center mt-24 aos-init aos-animate"
        >
          <h1 className="font-bold text-darken my-3 text-4xl md:text-6xl">
            Our Expertise
          </h1>
          <p className="text-lg">
            GoodVibes build long-term professional relationships with our
            customers that you can rely on & trust.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-14 mt-20">
          <div
            data-aos="fade-up"
            className="bg-white shadow-xl p-6 text-center rounded-xl aos-init mb-6 h-full"
          >
            <div
              className="w-16 h-16 flex items-center justify-center mx-auto transform -translate-y-12"
            >
              <img src="tick.png" width={50} height={50} />
            </div>
            <h1 className="font-medium text-xl mb-3 lg:px-14 text-black">
              IT Consulting
            </h1>
            <p className="px-4 text-lg md:text-base">
              Empower your business with strategic insights and expert guidance.
              Our IT consulting services are designed to help you navigate
              complex technological landscapes, optimize operations, and achieve
              your goals with confidence.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay={150}
            className="bg-white shadow-xl p-6 text-center rounded-xl aos-init mb-6 h-full"
          >
            <div
              className="w-16 h-16 flex items-center justify-center mx-auto transform -translate-y-12"
            >
              <img src="tick.png" width={50} height={50} />
            </div>
            <h1 className="font-medium text-xl mb-3 lg:px-14 text-black">
              Web Development
            </h1>
            <p className="px-4 text-lg md:text-base">
              Build stunning, user-friendly websites that leave a lasting
              impression. From dynamic e-commerce platforms to sleek corporate
              sites, we craft digital experiences that drive engagement and
              growth.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay={300}
            className="bg-white shadow-xl p-6 text-center rounded-xl aos-init mb-6 h-full"
          >
            <div
              className="w-16 h-16 flex items-center justify-center mx-auto transform -translate-y-12"
            >
              <img src="tick.png" width={50} height={50} />
            </div>
            <h1 className="font-medium text-xl mb-3 lg:px-14 text-black lg:h-14 pt-3">
              Application Development
            </h1>
            <p className="px-4 text-lg md:text-base">
              Transform your ideas into powerful, scalable applications. Our
              team develops custom solutions that enhance efficiency, boost
              productivity, and adapt to your evolving business needs
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay={300}
            className="bg-white shadow-xl p-6 text-center rounded-xl aos-init mb-6 h-full"
          >
            <div
              className="w-16 h-16 flex items-center justify-center mx-auto transform -translate-y-12"
            >
              <img src="tick.png" width={50} height={50} />
            </div>
            <h1 className="font-medium text-xl mb-3 lg:px-14 text-black lg:h-14 pt-3">
              Software Testing
            </h1>
            <p className="px-4 text-lg md:text-base">
              Ensure your software’s reliability, performance, and security with
              our comprehensive testing services. We provide end-to-end quality
              assurance to deliver flawless user experiences.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay={300}
            className="bg-white shadow-xl p-6 text-center rounded-xl aos-init mb-6 h-full"
          >
            <div
              className="w-16 h-16 flex items-center justify-center mx-auto transform -translate-y-12"
            >
              <img src="tick.png" width={50} height={50} />
            </div>
            <h1 className="font-medium text-xl mb-3 lg:px-14 text-black lg:h-14 pt-3">
              Cloud Migrations
            </h1>
            <p className="px-4 text-lg md:text-base">
              Seamlessly transition to the cloud with our expert migration
              services. We help you leverage the power of cloud technology for
              enhanced flexibility, scalability, and cost-efficiency.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay={300}
            className="bg-white shadow-xl p-6 text-center rounded-xl aos-init mb-6 h-full"
          >
            <div
              className="w-16 h-16 flex items-center justify-center mx-auto transform -translate-y-12"
            >
              <img src="tick.png" width={50} height={50} />
            </div>
            <h1 className="font-medium text-xl mb-3 lg:px-14 text-black lg:h-14 pt-3">
              Content Management
            </h1>
            <p className="px-4 text-lg md:text-base">
              Streamline your content workflows and elevate your digital
              presence. Our content management solutions simplify the creation,
              organization, and delivery of impactful content.
            </p>
          </div>
        </div>
        <div className="mt-28">
          <div
            data-aos="flip-down"
            className="text-center max-w-screen-md mx-auto aos-init"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose Us?
            </h1>
            <p className="text-lg md:text-base">
              GoodVibes is a platform that allows educators to create online
              classes whereby they can store the course materials online, manage
              assignments, quizzes and exams, monitor due dates, grade results
              and provide students with feedback all in one place.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-col md:flex-row justify-center space-y-5 md:space-y-0 md:space-x-6 lg:space-x-10 mt-7 aos-init"
          >
            <div className="relative md:w-5/12">
              <img src="img/Rectangle 19.png" alt="" className="rounded-2xl" />
              <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <h1 className="uppercase text-white font-bold text-center text-sm lg:text-xl mb-3">
                    FOR INSTRUCTORS
                  </h1>
                  <button className="rounded-full text-white border text-xs lg:text-md px-6 py-3 w-full font-medium btn-zoom">
                    Start a class today
                  </button>
                </div>
              </div>
            </div>
            <div className="relative md:w-5/12">
              <img src="img/Rectangle 21.png" alt="" className="rounded-2xl" />
              <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <h1 className="uppercase text-white font-bold text-center text-sm lg:text-xl mb-3">
                    FOR STUDENTS
                  </h1>
                  <button
                    className="rounded-full text-white text-xs lg:text-md px-6 py-3 w-full font-medium btn-zoom"
                    style={{ background: "rgba(35, 189, 238, 0.9)" }}
                  >
                    Enter access code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:flex items-center sm:space-x-8 mt-36">
          <div data-aos="fade-right" className="sm:w-1/2 relative aos-init">
            {/* <div className="bg-[--main-color] rounded-full absolute w-12 h-12 z-0 -left-4 -top-[60px] animate-pulse" /> */}
            <h1 className="font-semibold text-4xl md:text-6xl relative z-50 text-darken lg:pr-10">
              About Us
              {/* <span className="text-yellow-500"> GoodVibes IT</span> */}
            </h1>
            <p className="py-5 text-lg">
              Welcome to GoodVibes IT , your trusted partner in IT solutions and
              digital transformation. With a passion for innovation and a
              commitment to excellence, we specialize in delivering cutting-edge
              services tailored to meet the unique needs of businesses across
              industries.
            </p>
            <Link
              href="/contact"
              className="border px-6 py-3 rounded-3xl hover:border-[--main-color]"
            >
              Learn More
            </Link>
          </div>
          <div
            data-aos="fade-left"
            className="sm:w-1/2 relative mt-10 sm:mt-0 aos-init"
          >
            <div
              className="floating w-24 h-24 absolute rounded-lg z-0 -top-3 -left-3"
              style={{ background: "rgb(35, 189, 238)" }}
            />
            <img
              src="img/laptop-news.png"
              alt=""
              className="rounded-xl z-40 relative"
            />
            <div className="bg-[--main-color] w-40 h-40 floating absolute rounded-lg z-10 -bottom-3 -right-3" />
          </div>
        </div>
        <div className="md:flex mt-40 md:space-x-10 items-start">
          <div data-aos="fade-down" className="md:w-7/12 relative aos-init">
            <div
              className="w-32 h-32 rounded-full absolute z-0 left-4 -top-12 animate-pulse"
              style={{ background: "rgb(51, 239, 160)" }}
            />
            <div
              className="w-5 h-5 rounded-full absolute z-0 left-36 -top-12 animate-ping"
              style={{ background: "rgb(51, 217, 239)" }}
            />
            <img
              src="img/vcall.png"
              alt=""
              className="relative z-50 floating"
            />
            <div
              className="w-36 h-36 rounded-full absolute z-0 right-16 -bottom-1 animate-pulse"
              style={{ background: "rgb(91, 97, 235)" }}
            />
            <div
              className="w-5 h-5 rounded-full absolute z-0 right-52 bottom-1 animate-ping"
              style={{ background: "rgb(245, 102, 102)" }}
            />
          </div>
          <div
            data-aos="fade-down"
            className="md:w-5/12 mt-20 md:mt-0  aos-init"
          >
            <h1 className="text-2xl font-semibold text-darken lg:pr-40">
              A <span className="text-yellow-500">user interface</span> designed
              for the classroom
            </h1>
            <div className="flex items-center space-x-5 my-5">
              <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
                <svg
                  viewBox="0 0 27 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                >
                  <rect
                    width="11.8182"
                    height="11.8182"
                    rx={2}
                    fill="#17a2b7"
                  />
                  <rect
                    y="14.1816"
                    width="11.8182"
                    height="11.8182"
                    rx={2}
                    fill="#17a2b7"
                  />
                  <rect
                    x="14.7727"
                    width="11.8182"
                    height="11.8182"
                    rx={2}
                    fill="#17a2b7"
                  />
                  <rect
                    x="14.7727"
                    y="14.1816"
                    width="11.8182"
                    height="11.8182"
                    rx={2}
                    fill="#17a2b7"
                  />
                </svg>
              </div>
              <p>
                Teachers don’t get lost in the grid view and have a dedicated
                Podium space.
              </p>
            </div>
            <div className="flex items-center space-x-5 my-5">
              <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
                <svg
                  viewBox="0 0 28 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                >
                  <rect
                    x={8}
                    y={6}
                    width={20}
                    height={20}
                    rx={2}
                    fill="#17a2b7"
                  />
                  <rect
                    width="21.2245"
                    height="21.2245"
                    rx={2}
                    fill="#17a2b7"
                  />
                </svg>
              </div>
              <p>TAs and presenters can be moved to the front of the class.</p>
            </div>
            <div className="flex items-center space-x-5 my-5">
              <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
                <svg
                  viewBox="0 0 30 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                >
                  <path
                    d="M4.5 11.375C6.15469 11.375 7.5 9.91758 7.5 8.125C7.5 6.33242 6.15469 4.875 4.5 4.875C2.84531 4.875 1.5 6.33242 1.5 8.125C1.5 9.91758 2.84531 11.375 4.5 11.375ZM25.5 11.375C27.1547 11.375 28.5 9.91758 28.5 8.125C28.5 6.33242 27.1547 4.875 25.5 4.875C23.8453 4.875 22.5 6.33242 22.5 8.125C22.5 9.91758 23.8453 11.375 25.5 11.375ZM27 13H24C23.175 13 22.4297 13.3605 21.8859 13.9445C23.775 15.0668 25.1156 17.093 25.4062 19.5H28.5C29.3297 19.5 30 18.7738 30 17.875V16.25C30 14.4574 28.6547 13 27 13ZM15 13C17.9016 13 20.25 10.4559 20.25 7.3125C20.25 4.16914 17.9016 1.625 15 1.625C12.0984 1.625 9.75 4.16914 9.75 7.3125C9.75 10.4559 12.0984 13 15 13ZM18.6 14.625H18.2109C17.2359 15.1328 16.1531 15.4375 15 15.4375C13.8469 15.4375 12.7688 15.1328 11.7891 14.625H11.4C8.41875 14.625 6 17.2453 6 20.475V21.9375C6 23.2832 7.00781 24.375 8.25 24.375H21.75C22.9922 24.375 24 23.2832 24 21.9375V20.475C24 17.2453 21.5812 14.625 18.6 14.625ZM8.11406 13.9445C7.57031 13.3605 6.825 13 6 13H3C1.34531 13 0 14.4574 0 16.25V17.875C0 18.7738 0.670312 19.5 1.5 19.5H4.58906C4.88438 17.093 6.225 15.0668 8.11406 13.9445Z"
                    fill="#17a2b7"
                  />
                </svg>
              </div>
              <p>
                Teachers can easily see all students and class data at one time.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-24 flex flex-col-reverse md:flex-row items-start md:space-x-10">
          <div data-aos="zoom-in-right" className="md:w-5/12 aos-init">
            <div className="flex items-center space-x-20 mb-5">
              <span className="border border-gray-300 w-14 absolute" />
              <h1 className="text-gray-400 tracking-widest text-sm">
                TESTIMONIAL
              </h1>
            </div>
            <h1 className="font-semibold text-darken text-2xl lg:pr-40">
              What They Say?
            </h1>
            <p className=" my-5 lg:pr-36">
              GoodVibes has got more than 100k positive ratings from our users
              around the world.
            </p>
            <p className=" my-5 lg:pr-36">
              Some of the students and teachers were greatly helped by the
              GoodVibes.
            </p>
            <p className=" my-5 lg:pr-36">
              Are you too? Please give your assessment
            </p>
            <button className="flex items-center space-x-3 pl-3 border-b border-l border-t border-yellow-500 text-yellow-500 font-medium my-4 btn-zoom rounded-full">
              <span>Write your assessment</span>
              <div className="border border-yellow-500 h-14 w-14 rounded-full flex items-center justify-center">
                <svg
                  viewBox="0 0 26 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                >
                  <path
                    d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.2929L19.3431 0.928934C18.9526 0.538409 18.3195 0.538409 17.9289 0.928934C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM-8.74228e-08 9L25 9L25 7L8.74228e-08 7L-8.74228e-08 9Z"
                    fill="#17a2b7"
                  />
                </svg>
              </div>
            </button>
          </div>
          <div data-aos="zoom-in-left" className="md:w-7/12 aos-init">
            <img src="img/testimonials.png" className="md:w-10/12 mx-auto" />
          </div>
        </div>
        <div data-aos="zoom-in" className="mt-16 text-center aos-init">
          <h1 className="text-darken text-2xl font-semibold">
            Latest News and Resources
          </h1>
          <p className=" my-5">
            See the developments that have occurred to GoodVibess in the world
          </p>
        </div>
        <div
          data-aos="zoom-in-up"
          className="my-14 flex flex-col lg:flex-row lg:space-x-20 aos-init"
        >
          <div className="lg:w-6/12">
            <img src="img/laptop-news.png" className="w-full mb-6" />
            <span className="bg-yellow-300 text-darken font-semibold px-4 py-px text-sm rounded-full">
              NEWS
            </span>
            <h1 className="text-gray-800 font-semibold my-3 text-xl">
              Class adds $30 million to its balance sheet for a Zoom-friendly
              edtech solution
            </h1>
            <p className=" mb-3">
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
            </p>
            <a href="" className="underline">
              Read more
            </a>
          </div>
          <div className="lg:w-7/12 flex flex-col justify-between mt-12 space-y-5 lg:space-y-0 lg:mt-0">
            <div className="flex space-x-5">
              <div className="w-4/12">
                <div className="relative">
                  <img
                    src="img/children-laptop.png"
                    className="rounded-xl w-full"
                  />
                  <span className="absolute bottom-2 right-2 bg-yellow-300 text-darken font-semibold px-4 py-px text-sm rounded-full hidden sm:block">
                    PRESS RELEASE
                  </span>
                </div>
              </div>
              <div className="w-8/12">
                <h1 className="text-gray-800 text-sm sm:text-lg font-semibold">
                  Class Technologies Inc. Closes $30 Million Series A Financing
                  to Meet High Demand
                </h1>
                <p className=" my-2 sm:my-4 text-xs sm:text-md">
                  Class Technologies Inc., the company that created Class,...
                </p>
              </div>
            </div>
            <div className="flex space-x-5">
              <div className="w-4/12">
                <div className="relative">
                  <img
                    src="img/girl-laptop.png"
                    className="rounded-xl w-full"
                  />
                  <span className="absolute bottom-2 right-2 bg-yellow-300 text-darken font-semibold px-4 py-px text-sm rounded-full hidden sm:block">
                    NEWS
                  </span>
                </div>
              </div>
              <div className="w-8/12">
                <h1 className="text-gray-800 text-sm sm:text-lg font-semibold">
                  Zooms earliest investors are betting millions on a better Zoom
                  for schools
                </h1>
                <p className=" my-2 sm:my-4 text-xs sm:text-md">
                  Zoom was never created to be a consumer product. Nonetheless,
                  the...
                </p>
              </div>
            </div>
            <div className="flex space-x-5">
              <div className="w-4/12">
                <div className="relative">
                  <img src="img/cat-laptop.png" className="rounded-xl w-full" />
                  <span className="absolute bottom-2 right-2 bg-yellow-300 text-darken font-semibold px-4 py-px text-sm rounded-full hidden sm:block">
                    NEWS
                  </span>
                </div>
              </div>
              <div className="w-8/12">
                <h1 className="text-gray-800 text-sm sm:text-lg font-semibold">
                  Former Blackboard CEO Raises $16M to Bring LMS Features to
                  Zoom Classrooms
                </h1>
                <p className=" my-2 sm:my-4 text-xs sm:text-md">
                  This year, investors have reaped big financial returns from
                  betting on Zoom...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
