import { DeviceMobileIcon, LinkIcon, MailIcon, PhoneIcon } from "@heroicons/react/outline";
import { Icon } from "components/util/Icon";
import { Avatar, Checkbox, Dropdown } from "demandscience-ui";
import React from "react";

interface Props {
  result: SearchResult;
  selected: boolean;
}

export default function SearchListItem({ result, selected }: Props) {
  const { name, title, socials, info } = result;
  return (
    <li
      className={`grid md:grid-cols-3 md:px-4 py-4 gap-4 text-sm transition 
      ${selected ? "hover:bg-primary-100" : "hover:bg-gray-50"}`}
    >
      <div className="flex space-x-4">
        <Checkbox checked={selected} onChange={() => {}} className="self-start" />
        <Avatar alt={name} size="xs" />
        <div className="text-gray-500">
          <h3 className="font-medium">{name}</h3>
          <p className="font-light ">{title}</p>
          <div className="flex mt-1 space-x-2 text-gray-400">
            {socials["url"] && <LinkIcon className="w-4 h-4" />}
            {socials["twitter"] && <Icon.Twitter className="w-4 h-4" />}
            {socials["linkedin"] && <Icon.Linkedin className="w-5 h-5" />}
          </div>
        </div>
      </div>
      <div className="flex ml-8 space-x-4 text-gray-600">
        <div className="flex-shrink-0 p-1 bg-gray-100 rounded-full h-max">
          <MailIcon className="w-6 h-6" strokeWidth={1.5} />
        </div>
        <div className="flex-shrink-0 p-1 bg-gray-100 rounded-full h-max">
          <PhoneIcon className="w-6 h-6" strokeWidth={1.5} />
        </div>
        <div className="flex-shrink-0 p-1 bg-gray-100 rounded-full h-max">
          <DeviceMobileIcon className="w-6 h-6" strokeWidth={1.5} />
        </div>
      </div>
      <div className="ml-8 text-gray-500">{info}</div>
    </li>
  );
}