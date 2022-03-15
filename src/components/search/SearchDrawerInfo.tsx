import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DeviceMobileIcon,
  MailIcon,
  PhoneIcon,
  XIcon,
} from "@heroicons/react/outline";
import { Icon } from "components/utils/Icon";
import { Avatar, Badge, Checkbox, Drawer, Modal } from "demandscience-ui";
import React from "react";

interface Props {
  result: ISearchResult;
}

export default function SearchDrawerInfo({ result }: Props) {
  return (
    <>
      <Drawer.Section className="border-b pb-6 mt-0 flex items-center text-gray-600">
        <Checkbox checked onChange={(value) => {}} size="lg" />
        <p className="ml-2">Selected</p>
        <div className="mx-auto flex space-x-4 ">
          <ChevronLeftIcon className="w-6 h-6 text-gray-400" />
          <ChevronRightIcon className="w-6 h-6 " />
        </div>
        <XIcon className="w-6 h-6 ml-auto" />
      </Drawer.Section>
      <Drawer.Section className="border-b py-4">
        <div className="flex items-center">
          <Avatar alt={result.name} size="md" />
          <div className="text-sm ml-3">
            <h2 className="font-medium">{result.name}</h2>
            <h3 className="text-gray-500">{result.title}</h3>
          </div>
          <Badge type="green" className="align-center ml-auto">
            Revealed
          </Badge>
        </div>
        <div className="flex items-center space-x-2 mt-4 text-gray-400">
          {result.socials["twitter"] && <Icon.Twitter className="w-5 h-5" />}
          {result.socials["linkedin"] && <Icon.Linkedin className="w-5 h-5" />}
        </div>
      </Drawer.Section>

      <Drawer.Section className="border-b py-4">
        <div className="space-y-4 text-gray-600">
          {result.socials.email && (
            <div className="flex items-center">
              <div className="flex-shrink-0 p-1 bg-gray-100 rounded-full h-max w-max mr-2">
                <MailIcon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <a className="text-blue-500 hover:underline" href={`mailto:${result.socials.email}`}>
                {result.socials.email}
              </a>
            </div>
          )}

          {result.socials.cell && (
            <div className="flex items-center">
              <div className="flex-shrink-0 p-1 bg-gray-100 rounded-full h-max w-max mr-2">
                <PhoneIcon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <a className=" hover:underline" href={`tel:${result.socials.cell}`}>
                {result.socials.cell}
              </a>
            </div>
          )}
          {result.socials.text && (
            <div className="flex items-center">
              <div className="flex-shrink-0 p-1 bg-gray-100 rounded-full h-max w-max mr-2">
                <DeviceMobileIcon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <a className="hover:underline" href={`sms:${result.socials.text}`}>
                {result.socials.text}
              </a>
            </div>
          )}
        </div>
      </Drawer.Section>

      
    </>
  );
}
