import { Accordian, Button, Checkbox, Dropdown, Tabs } from "demandscience-ui";
import React from "react";

type Props = {};

export default function SearchPage({}: Props) {
  return (
    <>
      <h1 className="mb-8 h1">Find Leads</h1>
      <div className="grid-cols-8 gap-8 space-y-4 lg:grid lg:space-y-0">
        <div className="col-span-3 ">
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
        <div className="col-span-5">
          <Tabs>
            <Tabs.List className="pb-2 border-b">
              <Tabs.Item>People</Tabs.Item>
              <Tabs.Item>Companies</Tabs.Item>
              <Tabs.Item>Data Profile</Tabs.Item>
            </Tabs.List>
            <Tabs.Panels>
              <Tabs.Panel>
                <div className="flex items-center py-2 text-sm text-gray-500 border-b">
                  <div className="flex items-center space-x-3">
                    <Checkbox onChange={(val) => {}} checked={true} />
                    <div>3 selected</div>
                    <Button size="xs">Export</Button>
                    <Dropdown
                      options={[]}
                      buttonType="ellipsis"
                      buttonProps={{
                        size: "md",
                      }}
                      className="grid place-items-center"
                    />
                  </div>
                  <div className="pl-3 ml-auto">
                    <Dropdown
                      options={[
                        {
                          label: "All",
                          action: () => {},
                        },
                        {
                          label: "Sort by company revenue",
                          action: () => {},
                        },
                        {
                          label: "Sort by other",
                          action: () => {},
                        },
                      ]}
                      buttonProps={{
                        outline: true,
                        borderless: true,
                        size: "xs",
                      }}
                    >
                      Sort by company revenue
                    </Dropdown>
                  </div>
                </div>
              </Tabs.Panel>
            </Tabs.Panels>
          </Tabs>
        </div>
      </div>
    </>
  );
}
