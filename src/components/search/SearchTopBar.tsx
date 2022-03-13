import { Button, Checkbox, Dropdown, Pagination } from "demandscience-ui";
import React from "react";

type Props = {};

export default function SearchTopBar({}: Props) {
  return (
    <div className="flex flex-col py-2 space-y-3 text-sm text-gray-500 border-b sm:space-y-0 sm:items-center sm:flex-row">
      <div className="flex items-center space-x-3">
        <Checkbox onChange={(val) => {}} checked={true} />
        <div>3 selected</div>
        <Button size="xs">Export</Button>
        <Dropdown
          options={[
            {
              label: "All",
              action: () => {},
            },
            {
              label: "None",
              action: () => {},
            },
          ]}
          buttonType="ellipsis"
          buttonProps={{
            size: "md",
          }}
          className="grid place-items-center"
        />
      </div>
      <div className="flex items-center space-x-3 sm:pl-3 sm:ml-auto">
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
        <Pagination
          page={1}
          count={5}
          rowsPerPage={10}
          onPageChange={(e, p) => {}}
          variant="compact"
        />
      </div>
    </div>
  );
}
