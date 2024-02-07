import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tag } from "@/components";

export const ProjectSummary = ({ project }) => {
  return (
    // <Card className="min-w-[300px]">
    //   <CardHeader>
    //     <div className="flex flex-row flex-wrap mb-4">

    //       <Tag variant={"default"}> Mobile Application</Tag>
    //       <Tag variant={"success"}> In Progress</Tag>
    //       <Tag variant={"primary"}> React Native</Tag>

    //     </div>

    //     <CardTitle className="text-md">Ushift mobile app project</CardTitle>
    //     <CardDescription className="line-clamp-4">
    //       The "Website Redesign" project involves revamping DesignCo's existing
    //       website to enhance its visual appeal, user experience, and overall
    //       functionality. The goal is to create a modern and responsive design
    //       that reflects the company's brand identity and improves user
    //       engagement.
    //     </CardDescription>
    //   </CardHeader>
    //   <CardContent>
    //     <div className="flex flex-row justify-between text-[13px] mb-2">
    //       <p className="text-gray-500 font-light">
    //         Milestones <span className="text-black font-semibold">1/4</span>
    //       </p>
    //       <p className="text-gray-500 font-light">
    //         Completion <span className="text-black font-semibold">25%</span>
    //       </p>
    //     </div>
    //     <Progress value={25} color="bg-green-300" className="h-[10px]" />

    //     <Separator className="my-4" />
    //     <div className="flex flex-row justify-between text-[13px] mb-2">
    //       <div>
    //       <p className="text-gray-500 font-light">
    //         Project Budget
    //       </p>
    //       <span className="text-black font-semibold">$500</span>
    //       </div>

    //       <div className="text-end">
    //       <p className="text-gray-500 font-light">
    //         Total Paid
    //       </p>
    //       <span className="text-black self-end font-semibold">$250</span>
    //       </div>

    //     </div>

    //     <Separator className="my-4" />

    //     <div className="flex flex-row justify-between text-[13px] mb-2">
    //       <div>
    //       <p className="text-gray-500 font-light">
    //         Start date
    //       </p>
    //       <span className="text-black font-semibold">24/01/2024</span>
    //       </div>

    //       <div className="text-end">
    //       <p className="text-gray-500 font-light">
    //         Total Paid
    //       </p>
    //       <span className="text-black self-end font-semibold">$250</span>
    //       </div>

    //     </div>

    //   </CardContent>

    // </Card>

    <Card className="min-w-[300px]">
      <CardHeader>
        <div className="flex flex-row flex-wrap mb-4">
          {project.tags.map((tag, index) => (
            <Tag key={index} variant={tag.variant}>
              {tag.text}
            </Tag>
          ))}
        </div>

        <CardTitle className="text-md">{project.title}</CardTitle>
        <CardDescription className="line-clamp-4">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row justify-between text-[13px] mb-2">
          <p className="text-gray-500 font-light">
            Milestones{" "}
            <span className="text-black font-semibold">
              {project.milestones.current}/{project.milestones.total}
            </span>
          </p>
          <p className="text-gray-500 font-light">
            Completion{" "}
            <span className="text-black font-semibold">
              {project.completion}%
            </span>
          </p>
        </div>
        <Progress
          value={project.completion}
          color={project.progressColor}
          className="h-[10px]"
        />

        <Separator className="my-4" />

        <div className="flex flex-row justify-between text-[13px] mb-2">
          <div>
            <p className="text-gray-500 font-light">Project Budget</p>
            <span className="text-black font-semibold">
              {project.budget.total}
            </span>
          </div>

          <div className="text-end">
            <p className="text-gray-500 font-light">Total Paid</p>
            <span className="text-black self-end font-semibold">
              {project.budget.paid}
            </span>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="flex flex-row justify-between text-[13px] mb-2">
          <div>
            <p className="text-gray-500 font-light">Start date</p>
            <span className="text-black font-semibold">
              {project.startDate}
            </span>
          </div>

          <div className="text-end">
            <p className="text-gray-500 font-light">Next Deadline</p>
            <span className="text-black self-end font-semibold">
              {project.nextDeadline}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
