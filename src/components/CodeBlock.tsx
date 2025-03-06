
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  code: string;
  language?: string;
  fileName?: string;
  highlight?: number[];
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'typescript',
  fileName,
  highlight = [],
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Simple syntax highlighting
  const highlightCode = (code: string) => {
    // Replace with more sophisticated highlighting if needed
    code = code
      // .replace(/\/\/(.*)/g, '<span class="hljs-comment">$&</span>')
      // .replace(/\/\*([\s\S]*?)\*\//g, '<span class="hljs-comment">$&</span>')
      // .replace(/(import|export|const|let|var|function|return|if|else|class|interface|type|extends|implements)/g, '<span class="hljs-keyword">$1</span>')
      .replace(/('.*?'|".*?")/g, '<span class="hljs-string">$1</span>')
      .replace(/\b([A-Z][a-zA-Z]*)\b/g, '<span class="hljs-function">$1</span>');
    
    return code;
  };

  const codeLines = code.trim().split('\n');
  
  return (
    <div 
      className={cn(
        "w-full bg-secondary/50 rounded-lg border border-border overflow-hidden transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className
      )}
    >
      {fileName && (
        <div className="flex items-center px-4 py-2 bg-muted border-b border-border">
          <div className="flex space-x-2 mr-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="text-sm font-mono text-muted-foreground">{fileName}</div>
        </div>
      )}
      <pre className="p-4 overflow-auto max-h-[50vh]">
        <code>
          {codeLines.map((line, index) => (
            <div 
              key={index} 
              className={cn(
                "px-2 py-0.5 -mx-2 rounded", 
                highlight.includes(index + 1) ? "bg-primary/10" : ""
              )}
              dangerouslySetInnerHTML={{ __html: highlightCode(line) }}
            />
          ))}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
