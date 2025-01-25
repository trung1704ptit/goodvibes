/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import BrandsBar from "@/components/BrandsBar";
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
                <button className="lg:mx-0 bg-[--main-color] text-white text-xl font-bold rounded-xl py-4 px-9 btn-zoom outline-none">
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
              <img src="business.png" width={60} height={60} />
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

        <div className="sm:flex sm:space-x-8 mt-40">
          <div
            data-aos="fade-right"
            className="relative aos-init md:max-w-[50%] text-center md:text-left"
          >
            <h1 className="font-bold my-3 text-4xl md:text-5xl text-center md:text-left">
              About Us
            </h1>
            <p className="py-5 text-lg mb-6 text-center md:text-left">
              Welcome to GoodVibes IT , your trusted partner in IT solutions and
              digital transformation. With a passion for innovation and a
              commitment to excellence, we specialize in delivering cutting-edge
              services tailored to meet the unique needs of businesses across
              industries.
            </p>
            <Link
              href="/contact"
              className="border px-6 py-3 rounded-xl hover:border-[--main-color] text-center md:text-left m-auto inline-block md:inline-block"
            >
              Contact Us
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
              src="about-1.jpg"
              alt=""
              className="rounded-xl z-40 relative"
            />
            <div className="bg-[--main-color] w-40 h-40 floating absolute rounded-lg z-10 -bottom-3 -right-3" />
          </div>
        </div>

        <div className="max-w-xl mx-auto text-center mt-40 aos-init aos-animate">
          <h1
            className="font-bold text-darken my-3 text-4xl md:text-5xl fade-up"
            data-aos="fade-up"
          >
            Our Expertise
          </h1>
          <p className="text-lg fade-up" data-aos="fade-up">
            GoodVibes build long-term professional relationships with our
            customers that you can rely on & trust.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-14 mt-20">
          <div
            data-aos="fade-up"
            className="bg-white shadow-xl p-6 text-center rounded-xl aos-init mb-6 h-full"
          >
            <div className="w-16 h-16 flex items-center justify-center mx-auto transform -translate-y-12">
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
            <div className="w-16 h-16 flex items-center justify-center mx-auto transform -translate-y-12">
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
            <div className="w-16 h-16 flex items-center justify-center mx-auto transform -translate-y-12">
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
            <div className="w-16 h-16 flex items-center justify-center mx-auto transform -translate-y-12">
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
            <div className="w-16 h-16 flex items-center justify-center mx-auto transform -translate-y-12">
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
            <div className="w-16 h-16 flex items-center justify-center mx-auto transform -translate-y-12">
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

        <div className="sm:flex items-center sm:space-x-8 mt-40">
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
            data-aos="fade-left"
            className="sm:w-1/2 relative mt-10 sm:mt-0 aos-init"
          >
            <h1 className="font-bold my-3 text-4xl md:text-5xl mb-6 text-center md:text-left">
              Why Choose Us?
            </h1>
            <p className="text-lg md:text-base mb-2">
              <strong>Tailored Solutions</strong>: We understand that every
              business is unique. That’s why we offer customized solutions
              designed to address your specific challenges and objectives.
            </p>

            <p className="text-lg md:text-base mb-2">
              <strong>Technical Excellence</strong>: Our team of experienced
              professionals stays at the forefront of technology trends to
              provide innovative and reliable solutions.
            </p>

            <p className="text-lg md:text-base mb-2">
              <strong>Client-Centric Approach</strong>: Your success is our
              priority. We work closely with you to ensure our services align
              with your vision and deliver measurable results.
            </p>

            <p className="text-lg md:text-base mb-2">
              <strong>End-to-End Support</strong>: From initial consultation to
              deployment and beyond, we’re with you every step of the way,
              ensuring a smooth and successful journey.
            </p>

            <p className="text-lg md:text-base mb-2">
              At Goodvibes IT, we’re not just your service provider. We’re your
              partner in growth and innovation. Let us help you unlock the full
              potential of technology and achieve lasting success in today’s
              digital landscape.
            </p>

            <p className="text-lg md:text-base mb-8">
              Contact us today to learn more about how we can
              empower your business.
            </p>

            <Link
              href="/contact"
              className="border px-6 py-3 rounded-xl hover:border-[--main-color] mt-6"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <section
        className="cta-sb bg_cover p-r z-1 pt-24 pb-24 bg-center bg-cover relative"
        style={{ backgroundImage: "url(cta-bg1.jpg)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(31,31,31,0.3)] to-[#1F1F1F] z-0"></div>
        <div className="container z-50 relative">
          <div className="grid md:grid-cols-2 md:gap-4 gap-10">
            <div className="section-content-box mb-50">
              <div className="section-title text-white mb-55">
                <h1 className="text-white text-4xl mb-4">
                  Need Consultations?
                </h1>
                <h1 className="text-white text-4xl font-bold mb-12">
                  We Are Ready to Providing Amazing Business Idea
                </h1>
              </div>
              <div
                className="cta-button aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration={1200}
              >
                <Link href={"/contact"}>
                  <button className="lg:mx-0 bg-[--main-color] text-white text-xl font-bold rounded-xl py-4 px-9 btn-zoom outline-none">
                    Get Consultations
                  </button>
                </Link>
              </div>
            </div>

            <div>
              <div
                className="sasly-iconic-box style-two mb-3 aos-init aos-animate bg-white rounded-md p-6 max-w-[400px]"
                data-aos="fade-down"
                data-aos-duration={1000}
              >
                <div className="content">
                  <h4 className="title text-black text-xl font-bold flex space-x-6 mb-3">
                    <img src="trophy-star.png" width={50} />
                    <span>We Are Award Winning Company</span>
                  </h4>
                  <p>
                    GoodVibes IT Solutions commitment excellence and innovation
                    earned
                  </p>
                </div>
              </div>

              <div
                className="sasly-iconic-box style-two mb-3 aos-init aos-animate bg-white rounded-md p-6 max-w-[400px]"
                data-aos="fade-up"
                data-aos-duration={1300}
              >
                <div className="content">
                  <h4 className="title text-black text-xl font-bold flex space-x-6 mb-4">
                    <img src="professional-development.png" width={50} />
                    <span>Professionals and Expert Support</span>
                  </h4>
                  <p>
                    GoodVibes IT Solutions commitment expert solutions and
                    professional support tailored to meet your needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
