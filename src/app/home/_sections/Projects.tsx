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
    <div tabIndex={0} onClick={onClick} className="flex gap-4">
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
  const projects = useI18n().myProjects.projects;
  const [active, setActive] = useState(0);

  return (
    <div className="flex gap-32 h-[600px]">
      <img alt="preceptor" src="/preceptor.svg" className="h-full rounded-full" />
      <div className="flex flex-col justify-between self-center h-4/5 desktop:h-3/5">
        {projects.map(({ title, content }, index) => (
          <Topic
            key={index}
            number={index + 1}
            title={title}
            content={content}
            active={index === active}
            onClick={() => setActive(index)}
          />
        ))}
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
      <div className="text-center">
        {i18n.myProjects.content}
        <br />
        {i18n.myProjects.callToAction}
      </div>
      <ProjectList />
    </Container>
  );
};
