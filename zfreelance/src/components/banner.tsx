import Image from "next/image";
import { Card, CardContent, CardTitle } from "./ui/card";
import heroSvg from "../../public/character 16.svg";
import { Button } from "./ui/button";
import { PieChartComponent } from "./charts/pie-charts";
import { Tag } from "@/components";
import { Separator } from "./ui/separator";

export const Banner = () => {
  return (
    <div className=" grid grid-flow-row-dense grid-cols-9 grid-rows-1 gap-2">
      <div className="relative md:h-64 rounded-[26px] col-span-5 bg-gradient-to-r from-sky-900 via-indigo-800 to-blue-900 px-6">
        <div className="max-w-300 pt-6">
          <p className="text-background font-semibold tracking-tight text-3xl  max-w-[300px]">
            Start a new project
          </p>
          <p className="text-background font-light tracking-tight leading-snug text-lg  max-w-[350px] mt-2">
            Whether it's a web development gig, a design project, or anything in
            between, we've got you covered
          </p>

          <Button variant={"secondary"} className="mt-8">
            Create Project
          </Button>
        </div>

        <Image
          width={170}
          height={170}
          style={{ position: "absolute", right: 30, bottom: 10 }}
          src={heroSvg}
        />
      </div>

      <div className="col-span-4 ">
        <Card className="md:h-64 ">
          <CardTitle className="pt-4 px-4">
            <p className="font-bold text-xl">Task Summary</p>
          </CardTitle>
          <CardContent className="flex flex-row justify-between items-center">
            <div className="flex-1">
              <div className="flex flex-row justify-between">
                <Tag variant={"default"}>Pending</Tag>
                <p className="font-semibold tracking-tighter">10%</p>
              </div>

              <div className="flex flex-row justify-between">
                <Tag variant={"primary"}>In progress</Tag>
                <p className="font-semibold tracking-tighter">35%</p>
              </div>

              <div className="flex flex-row justify-between">
                <Tag variant={"primary"}>Awaiting Review</Tag>
                <p className="font-semibold tracking-tighter">10%</p>
              </div>

              <div className="flex flex-row justify-between">
                <Tag variant={"danger"}>On Hold</Tag>
                <p className="font-semibold tracking-tighter">5%</p>
              </div>

              <div className="flex flex-row justify-between">
                <Tag variant={"success"}>Completed</Tag>
                <p className="font-semibold tracking-tighter">20%</p>
              </div>
            </div>
          
            <div className="">
              <PieChartComponent />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
