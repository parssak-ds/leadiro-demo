import {
  LocationMarkerIcon,
  OfficeBuildingIcon,
  ShoppingBagIcon,
  StarIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import { Card } from "demandscience-ui";
import React from "react";
import DataProfileCard, { DataProfileCardProps } from "./DataProfileCard";

type Props = {};

const dataProfileOptions: DataProfileCardProps[] = [
  {
    title: "Management Levels",
    icon: <StarIcon className="w-8 h-8 mr-4 text-secondary-500" />,
    options: [
      {
        title: "Manager",
        checked: true,
        progress: 40,
        count: 100,
      },
      {
        title: "Director",
        checked: false,
        progress: 60,
        count: 200,
      },
      {
        title: "Executive",
        checked: true,
        progress: 80,
        count: 300,
      },
    ],
  },
  {
    title: "Revenue",
    icon: <UsersIcon className="w-8 h-8 mr-4 text-secondary-500" />,
    options: [
      {
        title: "$10-50M",
        checked: false,
        progress: 40,
        count: 100,
      },
      {
        title: "$50-100M",
        checked: false,
        progress: 60,
        count: 200,
      },
      {
        title: "$1-10M",
        checked: false,
        progress: 80,
        count: 300,
      },
      {
        title: "$100-500M",
        checked: false,
        progress: 100,
        count: 400,
      },
    ],
  },
  {
    title: "Location",
    icon: <LocationMarkerIcon className="w-8 h-8 mr-4 text-secondary-500" />,
    options: [
      {
        title: "New York",
        checked: false,
        progress: 5,
        count: 100,
      },
      {
        title: "San Diego",
        checked: false,
        progress: 10,
        count: 200,
      },
      {
        title: "Atlanta",
        checked: false,
        progress: 15,
        count: 300,
      },
      {
        title: "Washington",
        checked: false,
        progress: 20,

        count: 400,
      },
    ],
  },
  {
    title: "Industry",
    icon: <ShoppingBagIcon className="w-8 h-8 mr-4 text-secondary-500" />,
    options: [
      {
        title: "Technology",
        checked: false,
        progress: 5,
        count: 100,
      },
      {
        title: "Healthcare",
        checked: false,
        progress: 10,
        count: 200,
      },
      {
        title: "Retail",
        checked: false,
        progress: 15,
        count: 300,
      },
      {
        title: "Entertainment",
        checked: false,
        progress: 20,
        count: 400,
      },
    ],
  },
];

export default function DataProfileView({}: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card size="md" elevation="none">
        <Card.Body>
          <ul className="space-y-8">
            <li className="flex">
              <UsersIcon className="w-6 h-6 mr-4 text-secondary-500" />
              <div>
                <h3>Contacts</h3>
                <h5 className="mt-1 text-xl text-black">584,893</h5>
              </div>
            </li>
            <li className="flex">
              <OfficeBuildingIcon className="w-6 h-6 mr-4 text-secondary-500" />
              <div>
                <h3>Companies</h3>
                <h5 className="mt-1 text-xl text-black">848</h5>
              </div>
            </li>
            <li className="flex">
              <UserIcon className="w-6 h-6 mr-4 text-secondary-500" />
              <div>
                <h3>Contacts per Company</h3>
                <h5 className="mt-1 text-xl text-black">4,572</h5>
              </div>
            </li>
          </ul>
        </Card.Body>
      </Card>
      {dataProfileOptions.map(({ title, options, icon }) => (
        <DataProfileCard key={title} title={title} options={options} icon={icon} />
      ))}
    </div>
  );
}
