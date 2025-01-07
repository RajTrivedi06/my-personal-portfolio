import React, { useEffect } from "react";
// ShineBorder component import
import { ShineBorder } from "@/components/ui/shine-border";

// Images
import ChatImage from "@/assets/ChatImage.png";
import HouseImage from "@/assets/houseimage.png";
import CourseSearchImage from "@/assets/coursesearchAI.jpg";
import ConnectCablesImage from "@/assets/connectcablesimage.jpg";

// Preload function to load images into the cache
const preloadImages = (srcs: string[]) => {
  srcs.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

const ProjectsPage: React.FC = () => {
  useEffect(() => {
    // Preload all images
    preloadImages([
      ChatImage,
      HouseImage,
      CourseSearchImage,
      ConnectCablesImage,
    ]);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black text-white p-8">
      {/* Heading at top-left */}
      <h1 className="absolute top-40 left-8 text-6xl font-bold text-purple-600">
        The Code Canvas
      </h1>

      {/* 4-column grid */}
      <div className="mt-60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-13 justify-items-center">
        {/* 1: BadgerChat Card */}
        <ShineBorder
          color="#9B5CFF"
          borderWidth={2}
          borderRadius={12}
          className="w-[400px] h-[650px] bg-black flex flex-col rounded-lg overflow-hidden !p-0"
        >
          <img
            src={ChatImage}
            alt="BadgerChat"
            className="h-[200px] w-full object-cover"
          />
          <div className="flex-1 px-4 py-4 text-white flex flex-col justify-start">
            <h2 className="text-xl font-bold mb-2">BadgerChat</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              BadgerChat is a mobile application built with{" "}
              <strong>React Native</strong> and <strong>Expo</strong> for
              real-time chat functionality. It lets users register or log in
              with secure, token-based authentication, post and delete messages,
              and switch between chatrooms. The app features intuitive
              navigation, uses <strong>expo-secure-store</strong> for token
              storage, and includes a guest mode for read-only access,
              showcasing robust mobile development concepts.
            </p>
          </div>
        </ShineBorder>

        {/* 2: Dynamic Risk & Coverage Assessment Card */}
        <ShineBorder
          color="#9B5CFF"
          borderWidth={2}
          borderRadius={12}
          className="w-[400px] h-[650px] bg-black flex flex-col rounded-lg overflow-hidden !p-0"
        >
          <img
            src={HouseImage}
            alt="Dynamic Risk & Coverage"
            className="h-[200px] w-full object-cover"
          />
          <div className="flex-1 px-4 py-4 text-white flex flex-col justify-start">
            <h2 className="text-xl font-bold mb-2">
              Dynamic Risk & Coverage Assessment Application(ongoing)
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Developed a web application using FastAPI for the backend and
              React with Radix UI for a professional, responsive frontend.
              Integrated external APIs and comprehensive housing market datasets
              to evaluate property insurance risks and deliver personalized
              coverage recommendations. Utilized pandas for efficient data
              processing, ensuring a seamless user experience.
            </p>
          </div>
        </ShineBorder>

        {/* 3: Course Search AI */}
        <ShineBorder
          color="#9B5CFF"
          borderWidth={2}
          borderRadius={12}
          className="w-[400px] h-[650px] bg-black flex flex-col rounded-lg overflow-hidden !p-0"
        >
          <img
            src={CourseSearchImage}
            alt="Course Search AI"
            className="h-[200px] w-full object-cover"
          />
          <div className="flex-1 px-4 py-4 text-white flex flex-col justify-start">
            <h2 className="text-xl font-bold mb-2">
              Course Search AI(ongoing)
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Developed and integrated a specialized ChatGPT-based system for
              searching UW–Madison courses. This project leveraged advanced
              natural language processing, real-time data retrieval, and custom
              user-friendly interfaces to streamline course selection. The
              system improved search accuracy by analyzing course attributes,
              prerequisites, and scheduling details, ultimately enhancing
              students’ planning and registration experiences. Throughout
              development, user feedback guided iterative improvements.
            </p>
          </div>
        </ShineBorder>

        {/* 4: Connect Cables */}
        <ShineBorder
          color="#9B5CFF"
          borderWidth={2}
          borderRadius={12}
          className="w-[400px] h-[650px] bg-black flex flex-col rounded-lg overflow-hidden !p-0"
        >
          <img
            src={ConnectCablesImage}
            alt="Connect Cables"
            className="h-[200px] w-full object-cover"
          />
          <div className="flex-1 px-4 py-4 text-white flex flex-col justify-start">
            <h2 className="text-xl font-bold mb-2">Connect Cables(ongoing)</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Developed a modern site for Connect Cables, a wire harness
              solutions provider, using React and advanced UI libraries. The
              site highlights manufacturing capabilities, custom wiring
              services, and product catalogs through an intuitive user
              experience. Detailed service pages and streamlined contact options
              bolster the company’s brand presence, helping customers find
              tailored wiring solutions efficiently.
            </p>
          </div>
        </ShineBorder>
      </div>
    </div>
  );
};

export default ProjectsPage;
