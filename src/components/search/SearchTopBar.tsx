import { Button, Checkbox, Dropdown, Pagination } from "demandscience-ui";
import React from "react";

interface Props {
  selected: number;
  toggleBulkSelect: (selectAll?: boolean) => void;
  allSelected: boolean;
  openExportModal: () => void;
}

export default function SearchTopBar({
  selected,
  toggleBulkSelect,
  allSelected,
  openExportModal,
}: Props) {
  return (
    <div className="flex flex-col py-2 space-y-3 text-sm text-gray-500 border-b md:px-4 sm:space-y-0 sm:items-center sm:flex-row">
      <div className="flex items-center space-x-3">
        <Checkbox
          onChange={(val) => {
            toggleBulkSelect(val);
          }}
          checked={selected > 0}
          checkType={allSelected ? "check" : "minus"}
        />
        {selected > 0 && (
          <>
            <div>{selected} selected</div>
            <Button onClick={openExportModal} size="xs">
              Export
            </Button>
            <Dropdown
              options={[
                {
                  label: "View only selected",
                  action: () => {},
                },
                {
                  label: "Reveal",
                  action: () => {},
                },
                {
                  label: "Browse on LinkedIn",
                  action: () => {},
                },
                {
                  label: "Clear selection",
                  action: () => {
                    toggleBulkSelect(false);
                  },
                },
              ]}
              buttonType="ellipsis"
              buttonProps={{
                size: "md",
              }}
              className="grid place-items-center"
              dropdownClassName="z-10"
              origin="bottom-left"
            />
          </>
        )}
      </div>
      <div className="flex items-center space-x-3 sm:pl-3 sm:ml-auto">
        <Dropdown
          options={[
            {
              label: "Company Revenue",
              action: () => {},
            },
            {
              label: "Headcount",
              action: () => {},
            },
          ]}
          buttonProps={{
            outline: true,
            borderless: true,
            size: "xs",
          }}
          dropdownClassName="z-10"
        >
          Sort by company revenue
        </Dropdown>
        <Pagination.Compact page={1} count={100} rowsPerPage={100} onPageChange={(e, p) => {}} />
      </div>
    </div>
  );
}
