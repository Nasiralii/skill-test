import React from "react";

const Card = ({ student, isGrid, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`shadow border flex flex-row justify-between transform transition-transform duration-500 ease-in-out cursor-pointer ${
        isGrid ? "hover:scale-105" : ""
      }`}
    >
      <div
        className={`${
          isGrid
            ? "bg-white p-4 cursor-pointer"
            : "p-4 flex flex-row justify-between items-center"
        }`}
      >
        <div className="text-gray-600">
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

      <div className="flex px-1 py-2 flex-col space-x-1 items-baseline justify-around rounded-tl-3xl bg-gray-500">
        <div className="p-1 rounded-md transition transform hover:scale-110 hover:bg-gray-100 hover:shadow-lg cursor-pointer">
          <img
            src="./assets/images/edit-icon.svg"
            width={20}
            height={20}
            alt="edit"
          />
        </div>

        <div className="p-1 rounded-md transition transform hover:scale-110 hover:bg-gray-100 hover:shadow-lg cursor-pointer">
          <img
            src="./assets/images/delete-icon.svg"
            width={20}
            height={20}
            alt="delete"
          />
        </div>

        <div className="p-1 rounded-md transition transform hover:scale-110 hover:bg-gray-100 hover:shadow-lg cursor-pointer">
          <img
            src="./assets/images/flag-icon.svg"
            width={20}
            height={20}
            alt="flag"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
