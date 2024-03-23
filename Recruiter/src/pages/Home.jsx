import React, { useEffect, useState } from "react";

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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { useSelector } from "react-redux";

import Navbar from "../components/ui/Navbar";
import CandidateDetails from "../components/candidateDetails";

const Home = () => {
  useEffect(() => {
    getAllCVS();
    console.log("All CVs:", allCvs);
  }, []);
  const [selectedCV, setSelectedCV] = useState(null);

  const [allCvs, setAllCvs] = useState([]);
  const getAllCVS = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/cv/getAllCVs`);
      const data = await response.json();
      console.log(data);
      setAllCvs(data.cvs);
    } catch (error) {
      console.error("Error fetching CVs:", error);
    }
  };

  const apiUrl = "http://localhost:4000";
  const { user } = useSelector((state) => state.profile);

  return (
    <div className="w-screen min-h-screen bg-white">
      <div className="w-screenflex flex-col items-center justify-center h-screen">
        <div className="w-[100%]  h-[100%] bg-white text-black">
          <nav className="mx-auto">
          <Navbar />
          </nav>
          {user ? (
            <>
              <div className="flex flex-col  items-center justify-center overflow-scroll min-h-[100%]  w-[100%]">
                <div className="z-10 mx-auto flex flex items-center justify-between w-full h-full overflow-scroll">
                
                 <div className=" bg-white w-[30%] border-r-2 flex h-screen items-center justify-center">
                 <div  className="flex flex-col max-h-[800px] overflow-auto p-6 rounded-xl bg-white">
                    {allCvs.length > 0 ? (
                      <div className="flex flex-col gap-[20px]">
                        {allCvs.map((cv, index) => (
                          <div onClick={()=>{
                            setSelectedCV(cv);
                          }} key={index} className="w-full overflow-x-auto">
                           <div className="flex flex-row w-[350px]  text-black hover:bg-black  border-2 border-dotted  rounded-xl p-6 hover:border-yellow-400 hover:text-yellow-400 items-center justify-between gap-2">
                                  <h3 className="text-xl">{cv.name}</h3>
                                  <p>{cv.role}</p>
                                </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p>No CVs found</p>
                    )}
                  </div>
                 
                 </div>
                 <div className="min-w-[70%] bg-white overflow-scroll   h-[100%]">
                    {
                      selectedCV ? (
                        <CandidateDetails cv={selectedCV} />
                      ) : (
                        <div className="flex flex-col items-center justify-center">
                          <h1 className="text-3xl">Welcome to CV App</h1>
                          <p className="text-lg">Please select a candidate to view details</p>
                        </div>
                      )
                    }
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col h-[100%] items-center justify-center w-[100%]">
              <div className="z-10 mx-auto flex flex-col h-[100%] items-center justify-around w-[100%] gap-2">
                <div className="flex flex-col items-center justify-center gap-2">
                  <h1 className="text-3xl">Welcome to CV App</h1>
                  <p className="text-lg">Please login to continue</p>
                  <Button
                    onClick={() => {
                      window.location.href = "/login";
                    }}
                  >
                    Login
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
