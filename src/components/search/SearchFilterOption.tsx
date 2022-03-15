import React from "react";

interface Props {
  icon: React.ReactElement;
  label: string;
  description: string;
}

export default function SearchFilterOption({ icon, label, description }: Props) {
  return (
    <div className="flex">
      <div className="mr-4 flex-shrink-0">{icon}</div>
      <div className="flex-grow">
        <div className="font-medium">{label}</div>
        <div className="text-gray-500">{description}</div>
      </div>
    </div>
  );
}
