import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";

interface ModuleContentProps {
  title: string;
  sections: {
    title: string;
    content: string[];
    keyPoints?: string[];
  }[];
}

export function ModuleContent({ sections }: ModuleContentProps) {
  return (
    <Card className="w-full">
      <CardContent className="gap-6">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
            <div className="space-y-4">
              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-default-600">
                  {paragraph}
                </p>
              ))}
            </div>
            {section.keyPoints && (
              <>
                <Separator className="my-4" />
                <div className="bg-default-100 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Key Points:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    {section.keyPoints.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-default-600">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </CardContent>
    </Card>
  );
}
