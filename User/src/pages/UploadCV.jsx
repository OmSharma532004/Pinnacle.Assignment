import React, { useState } from 'react';

const UploadCVForm = () => {
  // State variables to store form data
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState('');
  const [experienceFields, setExperienceFields] = useState([{ title: '', company: '', startDate: '', endDate: '', responsibilities: [] }]);
  const [educationFields, setEducationFields] = useState([{ degree: '', institution: '', startDate: '', endDate: '' }]);
const apiUrl = 'http://localhost:4000'; // Backend API URL
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call backend API to upload CV (using Fetch API)
      const response = await fetch(`${apiUrl}/api/cv/upload`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          role,
          description,
          skills: skills.split(','), // Convert skills to an array if comma-separated
          experience: experienceFields,
          education: educationFields,
        }),
      });
      const data = await response.json();

      console.log(data); // Log the response
    } catch (error) {
      console.error('Error uploading CV:', error);
    }
  };

  // Function to add a new experience field
  const addExperienceField = () => {
    setExperienceFields([...experienceFields, { title: '', company: '', startDate: '', endDate: '', responsibilities: [] }]);
  };

  // Function to add a new education field
  const addEducationField = () => {
    setEducationFields([...educationFields, { degree: '', institution: '', startDate: '', endDate: '' }]);
  };

  return (
    <div className=" bg-zinc-900 w-[100%] h-[100%] mx-auto">
      <h1 className="text-3xl text-center text-white font-bold mt-4">Upload CV</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" />

        <label className="block text-gray-700 text-sm font-bold mb-2">Role:</label>
        <input type="text" value={role} onChange={(e) => setRole(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" />

        <label className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" />

        <label className="block text-gray-700 text-sm font-bold mb-2">Skills:</label>
        <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" />

        <label className="block text-gray-700 text-sm font-bold mb-2">Experience:</label>
        {experienceFields.map((field, index) => (
          <div key={index} className="mb-4">
            <input
              type="text"
              value={field.title}
              onChange={(e) => {
                const newFields = [...experienceFields];
                newFields[index].title = e.target.value;
                setExperienceFields(newFields);
              }}
              placeholder="Title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
            />
            <input
              type="text"
              value={field.company}
              onChange={(e) => {
                const newFields = [...experienceFields];
                newFields[index].company = e.target.value;
                setExperienceFields(newFields);
              }}
              placeholder="Company"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
            />
            <input
              type="date"
              value={field.startDate}
              onChange={(e) => {
                const newFields = [...experienceFields];
                newFields[index].startDate = e.target.value;
                setExperienceFields(newFields);
              }}
              placeholder="Start Date"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
            />
            <input
              type="date"
              value={field.endDate}
              onChange={(e) => {
                const newFields = [...experienceFields];
                newFields[index].endDate = e.target.value;
                setExperienceFields(newFields);
              }}
              placeholder="End Date"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
            />
           <input
           />
          </div>
        ))}
        <button type="button" onClick={addExperienceField} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4">Add Experience Field</button>

        <label className="block text-gray-700 text-sm font-bold mt-4 mb-2">Education:</label>
        {educationFields.map((field, index) => (
          <div key={index} className="mb-4">
            <input
              type="text"
              value={field.degree}
              onChange={(e) => {
                const newFields = [...educationFields];
                newFields[index].degree = e.target.value;
                setEducationFields(newFields);
              }}
              placeholder="Degree"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
            />
            <input
              type="text"
              value={field.institution}
              onChange={(e) => {
                const newFields = [...educationFields];
                newFields[index].institution = e.target.value;
                setEducationFields(newFields);
              }}
              placeholder="Institution"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
            />
           <input
              type="date"
              value={field.startDate}
              onChange={(e) => {
                const newFields = [...educationFields];
                newFields[index].startDate = e.target.value;
                setEducationFields(newFields);
              }}
              placeholder="Start Date"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
            />
            <input
              type="date"
              value={field.endDate}
              onChange={(e) => {
                const newFields = [...educationFields];
                newFields[index].endDate = e.target.value;
                setEducationFields(newFields);
              }}
              placeholder="End Date"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
            />
          </div>
        ))}
        <button type="button" onClick={addEducationField} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4">Add Education Field</button>

        <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">Upload CV</button>
      </form>
    </div>
  );
};

export default UploadCVForm;
