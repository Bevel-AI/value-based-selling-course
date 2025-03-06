import { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PageTransition } from "../components/page-transition";
import { ModuleNavigation } from "../components/module-navigation";
import { useStore } from "../lib/store/useStore";
import { useShallow } from 'zustand/react/shallow';
import { useScroll } from "@/hooks/useScroll";
import Module1 from "./modules/module-1";
import Module2 from "./modules/module-2";
import Module3 from "./modules/module-3";
import Module4 from "./modules/module-4";
import Module5 from "./modules/module-5";
import Module6 from "./modules/module-6";

// Define module names for better user feedback
const MODULE_NAMES: Record<number, string> = {
  1: "Introduction to Value-Based Selling",
  2: "Understanding Customer Value",
  3: "Quantifying and Communicating Value",
  4: "The Value-Based Sales Process",
  5: "Practical Application",
  6: "Implementation and Next Steps"
};

export default function ModulePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const moduleId = parseInt(id || "1");
  const { setCurrentModule, completeModule } = useStore(useShallow((state) => ({
    setCurrentModule: state.setCurrentModule,
    completeModule: state.completeModule,
  })));
  const containerRef = useRef<HTMLDivElement | null>(null);
  useScroll({ containerRef });
  
  // Update current module when navigating to a module page
  useEffect(() => {
    setCurrentModule(moduleId);
    document.title = `Course: ${MODULE_NAMES[moduleId] || `Module ${moduleId}`}`;
  }, [moduleId, setCurrentModule]);

  const handleComplete = () => {
    completeModule(moduleId);
    navigate('/course');
  };

  return (
    <PageTransition>
      <div 
        className="w-full h-full min-w-screen min-h-screen relative overscroll-none"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1469&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-background/90 backdrop-blur-xl overscroll-none" />
        <div className="h-full w-full grid grid-rows-[1fr_auto] overscroll-y-none overscroll-x-none overflow-hidden">
          <div className="h-screen w-screen flex flex-col bg-background/60 backdrop-blur-md overflow-hidden">
            <div className="h-full w-full overflow-hidden">
              {(() => {
                switch (moduleId) {
                  case 1:
                    return <Module1 containerRef={containerRef} />;
                  case 2:
                    return <Module2 containerRef={containerRef} />;
                  case 3:
                    return <Module3 containerRef={containerRef} />;
                  case 4:
                    return <Module4 containerRef={containerRef} />;
                  case 5:
                    return <Module5 containerRef={containerRef} />;
                  case 6:
                    return <Module6 containerRef={containerRef} />;
                  default:
                    return <div>Module not found</div>;
                }
              })()}
            </div>
          </div>
          <div className="w-full">
            <ModuleNavigation
              onComplete={handleComplete}
            />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
