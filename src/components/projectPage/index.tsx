import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import { PageLayout } from "@site/src/components/pageLayout";
import { db } from "@site/data/db";
import axios from "axios";
import { ProjectHeader } from "./header";
import { ProjectContent } from "./content";
import { PaneAbout, PaneContributor, ProjectPane } from "./pane";
import { ProjectTag } from "@site/data/project";

const BookSVG = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <rect width="256" height="256" fill="none"></rect>
    <path
      d="M48,216a23.9,23.9,0,0,1,24-24H208V32H72A23.9,23.9,0,0,0,48,56Z"
      fill="none"
      stroke="var(--ifm-color-emphasis-600)"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></path>
    <polyline
      points="48 216 48 224 192 224"
      fill="none"
      stroke="var(--ifm-color-emphasis-600)"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></polyline>
  </svg>
);

const StarSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="var(--ifm-color-emphasis-600)"
    viewBox="0 0 256 256"
  >
    <rect width="256" height="256" fill="none"></rect>
    <path
      d="M132.4,190.7l50.4,32c6.5,4.1,14.5-2,12.6-9.5l-14.6-57.4a8.7,8.7,0,0,1,2.9-8.8l45.2-37.7c5.9-4.9,2.9-14.8-4.8-15.3l-59-3.8a8.3,8.3,0,0,1-7.3-5.4l-22-55.4a8.3,8.3,0,0,0-15.6,0l-22,55.4a8.3,8.3,0,0,1-7.3,5.4L31.9,94c-7.7.5-10.7,10.4-4.8,15.3L72.3,147a8.7,8.7,0,0,1,2.9,8.8L61.7,209c-2.3,9,7.3,16.3,15,11.4l46.9-29.7A8.2,8.2,0,0,1,132.4,190.7Z"
      fill="none"
      stroke="var(--ifm-color-emphasis-600)"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></path>
  </svg>
);

const EyeSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="var(--ifm-color-emphasis-600)"
    viewBox="0 0 256 256"
  >
    <rect width="256" height="256" fill="none"></rect>
    <path
      d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z"
      fill="none"
      stroke="var(--ifm-color-emphasis-600)"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></path>
    <circle
      cx="128"
      cy="128"
      r="40"
      fill="none"
      stroke="var(--ifm-color-emphasis-600)"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></circle>
  </svg>
);

export function ProjectPage({ name }: { name: string }): JSX.Element {
  const project = db.projects.find((e) => e.name === name);

  const projectOwner = project.repositoryUrl.split("/")[3];
  const projectName = project.repositoryUrl.split("/")[4];

  const [readMe, setReadMe] = useState("");
  const [abouts, setAbouts] = useState<PaneAbout[]>([]);
  const [contributors, setContributors] = useState<PaneContributor[]>([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(project.page.readmeUrl);
      setReadMe(res.data);
    })();

    (async () => {
      const res = await axios.get(
        `https://api.github.com/repos/${projectOwner}/${projectName}/contributors`
      );
      setContributors(
        res.data.map((e: any) => ({
          name: e.login,
          image: e.avatar_url,
          link: e.html_url,
        }))
      );
    })();

    (async () => {
      const res = await axios.get(
        `https://api.github.com/repos/${projectOwner}/${projectName}`
      );

      setAbouts([
        {
          icon: BookSVG,
          link: "https://choosealicense.com/licenses/mit/",
          text: res.data.license.name,
        },
        {
          icon: StarSvg,
          link: `${project.repositoryUrl}/stargazers`,
          text: `${res.data.stargazers_count} stars`,
        },
        {
          icon: EyeSvg,
          link: `${project.repositoryUrl}/watchers`,
          text: `${res.data.watchers_count} watching`,
        },
      ]);
    })();
  }, []);

  return (
    <Layout
      title={`quack-quack`}
      description="Quack Quack - Duckie Open Source"
    >
      <main>
        <PageLayout
          width="1200px"
          gap="28px"
          marginTop="32px"
          gutter="8px"
          panWidth="300px"
        >
          <PageLayout.Header>
            <ProjectHeader
              description={project.description}
              iconImage={project.iconImage}
              title={project.name}
              targets={project.targets}
            />
          </PageLayout.Header>
          <PageLayout.Content>
            <ProjectContent readme={readMe} />
          </PageLayout.Content>
          <PageLayout.Pane>
            <ProjectPane
              contributors={contributors}
              abouts={abouts}
              tags={project.tags}
              targets={project.targets}
              repositoryUrl={project.repositoryUrl}
              docsUrl={project.docsUrl}
            />
          </PageLayout.Pane>
        </PageLayout>
      </main>
    </Layout>
  );
}
