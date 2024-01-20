import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";



export type Users = {
    id: string | null,
    username: string | null,
    fullname: string | null,
    email: string | null ,
    isAdmin: boolean | null,
  }


  interface EditProfileProps {
    trigger: boolean;
    user: Users;
    onClose: () => void;
  }


  export default function EditProfile({ trigger, user, onClose }: EditProfileProps) {    
    const [name, setName] = useState<string | null>(user.fullname || '');
    const [username, setUsername] = useState<string | null>(user.username || '');
  
    const handleSaveChanges = () => {
      // Handle saving changes here
      // You can access the updated name and username values from the state
      // Add your logic to save the changes and then close the sheet
      // For example, you can make an API call to update the user profile
      // Once the update is successful, call onClose to close the sheet
  
      // Simulating a successful save and closing the sheet
      console.log('Saving changes:', { name, username });
      onClose();
    };
    return ( 
            <Sheet defaultOpen={trigger} >
                <SheetTrigger>
                <Button>Edit User</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                      Make changes to your profile here. Click save when you're done.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input id="name" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Username
                      </Label>
                      <Input id="username"  className="col-span-3" />
                    </div>
                  </div>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button type="submit">Save changes</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
    )
}