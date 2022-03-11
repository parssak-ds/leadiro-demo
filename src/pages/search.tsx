import SearchTopBar from "components/search/SearchTopBar";
import { Accordian, Button, Card, Checkbox, Dropdown, Tabs } from "demandscience-ui";
import React from "react";

type Props = {};

export default function SearchPage({}: Props) {
  return (
    <>
      <h1 className="mb-8 h1">Find Leads</h1>
      <div className="flex flex-col h-full space-y-8 lg:flex-row md lg:space-y-0 lg:space-x-8">
        <div className="max-w-full lg:w-80">
          {/* Filter Bar */}
          <h2 className="pb-4 mb-4 border-b h2">Filters</h2>
          <div className="space-y-4">
            <Accordian summary="Company" borderless defaultOpen>
              Content
            </Accordian>
            <Accordian summary="People" borderless defaultOpen>
              Content
            </Accordian>
            <Accordian summary="Sales Signals" borderless defaultOpen>
              Content
            </Accordian>
            <Accordian summary="Lists" borderless>
              Content
            </Accordian>
          </div>
        </div>

        {/* Main Section */}
        <div className="w-full h-full ">
          <Tabs>
            <Tabs.List className="pb-2 border-b">
              <Tabs.Item>People</Tabs.Item>
              <Tabs.Item>Companies</Tabs.Item>
              <Tabs.Item>Data Profile</Tabs.Item>
            </Tabs.List>
            <Tabs.Panels className="h-full">
              <Tabs.Panel>
                <SearchTopBar />
              </Tabs.Panel>
              <Tabs.Panel>
                <SearchTopBar />
              </Tabs.Panel>
              <Tabs.Panel className="grid h-full gap-4 pt-4 pb-24 overflow-x-visible lg:overflow-y-auto md:grid-cols-2">
                <Card size="md" className="min-h-[16rem] grid place-items-center">
                  Content
                </Card>
                <Card size="md" className="min-h-[16rem] grid place-items-center">
                  Content
                </Card>
                <Card size="md" className="min-h-[16rem] grid place-items-center">
                  Content
                </Card>
                <Card size="md" className="min-h-[16rem] grid place-items-center">
                  Content
                </Card>
                <Card size="md" className="min-h-[16rem] grid place-items-center">
                  Content
                </Card>
                <Card size="md" className="min-h-[16rem] grid place-items-center">
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
