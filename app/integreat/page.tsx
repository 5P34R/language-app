"use client"

import IntegreatNav from "@/components/IntegreatNav";
import IntegreatSideBar from "@/components/IntegreatSideBar";
import IntegreatBottomBar from "@/components/IntrgreatBottomBar";
import { useEffect, useState } from "react";

export default function IntegreatPage() {
    const [universities, setUniversities] = useState<{
      name: string;
      description: string;
      link: string;
    }[] | null>(null);
  
    const [schools, setSchools] = useState<{
      name: string;
      description: string;
      link: string;
    }[] | null>(null);
  
    useEffect(() => {
      const fetchUniversities = async () => {
        try {
          const res = await fetch(`/api/admin/university`);
  
          if (res.ok) {
            const data = await res.json();
            console.log(data)
            setUniversities(data);
          } else {
            console.error('Error fetching University data');
          }
        } catch (error) {
          console.error('Error fetching university data:', error);
        }
      };
  
      const fetchSchools = async () => {
        try {
          const res = await fetch(`/api/admin/school`);
  
          if (res.ok) {
            const data = await res.json();
            setSchools(data);
          } else {
            console.error('Error fetching school data');
          }
        } catch (error) {
          console.error('Error fetching school data:', error);
        }
      };
  
      fetchSchools();
      fetchUniversities();
    }, []);
  
    useEffect(() => {
      // Log the state values whenever they change
      console.log('Universities:', universities);
      console.log('Schools:', schools);
    }, [universities, schools]);
  
    return (
        <>
            <IntegreatNav />
        <div className="w-full">
            <div className="w-[80%] flex lg:flex-row md:flex-row flex-col mx-auto">
                <IntegreatSideBar />
                <div className="container justify-center items-center text-center">
                    <div className="h-14 text-xl py-2 text-left">
                         Passau
                    </div>
                    <h1 className="font-medium mt-10 text-4xl">University/ Schools</h1>
                    <div className="w-2/3 mx-auto">
                        <h2 className="font-medium text-2xl text-left mt-10">University</h2>
                        <hr className="my-0.5 h-0.5 border-t-0 bg-yellow-500 opacity-500 dark:opacity-50" />
                        {universities && universities.map((university) => (
                        <div key={university.name} className="ml-10 text-left border-b border-yellow-500">
                            <p>{university.name}</p>
                        </div>
                        ))}

                        <h2 className="font-medium text-2xl text-left mt-10">Schools</h2>
              <hr className="my-0.5 h-0.5 border-t-0 bg-yellow-500 opacity-500 dark:opacity-50" />

              {schools && schools.map((school) => (
                <div key={school.name} className="ml-10 text-left border-b border-yellow-500">
                  <p>{school.name}</p>
                </div>
              ))}
                        
                    </div>
                </div>
                {/* <!-- bottom bar create pdf etc..icons --> */}
                <IntegreatBottomBar />
            </div>
        </div>
        </>
    )
}