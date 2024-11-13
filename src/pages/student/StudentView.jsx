import React, { useState } from "react";

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-xl ${
            star <= rating ? "text-purple-500" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const ProfileCard = ({ profile, onView, onDelete, onFlag, isGrid }) => (
  <div
    className={`profileCard bg-gradient-to-t from-white via-white to-purple-600 rounded-3xl shadow-lg ${
      isGrid === false ? "p-3" : "p-6 hover:scale-105"
    }  transform transition-all w-full`}
  >
    <div className="relative">
      <div
        className={`absolute right-0 ${
          isGrid === false ? "top-8" : "top-0"
        } flex flex-col gap-1`}
      >
        {/* Facebook Icon */}
        <button className="text-gray-600 hover:text-gray-800 transition-transform transform hover:scale-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-facebook"
            viewBox="0 0 16 16"
          >
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
          </svg>
        </button>

        {/* Instagram Icon */}
        <button className="text-gray-600 hover:text-gray-800 my-2 transition-transform transform hover:scale-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-linkedin"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
          </svg>
        </button>

        {/* LinkedIn Icon */}
        <button className="text-gray-600 hover:text-gray-800 transition-transform transform hover:scale-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-github"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
          </svg>
        </button>
      </div>
    </div>

    <div className={`flex ${isGrid ? "flex-col" : "gap-6"} items-center`}>
      <div>
        <img
          src={profile.image || "/path/to/default/image.jpg"}
          alt={profile.name}
          className="w-24 h-24 rounded-full mb-4 object-cover"
        />
        <div className={`mb-4`}>
          <StarRating rating={profile.rating} />
        </div>
      </div>
      <div class="ga flex flex-col">
        <h3 className="text-xl font-semibold mb-1 inline-block">
          {profile.name}
        </h3>

        <p className="text-gray-600 mb-3">{profile.role}</p>
        <div
          className={`${
            isGrid ? "justify-center w-full" : "justify-end align-items-center"
          } md:hidden gap-2 flex justify-center `}
        >
          <button
            className="hover:scale-125 transform transition-all"
            onClick={() => onView(profile)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#7E22CE"
              className="bi bi-eye-fill"
              viewBox="0 0 16 16"
            >
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
            </svg>
          </button>
          <button className="hover:scale-125 transform transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#7E22CE"
              className="bi bi-trash3-fill"
              viewBox="0 0 16 16"
            >
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
            </svg>
          </button>
          <button className="hover:scale-125 transform transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#7E22CE"
              className="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
              />
            </svg>
          </button>
          <button className="hover:scale-125 transform transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#7E22CE"
              className="bi bi-flag-fill"
              viewBox="0 0 16 16"
            >
              <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`${
          isGrid ? "justify-center w-full" : "justify-end align-items-center"
        } md:flex gap-6 hidden justify-center `}
      >
        <button
          className="hover:scale-125 transform transition-all"
          onClick={() => onView(profile)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#7E22CE"
            className="bi bi-eye-fill"
            viewBox="0 0 16 16"
          >
            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
          </svg>
        </button>
        <button className="hover:scale-125 transform transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#7E22CE"
            className="bi bi-trash3-fill"
            viewBox="0 0 16 16"
          >
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
          </svg>
        </button>
        <button className="hover:scale-125 transform transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#7E22CE"
            className="bi bi-pencil-square"
            viewBox="0 0 16 16"
          >
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path
              fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
            />
          </svg>
        </button>
        <button className="hover:scale-125 transform transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#7E22CE"
            className="bi bi-flag-fill"
            viewBox="0 0 16 16"
          >
            <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

const ProfileModal = ({ profile, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className=" bg-gradient-to-t from-white via-white to-purple-600 rounded-2xl p-6 max-w-md w-full" >
        <div className="flex justify-between items-start mb-4" >
          <button
            onClick={onClose}
            className="text-white hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>
        <div className="relative">
          <div className="absolute top-10 right-0 flex flex-col gap-1">
            {/* Facebook Icon */}
            <button className="text-gray-600 hover:text-gray-800 transition-transform transform hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
            </button>

            {/* Instagram Icon */}
            <button className="text-gray-600 hover:text-gray-800 my-2 transition-transform transform hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </button>

            {/* LinkedIn Icon */}
            <button className="text-gray-600 hover:text-gray-800 transition-transform transform hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center mb-6">
          <img
            src={profile.image}
            alt={profile.name}
            className="w-32 h-32 rounded-full mb-4 object-cover"
          />
          <h2 className="text-2xl font-bold mx-auto">{profile.name}</h2>

          <p className="text-lg text-gray-600">{profile.role}</p>
          <div className="mt-2">
            <StarRating rating={profile.rating} />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Contact Information</h3>
            <div className="flex gap-2 text-gray-600">
              <span className="mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                </svg>
              </span>{" "}
              <span> {profile.email}</span>
            </div>
            <div className="flex gap-2 text-gray-600">
              {" "}
              <span className="mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                  />
                </svg>
              </span>{" "}
              <span> {profile.phone}</span>
            </div>
            <div className="flex gap-2 text-gray-600">
              {" "}
              <span className="mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pin-map-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"
                  />
                </svg>
              </span>{" "}
              <span> {profile.address}</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Professional Summary</h3>
            <p className="text-gray-600">{profile.bio}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileDashboard = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewState, setViewState] = useState(true); // Grid view by default
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "Prem Shahi",
      role: "Web Developer",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      rating: 4,
      email: "prem.shahi@example.com",
      phone: "(555) 123-4567",
      address: "123 Tech Street, Web City, WD 12345",
      bio: "Experienced web developer with a passion for creating responsive and user-friendly websites.",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    },
    {
      id: 2,
      name: "Deepa Chand",
      role: "App Developer",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 3,
      email: "deepa.chand@example.com",
      phone: "(555) 234-5678",
      address: "456 Mobile Ave, App Town, AD 67890",
      bio: "Mobile app developer specializing in creating innovative and efficient applications.",
      skills: ["Swift", "Kotlin", "Flutter", "React Native"],
    },
    {
      id: 3,
      name: "Praka Shahi",
      role: "Photographer",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      rating: 4,
      email: "praka.shahi@example.com",
      phone: "(555) 345-6789",
      address: "789 Camera Road, Photo City, PC 34567",
      bio: "Professional photographer with an eye for capturing perfect moments.",
      skills: ["Portrait", "Landscape", "Event", "Commercial"],
    },
    {
      id: 4,
      name: "Sarah Lee",
      role: "UX Designer",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      rating: 5,
      email: "sarah.lee@example.com",
      phone: "(555) 456-7890",
      address: "101 UX Road, Design City, UX 45678",
      bio: "UX designer with a passion for creating user-centric interfaces.",
      skills: ["Figma", "Sketch", "Adobe XD", "Wireframing"],
    },
    {
      id: 5,
      name: "James Smith",
      role: "Backend Developer",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      rating: 4,
      email: "james.smith@example.com",
      phone: "(555) 567-8901",
      address: "202 Backend St, Code City, BC 56789",
      bio: "Backend developer specializing in scalable server-side solutions.",
      skills: ["Node.js", "Express", "MongoDB", "MySQL"],
    },
    {
      id: 6,
      name: "Emily Adams",
      role: "Data Scientist",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      rating: 5,
      email: "emily.adams@example.com",
      phone: "(555) 678-9012",
      address: "303 Data Drive, Data City, DC 67890",
      bio: "Data scientist with a focus on machine learning and data analysis.",
      skills: ["Python", "R", "TensorFlow", "SQL"],
    },
    {
      id: 7,
      name: "Michael Johnson",
      role: "Cloud Engineer",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      rating: 4,
      email: "michael.johnson@example.com",
      phone: "(555) 789-0123",
      address: "404 Cloud St, Cloud City, CC 78901",
      bio: "Cloud engineer with expertise in AWS, Azure, and GCP.",
      skills: ["AWS", "Azure", "Docker", "Kubernetes"],
    },
    {
      id: 8,
      name: "Sophie Brown",
      role: "Digital Marketer",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      rating: 4,
      email: "sophie.brown@example.com",
      phone: "(555) 890-1234",
      address: "505 Marketing Blvd, Ad City, MC 89012",
      bio: "Digital marketer with experience in SEO, SEM, and content strategy.",
      skills: ["SEO", "Google Ads", "Content Marketing", "Email Campaigns"],
    },
    {
      id: 9,
      name: "Daniel Harris",
      role: "Product Manager",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      rating: 5,
      email: "daniel.harris@example.com",
      phone: "(555) 901-2345",
      address: "606 Product St, Product City, PC 90123",
      bio: "Experienced product manager focused on driving innovation.",
      skills: ["Product Strategy", "Agile", "Market Research", "Roadmapping"],
    },
    {
      id: 10,
      name: "Olivia Martin",
      role: "Full Stack Developer",
      image: "https://randomuser.me/api/portraits/women/7.jpg",
      rating: 4,
      email: "olivia.martin@example.com",
      phone: "(555) 012-3456",
      address: "707 Stack Ave, Code City, SC 01234",
      bio: "Full stack developer with a focus on both frontend and backend technologies.",
      skills: ["React", "Node.js", "MongoDB", "JavaScript"],
    },
  ]);

  const handleView = (profile) => {
    setSelectedProfile(profile);
    setIsModalOpen(true);
  };

  const handleDelete = (profileId) => {
    setProfiles(profiles.filter((profile) => profile.id !== profileId));
  };

  const handleFlag = (profileId) => {
    setProfiles(
      profiles.map((profile) =>
        profile.id === profileId
          ? { ...profile, flagged: !profile.flagged }
          : profile
      )
    );
  };

  return (
    <div className="min-h-screen md:p-8 p-4">
      <div class="flex flex-row align-items-center md:justify-between py-6 flex-wrap gap-3 justify-end">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 5a7 7 0 100 14 7 7 0 000-14zm0 0l6 6"
            />
          </svg>
        </div>

        <div>
          <button
            onClick={() => setViewState(true)}
            className={`p-3 rounded-l-md transition duration-300 ease-in-out transform ${
              viewState
                ? "bg-purple-600 text-white shadow-lg"
                : "bg-gray-300 scale-100"
            }`}
          >
            <img src="./assets/images/grid-icon.svg" alt="grid" />
          </button>
          <button
            onClick={() => setViewState(false)}
            className={`p-3 transition rounded-r-md duration-300 ease-in-out transform ${
              !viewState
                ? "bg-purple-600 text-white shadow-lg"
                : "bg-gray-300 scale-100"
            }`}
          >
            <img src="./assets/images/list-icon.svg" alt="list" />
          </button>
        </div>
      </div>
      <div
        className={`${
          viewState
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-opacity duration-500 ease-in-out"
            : "w-full space-y-4 border-b-2 transition-opacity duration-500 ease-in-out"
        }`}
      >
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            isGrid={viewState}
            profile={profile}
            onView={handleView}
            onDelete={() => handleDelete(profile.id)}
            onFlag={() => handleFlag(profile.id)}
          />
        ))}
      </div>

      <ProfileModal
        profile={selectedProfile}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProfile(null);
        }}
      />
    </div>
  );
};

export default ProfileDashboard;
