export interface CourseModule {
  id: number;
  title: string;
  path: string;
  description: string;
  tags: string[];
}

export interface CourseProgress {
  currentModule: number;
  completedModules: number[];
}

export interface ModuleContent {
  id: number;
  title: string;
  sections: {
    title: string;
    content: string[];
    keyPoints?: string[];
  }[];
}
