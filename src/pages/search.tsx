import {
  UsersIcon,
  OfficeBuildingIcon,
  UserIcon,
  StarIcon,
  LocationMarkerIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";
import DataProfileCard, { DataProfileCardProps } from "components/dashboard/DataProfileCard";
import SearchListItem from "components/search/SearchListItem";
import SearchTopBar from "components/search/SearchTopBar";
import { Accordion, Card, Tabs } from "demandscience-ui";
import React from "react";

type Props = {};

const baseSearchResults: ISearchResult[] = [
  {
    id: "1",
    name: "Jenny Wilson",
    title: "Lord of All Things Technical",
    socials: {
      twitter: "https://twitter.com/jennywilson",
      linkedin: "https://www.linkedin.com/in/jennywilson/",
      email: "jenny@wilson.com",
      cell: "123-456-7890",
      text: "123-456-7890",
    },
    info: (
      <>
        <h4 className="font-medium">Founding Years Learning Solutions Pvt. Ltd.</h4>
        <p className="text-gray-500">
          Bangalore, Karnataka, India <br />
          Education and Training
          <br />
          500-999 employees
        </p>
      </>
    ),
  },
  {
    id: "2",
    name: "Marcus Rudy",
    title: "Marketplace Director",
    socials: {
      twitter: "https://twitter.com/marcusrudy",
      linkedin: "https://www.linkedin.com/in/marcusrudy/",
      email: "marcus@rudy.com",
      cell: "123-456-7890",
      text: "123-456-7890",
    },
    info: (
      <>
        <h4 className="font-medium">HomeDirect, Inc.</h4>
        <p className="text-gray-500">
          Downers Grove, IL, United States <br />
          Transportation and Logistics <br />
          250-499 employees
        </p>
      </>
    ),
  },
  {
    id: "3",
    name: "Cody Fisher",
    title: "Wiz Kid",
    socials: {
      twitter: "https://twitter.com/codyfisher",
      linkedin: "https://www.linkedin.com/in/codyfisher/",
      email: "email@email.com",
      cell: "123-456-7890",
      text: "123-456-7890",
    },
    info: (
      <>
        <h4 className="font-medium">Concord Management Services</h4>
        <p className="text-gray-500">
          Maitland, FL, United States <br />
          Real Estate <br />
          100-499 employees
        </p>
      </>
    ),
  },
  {
    id: "4",
    name: "Jacob Jones",
    title: "Wiz Kid",
    socials: {
      twitter: "https://twitter.com/jacobjones",
      linkedin: "https://www.linkedin.com/in/jacobjones/",
      email: "email@email.com",
      cell: "123-456-7890",
      text: "123-456-7890",
    },
    info: (
      <>
        <h4 className="font-medium">XTRA Lease</h4>
        <p className="text-gray-500">
          Maitland, FL, United States <br />
          Real Estate <br />
          100-499 employees
        </p>
      </>
    ),
  },
];

const generateNResults = (n: number) => {
  const results = [];
  for (let i = 0; i < n; i++) {
    const newResult = { ...baseSearchResults[i % baseSearchResults.length] };
    newResult.id = `${i}`;
    results.push(newResult);
  }

  return results;
};

const dataProfileOptions: DataProfileCardProps[] = [
  {
    title: "Management Levels",
    icon: <StarIcon className="w-8 h-8 mr-4 text-indigo-600" />,
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
    icon: <UsersIcon className="w-8 h-8 mr-4 text-indigo-600" />,
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
    icon: <LocationMarkerIcon className="w-8 h-8 mr-4 text-indigo-600" />,
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
    icon: <ShoppingBagIcon className="w-8 h-8 mr-4 text-indigo-600" />,
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

const searchResults = generateNResults(20);
export default function SearchPage({}: Props) {
  return (
    <>
      <h1 className="mb-8 h1">Search</h1>
      <div className="flex flex-col flex-1 w-full lg:flex-row">
        {/* Filter Bar */}
        <div className="w-full mb-8 lg:max-w-xs lg:mb-0 lg:mr-8">
          <h2 className="pb-4 border-b h2">Filters</h2>
          <div className="space-y-4 text-sm">
            <Accordion borderless defaultOpen>
              <Accordion.Summary className="px-0">Company</Accordion.Summary>
              <Accordion.Content className="px-0">Content</Accordion.Content>
            </Accordion>
            <Accordion borderless defaultOpen>
              <Accordion.Summary className="px-0">People</Accordion.Summary>
              <Accordion.Content className="px-0">Content</Accordion.Content>
            </Accordion>
            <Accordion borderless defaultOpen>
              <Accordion.Summary className="px-0">Sales Signals</Accordion.Summary>
              <Accordion.Content className="px-0">Content</Accordion.Content>
            </Accordion>
            <Accordion borderless>
              <Accordion.Summary className="px-0">Lists</Accordion.Summary>
              <Accordion.Content className="px-0">Content</Accordion.Content>
            </Accordion>
          </div>
        </div>

        {/* Main Section */}
        <div className="flex flex-col w-full">
          <Tabs>
            <Tabs.List className="pb-2 border-b md:px-4">
              <Tabs.Item>People</Tabs.Item>
              <Tabs.Item>Companies</Tabs.Item>
              <Tabs.Item>Data Profile</Tabs.Item>
            </Tabs.List>
            <Tabs.Panels className="flex-1 lg:relative">
              <Tabs.Panel>
                <SearchTopBar />
                <ul className="inset-0 py-1 overflow-y-auto lg:mt-14 lg:absolute">
                  {searchResults.map((result) => (
                    <SearchListItem key={result.name} result={result} selected={false} />
                  ))}
                </ul>
              </Tabs.Panel>
              <Tabs.Panel>
                <SearchTopBar />
                <ul className="inset-0 py-1 overflow-y-auto lg:mt-14 lg:absolute">
                  {searchResults.map((result) => (
                    <SearchListItem key={result.name} result={result} selected={false} />
                  ))}
                </ul>
              </Tabs.Panel>
              <Tabs.Panel className="inset-0 py-1 my-3 overflow-auto text-lg lg:absolute">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card size="md" elevation="none">
                    <Card.Body>
                      <ul className="space-y-8">
                        <li className="flex">
                          <UsersIcon className="w-6 h-6 mr-4 text-indigo-600" />
                          <div>
                            <h3>Contacts</h3>
                            <h5 className="mt-1 text-xl text-black">584,893</h5>
                          </div>
                        </li>
                        <li className="flex">
                          <OfficeBuildingIcon className="w-6 h-6 mr-4 text-indigo-600" />
                          <div>
                            <h3>Companies</h3>
                            <h5 className="mt-1 text-xl text-black">848</h5>
                          </div>
                        </li>
                        <li className="flex">
                          <UserIcon className="w-6 h-6 mr-4 text-indigo-600" />
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
              </Tabs.Panel>
            </Tabs.Panels>
          </Tabs>
        </div>
      </div>
    </>
  );
}
