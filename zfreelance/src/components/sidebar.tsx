import {
  DollarSign,
  FolderKanban,
  History,
  KanbanIcon,
  KanbanSquare,
  LayoutDashboard,
  MailCheck,
  Users,
} from "lucide-react";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <div className="md:w-72 bg-blue-900 h-screen flex-1 fixed border-r border-zinc-200 hidden md:flex">
      <div className="pl-8 mt-20">
        <MenuItem text={"Dashboard"}>
          <LayoutDashboard />
        </MenuItem>

        <MenuItem text={"Projects"}>
          <KanbanSquare />
        </MenuItem>

        <MenuItem text={"Team"}>
          <Users />
        </MenuItem>

        <MenuItem text={"Messages"}>
          <MailCheck />
        </MenuItem>

        <MenuItem text={"Project Files"}>
          <FolderKanban />
        </MenuItem>

        <div className="mt-12 mb-6">
          <span className="text-background text-xs">PAYMENTS</span>
        </div>

        <MenuItem text={"Payroll"}>
          <DollarSign />
        </MenuItem>

        <MenuItem text={"Payment History"}>
          <History />
        </MenuItem>
      </div>
    </div>
  );
};

export const MenuItem = ({ text, children }) => {
  return (
    <Link href="#" className="flex flex-row  align-center text-background mb-4">
      {children}
      <p className="ml-3 font-semibold text-lg ">{text}</p>
    </Link>
  );
};
