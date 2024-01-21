"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function SchoolEditPage({ params }: { params: { id: string }}) {
  const param = params.id;

  const router = useRouter();

  const [school, setSchool] = useState<{
    name: string;
    description: string;
    link: string;
  } | null>(null);

  useEffect(() => {
    const fetchUniversity = async () => {
      try {
        const res = await fetch(`/api/admin/school/${param}`);

        if (res.ok) {
          const data = await res.json();
          setSchool(data['message']);
        } else {
          console.error('Error fetching school data');
        }
      } catch (error) {
        console.error('Error fetching school data:', error);
      }
    };

    fetchUniversity();
  }, [param]);

  const handleSave = async () => {
    try {
      await fetch(`/api/admin/school/${param}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: school?.name,
          description: school?.description,
          link: school?.link,
        }),
      });

      router.push('/admin/dashboard/school');
    } catch (error) {
      console.error('Error saving school data:', error);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setSchool((prevUniversity) => ({
      ...prevUniversity,
      [field]: value || '', // Set a default value of an empty string if the value is undefined
    }) as {
      name: string;
      description: string;
      link: string;
    } | null);
  };

  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
      {/* <img src="https://i.imgur.com/8Km9tLL.png" className="w-[200px] h-[200px] rounded-full mt-10" /> */}

      {school && (
        <div className="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
          <div className="mt-2 w-full">
            <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">Edit Profile</h4>
          </div>

          <div className="grid grid-cols-2 gap-4 px-2 w-full">
            {/* Display editable user information */}
            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <Label className="text-sm text-gray-600">Name</Label>
              <Input
                className="text-base font-medium text-navy-700 dark:text-white"
                value={school.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <Label className="text-sm text-gray-600">Description</Label>
              <Input
                className="text-base font-medium text-navy-700 dark:text-white"
                value={school.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
              />
            </div>

            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <Label className="text-sm text-gray-600">Link</Label>
              <Input
                className="text-base font-medium text-navy-700 dark:text-white"
                value={school.link}
                onChange={(e) => handleInputChange('link', e.target.value)}
              />
            </div>

          </div>

          <Button className="mt-10 bg-[#fbd716] text-black hover:text-white" onClick={handleSave}>
            Save
          </Button>
        </div>
      )}
    </div>
  );
}
