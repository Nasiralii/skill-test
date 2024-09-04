import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card";
import StudentDetailPopup from "../../components/StudentDetailsPopup";

const StudentView = () => {
  const [viewState, setViewState] = useState(true);
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setStudents(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const handleCardClick = (student) => {
    setSelectedStudent(student);
  };

  const closePopup = () => {
    setSelectedStudent(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4 flex justify-end w-fit ml-auto rounded-md overflow-hidden">
        <button
          onClick={() => setViewState(true)}
          className={`p-3 transition duration-300 ease-in-out transform ${
            viewState
              ? "bg-gray-500 text-white shadow-lg"
              : "bg-gray-200 scale-100"
          }`}
        >
          <img src="./assets/images/grid-icon.svg" alt="grid" />
        </button>
        <button
          onClick={() => setViewState(false)}
          className={`p-3 transition duration-300 ease-in-out transform ${
            !viewState
              ? "bg-gray-500 text-white shadow-lg"
              : "bg-gray-200 scale-100"
          }`}
        >
          <img src="./assets/images/list-icon.svg" alt="list" />
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      ) : (
        <div
          className={`${
            viewState
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-opacity duration-500 ease-in-out"
              : "w-full space-y-2 border-b-2 transition-opacity duration-500 ease-in-out"
          }`}
        >
          {students.map((student, index) => (
            <Card
              key={student.id}
              student={student}
              isGrid={viewState}
              onClick={() => handleCardClick(student)}
            />
          ))}
        </div>
      )}
      {selectedStudent && (
        <StudentDetailPopup student={selectedStudent} onClose={closePopup} />
      )}
    </div>
  );
};

export default StudentView;
