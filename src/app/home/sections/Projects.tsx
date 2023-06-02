"use client";

import { Container, Heading } from "@/components";
import { useI18n } from "@/hooks";
import { useState } from "react";

interface Topic {
  number: number;
  title: string;
  content: string;
  onClick: () => void;
  active?: boolean;
}

const Topic = ({ number, title, content, active, onClick }: Topic) => {
  const bg = active
    ? "bg-neutral-900 text-neutral-100"
    : "bg-neutral-200 text-neutral-900";

  return (
    <div onClick={onClick} className="flex gap-4">
      <div
        className={`leading-loose font-semibold aspect-square w-8 h-8 rounded-full text-center ${bg}`}
      >
        {number}
      </div>

      <div className="flex flex-col text-xl font-semibold gap-4">
        {title}
        {active && <p className="text-sm font-normal text-left">{content}</p>}
      </div>
    </div>
  );
};

const ProjectList = () => {
  const i18n = useI18n();
  const [active, setActive] = useState(0);

  return (
    <div className="flex gap-12 h-[512px]">
      <div className="h-full w-2/5 bg-neutral-900 rounded-full text-neutral-100 text-center">
        {active + 1}
      </div>
      <div className="flex-1">
        <div className="flex flex-col justify-between h-full py-16">
          {i18n.myProjects.projects.map((project, index) => (
            <Topic
              key={index}
              number={index + 1}
              title={project.title}
              content={project.content}
              active={index === active}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default () => {
  const i18n = useI18n();

  return (
    <Container id="projects" gap="sm">
      <Heading type="h2" side="center">
        {i18n.myProjects.title}
      </Heading>
      <div className="text-center mb-8">
        {i18n.myProjects.content}
        <br />
        {i18n.myProjects.callToAction}
      </div>
      <ProjectList />
    </Container>
  );
};
