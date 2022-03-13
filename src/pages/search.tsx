import SearchTopBar from "components/search/SearchTopBar";
import { Accordion, Button, Card, Checkbox, Dropdown, Tabs } from "demandscience-ui";
import React from "react";

type Props = {};

export default function SearchPage({}: Props) {
  return (
    <>
      <h1 className="mb-8 h1">Find Leads</h1>
      <div className="flex flex-col h-full space-y-8 bg-blue-200 lg:flex-row md lg:space-y-0 lg:space-x-8">
        <div className="max-w-full lg:w-80">
          {/* Filter Bar */}
          <h2 className="pb-4 mb-4 border-b h2">Filters</h2>
          <div className="space-y-4">
            <Accordion summary="Company" borderless defaultOpen>
              Content
            </Accordion>
            <Accordion summary="People" borderless defaultOpen>
              Content
            </Accordion>
            <Accordion summary="Sales Signals" borderless defaultOpen>
              Content
            </Accordion>
            <Accordion summary="Lists" borderless>
              Content
            </Accordion>
          </div>
        </div>

        {/* Main Section */}
        <div className="relative flex-1 h-full">
          <Tabs>
            <Tabs.List className="pb-2 border-b">
              <Tabs.Item>People</Tabs.Item>
              <Tabs.Item>Companies</Tabs.Item>
              <Tabs.Item>Data Profile</Tabs.Item>
            </Tabs.List>
            <Tabs.Panels className="mb-4 bg-red-200  ring-4">
              <Tabs.Panel>
                <SearchTopBar />
              </Tabs.Panel>
              <Tabs.Panel>
                <SearchTopBar />
              </Tabs.Panel>
              <Tabs.Panel className="grid gap-4 pt-4 overflow-y-auto md:grid-cols-2">
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
