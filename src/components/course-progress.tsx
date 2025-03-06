import { motion } from "framer-motion";
import { courseModules } from "../data/course-modules";
import { Progress } from "./ui/progress";
import { Check, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface CourseProgressProps {
  currentModule: number;
  completedModules: number[];
}

export function CourseProgress({ currentModule, completedModules }: CourseProgressProps) {
  const progress = (completedModules.length / courseModules.length) * 100;
  const moduleStatuses = courseModules.map(module => ({
    ...module,
    status: completedModules.includes(module.id) 
      ? "completed" 
      : module.id === currentModule 
        ? "current" 
        : "upcoming"
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full"
    >
      <div className="flex justify-between mb-2 items-center">
        <span className="text-sm text-slate-600 font-medium">
          Module {currentModule} of {courseModules.length}
        </span>
        <span className="text-sm font-medium flex items-center gap-1 bg-indigo-50 px-2 py-0.5 rounded text-indigo-700">
          <span className="inline-block w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
          {Math.round(progress)}% Complete
        </span>
      </div>
      
      <Progress
        aria-label="Course progress"
        value={progress}
        className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100 [&>div]:bg-gradient-to-r [&>div]:from-indigo-500 [&>div]:to-violet-500"
      />
      
      {/* Module Progress Steps */}
      <div className="mt-8">
        <div className="relative">
          {/* Connector Line */}
          <div className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-slate-200 z-0"></div>
          
          {/* Module Steps */}
          <div className="relative z-10 space-y-4">
            {moduleStatuses.map((module) => (
              <div key={module.id} className="flex items-start gap-3">
                <div className={cn(
                  "rounded-full w-7 h-7 flex-shrink-0 flex items-center justify-center p-1 z-10",
                  {
                    "bg-success text-white": module.status === "completed",
                    "bg-amber-400 text-white": module.status === "current",
                    "bg-slate-200 text-slate-500": module.status === "upcoming"
                  }
                )}>
                  {module.status === "completed" ? (
                    <Check className="w-4 h-4" />
                  ) : module.status === "current" ? (
                    <Play className="w-4 h-4" fill="currentColor" />
                  ) : (
                    <span className="text-xs font-medium">{module.id}</span>
                  )}
                </div>
                
                <div className={cn("flex-1 pb-1", {
                  "opacity-50": module.status === "upcoming"
                })}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className={cn("text-sm font-medium", {
                        "text-success": module.status === "completed",
                        "text-amber-700": module.status === "current",
                        "text-slate-600": module.status === "upcoming",
                      })}>
                        {module.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1">{module.description}</p>
                    </div>
                    
                    <div className={cn("text-xs font-medium px-2 py-0.5 rounded", {
                      "bg-success/10 text-success": module.status === "completed",
                      "bg-amber-100 text-amber-700": module.status === "current",
                      "bg-slate-100 text-slate-500": module.status === "upcoming",
                    })}>
                      {module.status === "completed" 
                        ? "Completed" 
                        : module.status === "current" 
                          ? "In Progress" 
                          : "Upcoming"}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
