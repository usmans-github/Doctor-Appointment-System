import React from "react";

const TopDoctors = () => {
  const doctors = [
    {
      name: "Dr. John Doe",
      specialization: "Cardiologist",
      experience: "10 years",
      image: "data:image/jpeg;base64,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",
    },
    {
      name: "Dr. Jane Smith",
      specialization: "Dermatologist",
      experience: "8 years",
      image: "",    
    },
    {
      name: "Dr. Mike Johnson",
      specialization: "Orthopedic Surgeon",
      experience: "12 years",
      image: "",
    },
    {
      name: "Dr. Sarah Lee",
      specialization: "Pediatrician",
      experience: "7 years",
      image: "",
    },
    {
      name: "Dr. David Kim",
      specialization: "Gynecologist",
      experience: "9 years",
      image: "",
    },
    {
      name: "Dr. Emily Chen",
      specialization: "Ophthalmologist",
      experience: "6 years",
      image: "",
    },
    {
      name: "Dr. Robert Brown",
      specialization: "Neurologist",
      experience: "11 years",
      image: "",
    },
    {
      name: "Dr. Lisa Wang",
      specialization: "Psychiatrist",
      experience: "5 years",
      image: "",
    },
  ];
  return (
    <section className="pb-8 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-2 text-white">Top Doctors to Book</h2>
        <p className="text-white">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 justify-items-center">
        {doctors.map((doctor, index) => (
          <div key={index} className="bg-white rounded-lg p-4 shadow-sm border w-60">
            <div className="relative w-full h-48 mb-4">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-green-500 text-sm">Available</span>
            </div>
            <h3 className="font-bold mb-1">{doctor.name}</h3>
            <p className="text-white text-sm">{doctor.specialty}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          type="button"
          className="text-indigo-500 bg-white hover:bg-indigo-50 focus:ring-4 focus:ring-blue-300 
        font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          more
        </button>
      </div>
    </section>
  );
};

export default TopDoctors;
