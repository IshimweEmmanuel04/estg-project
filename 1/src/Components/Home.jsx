import React from "react";

//icons.
import Eye from "../Assets/eye.svg";
import Cap from "../Assets/graduation-cap.svg";
import Dot from "../Assets/circle-dot.svg";
import { FaCat } from "react-icons/fa";

//img.
import bckimg from "../Assets/55c2622596ad4e8e91d9994b985b9c16.jpg";

export default function Home() {
  return (
    <div>
      <div className="Home relative w-full ">
        <img
          src={bckimg}
          alt="..."
          className="w-full h-[90vh] object-cover opacity-[-50px]"
        />
        <div className="absolute top-[60%] left-[50%]  translate-x-[-45%]">
          <h3 className="text-2xl text-white text-center font-bold">
            WELCOME TO ESTG{" "}
          </h3>
          <p className="text-2xl text-white font-bold">
            “ECOLE SECONDAIRE TECHNIQUE DE GISENYI"
          </p>
        </div>
      </div>
      <div className="lg:flex  justify-between ml-10 mr-10 mt-5 p-6 ">
        <div className="lg:w-[30%] w-full">
          <div className=" lg:ml-32 sm:ml-48">
            <img src={Cap} alt="..." className="w-10 ml-1" />
            <h6 className="font-extrabold "> Motto</h6>
          </div>
          <div className="w-full ">
            <p className="text-gray-600">
              At ESTG/EPR TSS, our motto is not just a phrase; it's the essence
              of who we are and what we stand for.We believe that education is
              not confined within the walls of a classroom it's a lifelong
              journey of discovery and growth unwavering commitment and a
              passion for excellence we strive to empower to empower our
              students to become the leaders, thinkers, and innovators of
              tomorrow.
            </p>
          </div>
        </div>
        <br />
        <div className="lg:w-[30%] w-full  ">
          <div className="lg:ml-32 sm:ml-48">
            <img src={Eye} alt="..." className="w-10 ml-1" />
            <h6 className="font-extrabold">Vision</h6>
          </div>
          <div className="">
            <p className="text-gray-600">
              our goal is to foster a sense of curiosity,critical thinking, and
              creativity that extends beyond the classroom.We aspire to empower
              students with the knowledge and skills they need to thrive in an
              ever-evolving world.
            </p>
          </div>
        </div>
        <br />
        <div className="lg:w-[30%] w-full ">
          <div className="lg:ml-32 sm:ml-48">
            <img src={Dot} alt="..." className="w-10 ml-2" />
          <h6 className="font-extrabold ">Mission</h6>
          </div>
          <p className="text-gray-600">
            our mission is to revolutionize education through the seamless
            integration of technology, software, and electronics. We believe
            that preparing our students for the future means equipping them with
            the skills and knowledge necessary to thrive in an increasingly
            digital and interconnected world.
          </p>
        </div>
      </div>
      <div>
        {" "}
        <br /> <br />
      </div>
    </div>
  );
}
