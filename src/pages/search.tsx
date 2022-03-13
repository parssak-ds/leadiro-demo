import SearchListItem from "components/search/SearchListItem";
import SearchTopBar from "components/search/SearchTopBar";
import { Accordion, Card, Tabs } from "demandscience-ui";
import React from "react";

type Props = {};

const baseSearchResults: SearchResult[] = [
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
const searchResults = generateNResults(20);
export default function SearchPage({}: Props) {
  return (
    <>
      <h1 className="mb-8 h1">Find Leads</h1>
      <div className="grid flex-1 gap-8 lg:grid-cols-5">
        {/* Filter Bar */}
        <div>
          <h2 className="pb-4 mb-4 border-b h2">Filters</h2>
          <div className="space-y-4">
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
        <div className="flex flex-col lg:col-span-4">
          <Tabs>
            <Tabs.List className="pb-2 border-b md:px-4">
              <Tabs.Item>People</Tabs.Item>
              <Tabs.Item>Companies</Tabs.Item>
              <Tabs.Item>Data Profile</Tabs.Item>
            </Tabs.List>
            <Tabs.Panels className="flex-1 lg:relative">
              <Tabs.Panel>
                <SearchTopBar />
                <ul className="inset-0 grid gap-4 py-1 overflow-y-auto lg:mt-12 lg:absolute">
                  {searchResults.map((result) => (
                    <SearchListItem key={result.name} result={result} selected={false} />
                  ))}
                </ul>
              </Tabs.Panel>
              <Tabs.Panel>
                <SearchTopBar />
                <ul className="inset-0 grid gap-4 py-1 overflow-y-auto lg:mt-12 lg:absolute">
                  {searchResults.map((result) => (
                    <SearchListItem key={result.name} result={result} selected={false} />
                  ))}
                </ul>
              </Tabs.Panel>
              <Tabs.Panel className="inset-0 grid gap-4 py-1 my-3 overflow-y-auto lg:absolute md:grid-cols-2">
                <Card size="md" className="min-h-[16rem] grid place-items-center" elevation="none">
                  Content
                </Card>
                <Card size="md" className="min-h-[16rem] grid place-items-center" elevation="none">
                  Content
                </Card>
                <Card size="md" className="min-h-[16rem] grid place-items-center" elevation="none">
                  Content
                </Card>
                <Card size="md" className="min-h-[16rem] grid place-items-center" elevation="none">
                  Content
                </Card>
                <Card size="md" className="min-h-[16rem] grid place-items-center" elevation="none">
                  Content
                </Card>
                <Card size="md" className="min-h-[16rem] grid place-items-center" elevation="none">
                  Content
                </Card>
              </Tabs.Panel>
            </Tabs.Panels>
          </Tabs>
        </div>
      </div>
    </>
  );
}
