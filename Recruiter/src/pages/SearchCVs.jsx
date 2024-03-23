import React, { useState } from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import CandidateDetails from "@/components/candidateDetails";
import Navbar from '../components/ui/Navbar';

const SearchCVs = ({ onSearch }) => {
  const [field, setField] = useState('name');
  const [keywords, setKeywords] = useState('');
  const [error, setError] = useState(null);
  const [cvs, setCvs] = useState([]);

  const apiUrl = "http://localhost:4000";

  const handleSearch = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/cv/search?field=${field}&keywords=${keywords}`);
      const data = await response.json();
      console.log(data);
      setCvs(data.cvs);
      console.log(cvs);
    } catch (error) {
      console.error("Error fetching CVs:", error);
    }
  };

  return (
  <div>
<nav className="mx-auto">
            <Navbar />
          </nav>
      <div className="flex w-full justify-center bg-gray-500 items-center h-screen">
      
        <div className="p-4 bg-gray-100 rounded-md shadow-md max-w-md w-full">
        
          <div className="flex items-center mb-4">
            <label htmlFor="field" className="mr-2">Search by:</label>
            <select
              id="field"
              value={field}
              onChange={(e) => setField(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1"
            >
              <option value="name">Name</option>
              <option value="role">Role</option>
              <option value="skills">Skills</option>
            </select>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              placeholder={`Enter ${field} keywords`}
              className="flex-grow border border-gray-300 rounded-md px-2 py-1 mr-2"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Search
            </button>
          </div>
          <div>
            {cvs.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 mt-4">
                {cvs.map((cv, index) => (
                  <div key={index} className="bg-white rounded-md shadow-md p-4">
                    <h3 className="text-xl font-semibold">{cv.name}</h3>
                    <p className="text-gray-500">{cv.role}</p>
                    <Drawer className="mt-2">
                      <DrawerTrigger>
                        <Button variant="outline">View Details</Button>
                      </DrawerTrigger>
                      <DrawerContent>
                        <DrawerHeader>
                          <DrawerTitle>Candidate Details</DrawerTitle>
                          <DrawerDescription>
                            <div className="max-h-[400px] overflow-y-auto">
                              <CandidateDetails cv={cv} />
                            </div>
                          </DrawerDescription>
                        </DrawerHeader>
                        <DrawerFooter>
                          <DrawerClose>
                            <Button variant="outline">Close</Button>
                          </DrawerClose>
                        </DrawerFooter>
                      </DrawerContent>
                    </Drawer>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-4">No CVs found</p>
            )}
          </div>
          {error && <div className="text-red-500 mt-2">{error}</div>}
        </div>
      </div>
  </div>
  );
};

export default SearchCVs;
