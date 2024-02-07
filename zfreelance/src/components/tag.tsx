import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ReactNode } from "react"



const tagVariants = cva(
    `w-3 h-3  rounded-full mr-1`,
    {
        variants: {
            variant: {
                primary: "bg-blue-400",
                success: "bg-green-400",
                danger: "bg-red-500",
                default: "bg-black",
            },
            
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

export const Tag = 
    ({  variant, className, children, ...props }) =>  (
       
            <Badge
            variant={"outline"}
            className=" py-1 px-2 rounded-xl font-light px-2 mr-1 mb-1"
          >
           <div className={cn(tagVariants({ className, variant }))}
                ></div> <span>{children}</span>
          </Badge>
        
    )

