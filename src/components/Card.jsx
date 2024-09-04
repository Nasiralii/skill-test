import React from "react";

const Card = ({ student, isGrid, onClick }) => {
  return (
    <div
      className={`shadow border container mx-auto flex md:flex-row flex-col justify-between transform transition-transform duration-500 ease-in-out cursor-pointer ${
        isGrid && "hover:scale-105"
      }`}
    >
      <div
        onClick={onClick}
        className={`w-full p-4 ${
          isGrid
            ? "bg-white cursor-pointer"
            : "flex flex-row justify-between items-center"
        }`}
      >
        <div className="text-black flex flex-col gap-2">
          <h2 className={"text-xl font-bold"}>
            <div className="flex flex-row gap-3 items-center">
              <img
                alt="name"
                src="./assets/images/name-icon.svg"
                width={20}
                height={20}
              />
              <span>{student.name}</span>
            </div>
          </h2>
          <div className="flex flex-row items-center gap-3">
            <img
              alt="name"
              src="./assets/images/email-icon.svg"
              width={20}
              height={20}
            />
            {student.email}
          </div>

          <div className="flex flex-row items-center gap-3">
            <img
              alt="name"
              src="./assets/images/phone-icon.svg"
              width={20}
              height={20}
            />
            {student.phone}
          </div>
        </div>
      </div>

      <div className="flex px-[3px] pr-[6px] py-2 md:flex-col space-x-1 items-baseline md:justify-around justify-evenly rounded-tl-3xl bg-gray-800">
        <div className="p-1 rounded-md transition transform hover:scale-110  hover:shadow-lg cursor-pointer">
          <img
            src="./assets/images/edit-icon.svg"
            width={20}
            height={20}
            alt="edit"
          />
        </div>

        <div className="p-1 rounded-md transition transform hover:scale-110  hover:shadow-lg cursor-pointer">
          <img
            src="./assets/images/delete-icon.svg"
            width={25}
            height={25}
            alt="delete"
          />
        </div>

        <div className="p-1 rounded-md transition transform hover:scale-110  hover:shadow-lg cursor-pointer">
          <img
            src="./assets/images/flag-icon.svg"
            width={25}
            height={25}
            alt="flag"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
