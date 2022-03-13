import SearchTopBar from "components/search/SearchTopBar";
import { Accordion, Card, Tabs } from "demandscience-ui";
import React from "react";

type Props = {};

export default function SearchPage({}: Props) {
  return (
    <>
      <h1 className="mb-8 h1">Find Leads</h1>
      <div className="grid flex-1 gap-8 lg:grid-cols-5">
        {/* Filter Bar */}
        <div>
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
        <div className="flex flex-col lg:col-span-4">
          <Tabs>
            <Tabs.List className="pb-2 border-b">
              <Tabs.Item>People</Tabs.Item>
              <Tabs.Item>Companies</Tabs.Item>
              <Tabs.Item>Data Profile</Tabs.Item>
            </Tabs.List>
            <Tabs.Panels className="flex-1 lg:relative ">
              <Tabs.Panel>
                <SearchTopBar />
              </Tabs.Panel>
              <Tabs.Panel>
                <SearchTopBar />
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
