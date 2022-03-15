import React from "react";
import {
  CashIcon,
  LocationMarkerIcon,
  OfficeBuildingIcon,
  ShoppingBagIcon,
  StarIcon,
  UserIcon,
  UsersIcon,
  BriefcaseIcon,
  ClipboardIcon,
} from "@heroicons/react/outline";
import { Accordion, Badge, Button } from "demandscience-ui";

type Props = {};

interface ISearchFilterOption {
  label: string;
  description: string;
  icon: JSX.Element;
  options?: string[];
}

const filterOptions: Record<string, ISearchFilterOption[]> = {
  company: [
    {
      label: "Company Name",
      description: "Enter specific companies or URLs",
      icon: <OfficeBuildingIcon className="w-6 h-6" />,
      options: ["Intuit", "Shopify", "Amazon"],
    },
    {
      label: "Location",
      description: "Enter countries, states, or cities",
      icon: <LocationMarkerIcon className="w-6 h-6" />,
    },
    {
      label: "Industry",
      description: "Enter industries",
      icon: <ShoppingBagIcon className="w-6 h-6" />,
    },
    {
      label: "Headcount",
      description: "Enter headcount range",
      icon: <UsersIcon className="w-6 h-6" />,
    },
    {
      label: "Revenue",
      description: "Enter revenue range",
      icon: <CashIcon className="w-6 h-6" />,
    },
  ],
  people: [
    {
      // contact name, enter contact name, usericon
      label: "Contact Name",
      description: "Enter specific contact names",
      icon: <UserIcon className="w-6 h-6" />,
    },
    {
      // contact loaction, enter location of contacts, location icon
      label: "Location",
      description: "Enter countries, states, or cities",
      icon: <LocationMarkerIcon className="w-6 h-6" />,
    },
    {
      // maangement level, enter management level, staricon
      label: "Management Level",
      description: "Enter management levels",
      icon: <StarIcon className="w-6 h-6" />,
    },
    {
      // job title, enter job title, briefcase icon
      label: "Job Title",
      description: "Enter job titles",
      icon: <BriefcaseIcon className="w-6 h-6" />,
    },
    {
      // department & function, enter department and function, clipboard icon
      label: "Department & Function",
      description: "Enter departments and functions",
      icon: <ClipboardIcon className="w-6 h-6" />,
    },
  ],
};

export default function SearchFilterBar({}: Props) {
  return (
    <div className="w-full mb-8 lg:max-w-xs lg:mb-0 lg:mr-8">
      <h2 className="pb-4 border-b  h2">Filters</h2>
      <div className="space-y-4 text-sm">
        {Object.entries(filterOptions).map(([key, options]) => (
          <Accordion borderless defaultOpen key={key}>
            <Accordion.Summary className="px-0 capitalize">{key}</Accordion.Summary>
            <Accordion.Content className="px-0 pt-0">
              {options.map(({ icon, label, description, options }) => (
                <div className="flex py-4 border-b last:border-b-0" key={label}>
                  <div className="mr-4 flex-shrink-0">{icon}</div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center">
                      <div className="font-medium">{label}</div>
                      {options?.length > 0 && (
                        <Button theme="error" borderless size="xs" className="mr-1">
                          Clear
                        </Button>
                      )}
                    </div>
                    <div className="text-gray-400 font-light mt-1">
                      {options?.length > 0 ? (
                        <div className="flex space-x-2">
                          {options.map((option) => (
                            <Badge key={option} type="gray" onDelete={() => {}}>
                              {option}
                            </Badge>
                          ))}
                        </div>
                      ) : (
                        description
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </Accordion.Content>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
