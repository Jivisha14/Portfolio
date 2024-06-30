import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: express,
      name: "Express",
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
    },
    {
      id: 4,
      logo: nodejs,
      name: "NodeJS",
    },
    {
      id: 5,
      logo: python,
      name: "Python",
    },
    {
      id: 6,
      logo: java,
      name: "Java",
    },
  ];

  // Sample descriptions for each technology (with equal word count)
  const descriptions = {
    MongoDB:
      "MongoDB is a NoSQL database program that uses JSON-like documents with optional schemas.",
    Express:
      "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features.",
    ReactJS:
      "React.js is a JavaScript library for building user interfaces, allowing developers to compose complex UIs.",
    NodeJS:
      "Node.js is an open-source, cross-platform runtime environment for developing server-side and networking applications.",
    Python:
      "Python is a high-level programming language known for its simplicity and readability, widely used in web development and data analysis.",
    Java:
      "Java is a widely-used programming language known for its portability, reliability, and security features."
  };

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 text-blue-600">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-5">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="md:w-full h-auto border-2 rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] mx-auto p-1 rounded-full border-2"
                alt={name}
              />
              <div>
                <div className="text-center font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-center">
                  {descriptions[name]}
                </p>
              </div>
              <div className="flex justify-center mt-4 space-x-3">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Video
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
