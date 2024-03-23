import React, { useEffect, useState } from "react";
import CreatedQuizes from "../components/createdQuizes";
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
    <div className="w-screen min-h-screen bg-black">
      <div className="w-screen overflow-scroll flex flex-col items-center justify-center h-screen">
        <div className="w-[100%] h-[100%] bg-black text-white">
          <nav className="mx-auto">
            <Navbar />
          </nav>
          {user ? (
            <>
              <div className="flex flex-col  items-center justify-center overflow-scroll min-h-[100%]  w-[100%]">
                <div className="z-10 mx-auto flex flex-col items-center justify-around w-full h-full overflow-scroll gap-2">
                  <h1 className="text-3xl">You Can Go Through The CVs</h1>
                  <div className="flex flex-col gap-[50px]items-center justify-center ">
                    {allCvs.length > 0 ? (
                      <div className="flex flex-col items-center justify-center gap-2">
                        {allCvs.map((cv, index) => (
                          <div key={index} className="w-full overflow-x-auto">
                            <Drawer className="w-full">
                              <DrawerTrigger>
                                <div className="flex flex-row w-[400px] bg-white text-black rounded-xl p-4 items-center justify-between gap-2">
                                  <h3 className="text-xl">{cv.name}</h3>
                                  <p>{cv.role}</p>
                                </div>
                              </DrawerTrigger>
                              <DrawerContent>
                                <DrawerHeader>
                                  <DrawerTitle>Candidate Details</DrawerTitle>
                                </DrawerHeader>
                                <DrawerDescription>
                                  <div className="max-h-[600px] overflow-y-auto">
                                    <CandidateDetails cv={cv} />
                                  </div>
                                </DrawerDescription>
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
                      <p>No CVs found</p>
                    )}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col h-[100%] items-center justify-center w-[100%]">
              <div className="z-10 mx-auto flex flex-col h-[100%] items-center justify-around w-[100%] gap-2">
                <div className="flex flex-col items-center justify-center gap-2">
                  <h1 className="text-3xl">Welcome to Quiz App</h1>
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
