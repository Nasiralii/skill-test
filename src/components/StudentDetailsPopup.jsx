import React from "react";

const StudentDetailPopup = ({ student, onClose }) => {
  if (!student) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 md:m-0 m-2 rounded-lg shadow-lg relative max-w-md w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          <img
            src="./assets/images/close-icon.svg"
            width={30}
            height={30}
            alt="close"
          />
        </button>
        <h2 className="text-2xl font-bold mb-4">{student.name}</h2>
        <p>
          <strong>Username:</strong> {student.username}
        </p>
        <p>
          <strong>Email:</strong> {student.email}
        </p>
        <p>
          <strong>Phone:</strong> {student.phone}
        </p>
        <p>
          <strong>Website:</strong> {student.website}
        </p>
        <p>
          <strong>Company:</strong> {student.company.name}
        </p>
        <p>
          <strong>Address:</strong> {student.address.street},{" "}
          {student.address.suite}, {student.address.city},{" "}
          {student.address.zipcode}
        </p>
        <p>
          <strong>Geo Location:</strong> Lat: {student.address.geo.lat}, Lng:{" "}
          {student.address.geo.lng}
        </p>
      </div>
    </div>
  );
};

export default StudentDetailPopup;