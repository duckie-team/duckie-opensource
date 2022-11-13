export type Tag =
  | "Design System"
  | "Code Style"
  | "UX Writing"
  | "Plugin"
  | "Web"
  | "Library";

export type Target = {
  name: string;
  icon: React.ReactNode;
};

export type Project = {
  name: string;
  iconImage: string;
  backgroundImage: string;
  description: string;
  tags: Tag[];
  targets: Target[];
  link: string;
  showFeaturedProjects: boolean;
  repositoryUrl: string;
  docsUrl?: string;
  page: {
    api: true;
    readmeUrl: string;
  };
};
