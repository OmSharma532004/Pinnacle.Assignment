import React from 'react';

const CandidateDetails = ({ cv }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">{cv.name}</h3>
      <p className="text-lg">{cv.role}</p>
      <p className="text-gray-500">{cv.description}</p>
      <div className="mt-4">
        <h4 className="text-lg font-bold">Skills</h4>
        <ul className="list-disc ml-6">
          {cv.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-bold">Experience</h4>
        {cv.experience.map((exp, index) => (
          <div key={index} className="mt-2">
            <p className="font-bold">{exp.title}</p>
            <p>{exp.company}</p>
            <p>{exp.startDate} - {exp.endDate}</p>
            <ul className="list-disc ml-6">
              {exp.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-bold">Education</h4>
        {cv.education.map((edu, index) => (
          <div key={index} className="mt-2">
            <p className="font-bold">{edu.degree}</p>
            <p>{edu.institution}</p>
            <p>{edu.startDate} - {edu.endDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidateDetails;
