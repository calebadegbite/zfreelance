import { Banner, ProjectSummary } from "@/components";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "@/lib/data";

const ActiveProjectList = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
      {projects.map((project, index) => (
        <ProjectSummary key={index} project={project} />
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Banner />

      <div className="">
        <Tabs defaultValue="active" className=" mt-8">
          <TabsList>
            <TabsTrigger value="active">Active Projects</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          <TabsContent value="active" className="pt-4">
            <ActiveProjectList />
          </TabsContent>
          <TabsContent value="completed">No completed projects</TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
