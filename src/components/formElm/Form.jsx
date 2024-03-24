import React, { useState } from "react";

function Form() {
  const [ageGroup, setAgeGroup] = useState("");
  const handleSelect = (e) => {
    setAgeGroup(e.target.value);
  };

  return (
    <div className=" mx-auto max-w-md md:max-w-full">
      <p className="text-base font-medium mb-2">
        Kiek Jums metu?
      </p>
      <select
        className="w-full rounded shadow border focus:outline-none focus:ring-1 focus:ring-blue-500 py-2 px-3"
        value={ageGroup}
        onChange={handleSelect}
      >
        <option value="">-</option>
        <option value="< 18 years">Neturiu 18</option>
        <option value="18-24 years">18-24 </option>
        <option value="25-29 years">25-29 </option>
        <option value="> 30 years">30 ir vyresnis</option>
      </select>
      <div className="pointer-events-none  inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
    </div>
  );
}

export default Form;

// rfce funkcijos sukurimui
