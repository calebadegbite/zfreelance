import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  AlignVerticalSpaceAround,
  Bell,
  BellIcon,
  HelpCircle,
  MailQuestion,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <div className=" h-16 bg-zinc-100 py-4 px-8 flex flex-row justify-between">
      <section>
        <p className="font-semibold text-xl">Hi Caleb</p>
      </section>

      <section className="flex flex-row items-center">
        <Button variant="ghost" size="icon" className="mr-2">
          <HelpCircle />
        </Button>
        <Button variant="ghost" size="icon" className="mr-2">
          <BellIcon />
        </Button>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </section>
    </div>
  );
};
