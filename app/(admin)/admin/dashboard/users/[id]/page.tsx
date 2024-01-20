"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function UserEditPage({ params }: { params: { id: string }}) {
  const param = params.id;

  const [user, setUser] = useState<{
    password: string;
    confirmPassword: string;
    isAdmin: string;
    email: string;
    fullname: string;
    username: string;
  } | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`/api/admin/users/${param}`);

        if (res.ok) {
          const data = await res.json();
          setUser(data['message']);
        } else {
          console.error('Error fetching user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, [param]);

  const handleSave = async () => {

    if(user?.password !== user?.confirmPassword){
        console.log("error")
        return;

    }
    await fetch(`/api/admin/users/${param}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: user?.username,
            email: user?.email,
            password: user?.password,
            fullname: user?.fullname,
            isAdmin: user?.isAdmin,
        }),
        }).then(res => res.json())
  };

  const handleInputChange = (field: string, value: string) => {
    setUser((prevUser) => ({
      ...prevUser,
      [field]: value || '', // Set a default value of an empty string if the value is undefined
    }) as {
      password: string;
      confirmPassword: string;
      isAdmin: string;
      email: string;
      fullname: string;
      username: string;
    } | null);
  };

  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
      {/* <img src="https://i.imgur.com/8Km9tLL.png" className="w-[200px] h-[200px] rounded-full mt-10" /> */}

      {user && (
        <div className="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
          <div className="mt-2 w-full">
            <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">Edit Profile</h4>
          </div>

          <div className="grid grid-cols-2 gap-4 px-2 w-full">
            {/* Display editable user information */}
            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <Label className="text-sm text-gray-600">Username</Label>
              <Input
                className="text-base font-medium text-navy-700 dark:text-white"
                value={user.username}
                onChange={(e) => handleInputChange('username', e.target.value)}
              />
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <Label className="text-sm text-gray-600">Full Name</Label>
              <Input
                className="text-base font-medium text-navy-700 dark:text-white"
                value={user.fullname}
                onChange={(e) => handleInputChange('fullname', e.target.value)}
              />
            </div>

            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <Label className="text-sm text-gray-600">Email</Label>
              <Input
                className="text-base font-medium text-navy-700 dark:text-white"
                value={user.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <Label className="text-sm text-gray-600">isAdmin</Label>
              <Input
                className="text-base font-medium text-navy-700 dark:text-white"
                value={user.isAdmin}
                onChange={(e) => handleInputChange('isAdmin', e.target.value)}
              />
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <Label className="text-sm text-gray-600">Password</Label>
              <Input
                type="password"
                className="text-base font-medium text-navy-700 dark:text-white"
                value={user.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
              />
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <Label className="text-sm text-gray-600">Confirm password</Label>
              <Input
                type="password"
                className="text-base font-medium text-navy-700 dark:text-white"
                value={user.confirmPassword} // You may need to handle confirm password logic
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
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
