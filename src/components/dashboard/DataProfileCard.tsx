import { Card, Checkbox, Progress } from "demandscience-ui";
import React from "react";

export interface DataProfileCardProps {
  title: string;
  options: IDataProfileOption[];
  icon: React.ReactNode;
}

export default function DataProfileCard({ title, options, icon }: DataProfileCardProps) {
  return (
    <Card size="md" elevation="none">
      <Card.Header className="pb-0 border-b-0">
        {icon}
        <Card.Title>{title}</Card.Title>
      </Card.Header>
      <Card.Body className="space-y-1">
        {options.map(({ checked, title, progress, count }) => (
          <div key={title} className="flex w-full p-1 transition hover:bg-gray-100">
            <Checkbox onChange={() => {}} checked={checked} theme="secondary" />
            <div className="w-full ml-4 text-sm">
              <div className="flex justify-between">
                <span>{title}</span>
                <span>{count}</span>
              </div>
              <Progress value={progress} size="sm" theme="secondary" className="mt-1" />
            </div>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}
