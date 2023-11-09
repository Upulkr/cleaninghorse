import React from "react";
import { Link } from "react-router-dom";
import aboutImage from "../assets/gallery/about.png";
import FeedbackImage from "../assets/gallery/feedback.png";
import gellary1 from "../assets/gallery/gallery1.png";
import gellary2 from "../assets/gallery/gallery2.png";
import gellary3 from "../assets/gallery/gallery3.png";
import serviceImage from "../assets/gallery/service.png";
import team1 from "../assets/gallery/team1.png";
import team2 from "../assets/gallery/team2.png";
import team3 from "../assets/gallery/team3.png";
import Button from "../components/Buttons/Button";
import Icon from "../components/Buttons/Icon";
import ClientReviewCard from "../components/ClientReviewCard/ClientReviewCard";
import SectionHead from "../components/Heading/SectionHead";
import SubHead from "../components/Heading/SubHead";
import PlanCard from "../components/Plans/PlanCard";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import TrainnerCard from "../components/TrainnerCard/TrainnerCard";
import { useGetAllMembershipPlanQuery } from "../redux/api/membership/membershipApi";

const Home = () => {
  // Handle Our Plans
  const { data, isLoading } = useGetAllMembershipPlanQuery();
  const text = "The car you drive says about you💫";
  return (
    <div>
      <div className="main">
        <div className="overlay"></div>
        <video src="/video.mp4" autoPlay loop muted />
        <div
          className=" content text-extraLarge xl:text-[90px]   font-bold uppercase  "
          style={{ fontFamily: "'Teko', sans-serif" }}
        >
          <h1 className=" text-center overflow-hidden text-3xl font-bold leading-19 text-white justify-center">
            {[...text].map((char, index) => (
              <span
                className="animate-text-reveal inline-block"
                style={{ animationDelay: `${index * 0.05}s` }}
                key={`${char}-${index}`}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
        </div>
      </div>
      <div className="main2">
        <div className="overlay2"></div>
        <video src="/cleaning.mp4" autoPlay loop muted />
        <div
          className="content2 text-white text-extraLarge md:text-[70px] md:leading-none  font-bold uppercase "
          style={{ fontFamily: "'Teko', sans-serif" }}
        >
          <h1>"Cleanliness is next to Godliness,"</h1>
        </div>
      </div>

      <Button className="justify-center ">
        <Link to="/login" className="md:px-2 justify-center mx-auto ">
          BOOK NOW
        </Link>
      </Button>
      <h1 className="text-center font-black xl:text-extraLarge md:text-2xl uppercase">
        We brings quality & responsible vehicle detailing and home ,office
        cleaning services in Canda
      </h1>
 

      <div className=" m-5 lg:flex items-center justify-between ">
        <div className="px-5 lg:w-1/2">
          <img
            className="block mx-auto"
            src={aboutImage}
            alt="Fitness one About"
          />
        </div>
        <div className=" px-4 md:px-10 lg:w-1/2">
          <div className="flex items-center">
            <div className="h-[2px] w-[100px] bg-orange"></div>
            <SubHead color="main" title="About Cleaning Horse" />
          </div>
          <SectionHead
            color="black"
            title="EFFICIENTLY RESTORE YOUR VEHICLE AND HOME TO PRISTINE CONDITION"
          ></SectionHead>
          <p className="text-base text-blackGray">
            Brook presents your services with flexible, convenient and cdpose
            layouts. You can select your favorite layouts & elements for cular
            ts with unlimited ustomization possibilities. Pixel-perfect
            replication of the designers is intended.
          </p>
          <p className="text-base text-blackGray my-6">
            Brook presents your services with flexible, convefnient and chient
            anipurpose layouts. You can select your favorite layouts.
          </p>
          <div className=" flex">
            <Button>
              <Link
                to="/login"
                className="md:px-2 text-center flex justify-center pl-2"
              >
                Bring your vehicle to us or we will get in your place
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div
        className="bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${serviceImage})` }}
      >
        <div className="px-5 ">
          <div className="flex items-center">
            <div className="h-[2px] w-[100px] bg-white"></div>
            <SubHead color="main" title="Our Services For You" />
          </div>
          <div className="lg:flex items-center justify-between">
            <SectionHead
              color="white"
              title="Give us your vehicle to us, we take care of rest like a child"
            ></SectionHead>
            {/* <div className="lg:w-3/12">
              <Button>
                <Link to="/login" className="md:px-2">
                  Book A appointment
                </Link>
              </Button>{" "}
            </div> */}
          </div>
        </div>
        <div className="md:flex justify-center">
          <ServiceCard
            icon="fa-solid fa-notes-medical"
            title="CAR & TRUCK DETAILING"
            description="The sea freight service has grown considerably in recent years. We spend
            time getting to know..."
            path="/services"
            content="Discover more About us"
          ></ServiceCard>
          <ServiceCard
            icon="fa-solid fa-dumbbell"
            title="HOME CLEANING"
            status="active"
            description="The sea freight service has grown considerably in recent years. We spend
            time getting to know..."
            path="/services"
            content="Discover more About us"
          ></ServiceCard>
          {/* <ServiceCard
            icon="fa-regular fa-chess-rook"
            title="gym strategies"
            description="The sea freight service has grown considerably in recent years. We spend
            time getting to know..."
            path="/services"
            content="Discover more About us"
          ></ServiceCard> */}
        </div>
      </div>
      {/* Feedback Section */}
      <div className="my-20 lg:flex items-center justify-between xl:my-40">
        {/* <div className="px-5 lg:w-1/2">
          <img
            className="block mx-auto"
            src={FeedbackImage}
            alt="Fitness one Feedback"
          />
        </div> */}
        <div className="py-10 px-4 md:px-10 lg:w-1/2">
          <div className="flex items-center">
            <div className="h-[2px] w-[100px] bg-main"></div>
            <SubHead color="main" title="Client Feedback" />
          </div>

          <SectionHead
            color="black"
            title="What Our Client Think About Our Services"
          ></SectionHead>
          <div>
            <ClientReviewCard></ClientReviewCard>
            <div className="flex  space-x-4 my-10">
              <Icon IconName="fa-solid fa-arrow-left" color="main" size="xl" />
              <Icon IconName="fa-solid fa-arrow-right" color="main" size="xl" />
            </div>
          </div>
        </div>
      </div>
      {/* Our Gellary */}
      <section className="overflow-hidden text-gray-700 mb-10">
        <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="w-full sm:w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={gellary1}
              />
            </div>
            <div className="w-full sm:w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={gellary2}
              />
            </div>
            <div className="w-full sm:w-full p-1 md:p-2 h-[400px]">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg "
                src={gellary3}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Plans */}
      <div className="bg-white pt-20 pb-10 px-5">
        <div className="flex justify-center   mb-10">
          <div>
            <div className="flex items-center">
              <div className="h-[2px] w-[100px] bg-main"></div>
              <SubHead color="main" title="Be Our Member" />
            </div>
            <SectionHead color="black" title="Our Plans"></SectionHead>
          </div>
        </div>
        <div className=" lg:flex justify-center">
          {data &&
            data.map((plan) => (
              <PlanCard key={plan._id} data={plan}></PlanCard>
            ))}
        </div>
      </div>

      {/* Team Members */}
      <div className="bg-white pt-20 pb-10">
        <div className="px-5 ">
          <div className="flex items-center">
            <div className="h-[2px] w-[100px] bg-main"></div>
            <SubHead color="main" title="Our Team Members" />
          </div>
          <div className="lg:flex items-center justify-between">
            <SectionHead
              color="black"
              title="Our Most Exprienced Team"
            ></SectionHead>
            <div className="lg:w-3/12">
              <Button>
                <Link className="px-2" to="/services">
                  More Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="md:flex justify-around">
          <TrainnerCard image={team1}></TrainnerCard>
          {/* <TrainnerCard image={team2}></TrainnerCard>
          <TrainnerCard image={team3}></TrainnerCard> */}
        </div>
      </div>
      {/* Time Schedule */}
      {/* <div className="bg-white pt-20 pb-10">
        <div className="px-5 text-center ">
          <div className="flex items-center justify-center">
            <div className="h-[2px] w-[100px] bg-main"></div>
            <SubHead color="main" title="Our Time Schedule" />
          </div>
          <div className="w-full lg:w-[60%] mx-auto">
            <SectionHead
              color="black"
              title="Select The Perfect Time You Need Now "
            ></SectionHead>
          </div>
        </div>
        <div className="my-20 font-popins">
          <ul className="bg-sky px-4 py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 lg:px-20 gap-4">
            <li className="px-6 py-2 text-[24px]  text-center">Suturday</li>
            <li className="px-6 py-2 text-[24px]  text-center">Sunday</li>
            <li className="px-6 py-2 text-[24px]  text-center">Monday</li>
            <li className="px-6 py-2 text-[24px] bg-main text-white text-center">
              Tuesday
            </li>
            <li className="px-6 py-2 text-[24px]  text-center">Wednesday</li>
            <li className="px-6 py-2 text-[24px]  text-center">Thursday</li>
            <li className="px-6 py-2 text-[24px]  text-center">Friday</li>
          </ul>
          <ul className="bg-sky px-4 py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:px-20 gap-4">
            <li className="px-6 py-6 text-[24px]  text-center  ">
              <div>
                <h5 className="bg-black text-white px-4 py-2">8am-10am</h5>
                <h2 className="text-[30px]">Kick Boxing</h2>
                <p>by Jhon Doe</p>
              </div>
            </li>
            <li className="px-6 py-6 text-[24px]  text-center bg-main ">
              <div className="text-white">
                <h5 className="bg-white text-black px-4 py-2">8am-10am</h5>
                <h2 className="text-[30px]">Kick Boxing</h2>
                <p>by Jhon Doe</p>
              </div>
            </li>
            <li className="px-6 py-6 text-[24px]  text-center  ">
              <div>
                <h5 className="bg-black text-white px-4 py-2">8am-10am</h5>
                <h2 className="text-[30px]">Kick Boxing</h2>
                <p>by Jhon Doe</p>
              </div>
            </li>
            <li className="px-6 py-6 text-[24px]  text-center  ">
              <div>
                <h5 className="bg-black text-white px-4 py-2">8am-10am</h5>
                <h2 className="text-[30px]">Kick Boxing</h2>
                <p>by Jhon Doe</p>
              </div>
            </li>
            <li className="px-6 py-6 text-[24px]  text-center  ">
              <div>
                <h5 className="bg-black text-white px-4 py-2">8am-10am</h5>
                <h2 className="text-[30px]">Kick Boxing</h2>
                <p>by Jhon Doe</p>
              </div>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
