import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CourseModule } from "../types/course";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle, BookOpen, ArrowRight, Lock, BadgeCheck, Clock, TvMinimalPlayIcon } from "lucide-react";
import { Badge } from "./ui/badge";

interface ModuleCardProps {
  module: CourseModule;
  isCompleted: boolean;
  isActive: boolean;
  index: number;
}

export function ModuleCard({ module, isCompleted, isActive, index }: ModuleCardProps) {

  const tags = module.tags;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card
        className={cn(
          "w-full rounded-xl overflow-hidden hover:shadow-md transition-all duration-200", 
          {
            "border-primary/50 shadow-sm shadow-primary/10": isActive,
            "border-success/30 bg-success/5": isCompleted,
            "border-slate-200 hover:border-slate-300": !isCompleted && !isActive
          }
        )}
      >
        {/* Module Status Banner */}
        <div className={cn(
          "py-1 px-4 text-xs font-medium bg-slate-100 text-slate-400 flex items-center justify-between",
          {
            "bg-primary/50 text-white": isActive && !isCompleted,
            "bg-success/50 text-white": isCompleted
          }
        )}>
          <span className="flex items-center gap-1">
            {isCompleted ? (
              <>
                <BadgeCheck className="w-3.5 h-3.5" />
                <span>Completed</span>
              </>
            ) : isActive ? (
              <>
                <Clock className="w-3.5 h-3.5" />
                <span>In Progress</span>
              </>
            ) : (
              <>
                <Clock className="w-3.5 h-3.5" />
                <span>Not Started</span>
              </>
            )}
          </span>
          <span>Module {module.id}</span>
        </div>

        <CardContent className="p-5">
          <div className="flex items-start gap-4">
            <div className={cn("p-3 rounded-full flex-shrink-0", {
              "bg-success/20 text-success": isCompleted,
              "bg-primary/20 text-primary": isActive && !isCompleted,
              "bg-slate-100 text-slate-500": !isCompleted && !isActive
            })}>
              {isCompleted ? (
                <CheckCircle className="w-6 h-6" />
              ) : isActive ? (
                <BookOpen className="w-6 h-6" />
              ) : (
                <TvMinimalPlayIcon className="w-6 h-6" />
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1 text-slate-800">{module.title}</h3>
              <p className="text-sm text-slate-500 mb-3">{module.description}</p>
              
              {/* Module Highlights - you can customize these based on module content */}
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <Badge 
                    key={i} 
                    variant="default"
                    className={cn(
                      isCompleted ? "bg-success/80 text-success-foreground hover:bg-success/90" : 
                      isActive ? "bg-primary/20 text-primary-foreground hover:bg-primary/30" : 
                      "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    )}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className={cn("px-5 py-3 border-t border-slate-500/10", {
          "border-primary/50 shadow-sm shadow-primary/10": isActive,
          "border-success/30 bg-success/5": isCompleted,
          "border-slate-200 hover:border-slate-300": !isCompleted && !isActive
        })}>
          <Link to={module.path} className="w-full">
            <Button
              className={cn(
                "w-full rounded-full group", 
                {
                  "bg-success/90 hover:bg-success/80": isCompleted,
                  "bg-primary hover:bg-primary/90": !isCompleted
                }
              )}
            >
              <span>View</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
