import React from "react";

export default function Contact() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="bg-gray-900 w-1/2 p-8 rounded-md mx-auto">
        <div className="w-full">
          <div className="text-center mb-8 text-3xl text-white font-bold font-lexand">
            Contact Us
          </div>
          <div className="mb-6 flex items-center">
            <label htmlFor="email" className="mr-4 text-xl font-lexand text-white">
              Email:
            </label>
            <input
              id="email"
              placeholder="Enter Email"
              className="text-gray-800 p-2 bg-white h-10 w-3/4 rounded-md"
              type="email"
            />
          </div>
          <div className="mb-6 flex items-center">
            <label htmlFor="name" className="mr-4 text-xl font-lexand text-white">
              Name:
            </label>
            <input
              id="name"
              placeholder="Enter Name"
              className="text-gray-800 p-2 bg-white h-10 w-3/4 rounded-md"
              type="text"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="description" className="block text-xl font-lexand text-white mb-2">
              Description:
            </label>
            <textarea
              id="description"
              className="text-gray-800 p-2 bg-white w-full rounded-md h-36"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div className="text-center">
            <button className="px-8 py-3 bg-yellow-500 text-gray-800 border border-yellow-500 rounded-md hover:bg-gray-800 hover:text-yellow-500">
              <span className="font-bold text-lg">SEND</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
