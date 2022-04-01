import React, { useState } from "react";

import DataProfileCard, { DataProfileCardProps } from "components/search/DataProfileCard";
import SearchFilterBar from "components/search/SearchFilterBar";
import SearchDrawerInfo from "components/search/SearchDrawerInfo";
import SearchListItem from "components/search/SearchListItem";
import SearchTopBar from "components/search/SearchTopBar";

import { Alert, Button, Card, Drawer, Modal, Select, Tabs } from "demandscience-ui";
import { UsersIcon, OfficeBuildingIcon, ViewGridIcon } from "@heroicons/react/outline";
import { searchResults } from "components/search/data";
import DataProfileView from "components/search/DataProfileView";

export default function SearchPage() {
  const [sidebarInfo, setSidebarInfo] = useState<ISearchResult | undefined>(undefined);
  const [selectedPeople, setSelectedPeople] = useState<string[]>([]);
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
  const [showExportModal, setShowExportModal] = useState(false);

  const handleSelectPerson = (id: string) => {
    if (selectedPeople.includes(id)) {
      setSelectedPeople(selectedPeople.filter((personId) => personId !== id));
    } else {
      setSelectedPeople([...selectedPeople, id]);
    }
  };

  const handleSelectCompany = (id: string) => {
    if (selectedCompanies.includes(id)) {
      setSelectedCompanies(selectedCompanies.filter((companyId) => companyId !== id));
    } else {
      setSelectedCompanies([...selectedCompanies, id]);
    }
  };

  const onToggleSidebar = (result?: ISearchResult) => {
    if (sidebarInfo || sidebarInfo?.id === result.id) {
      setSidebarInfo(undefined);
    } else {
      setSidebarInfo(result);
    }
  };

  const toggleBulkSelectPeople = (selectAll?: boolean) => {
    if (!selectAll) {
      setSelectedPeople([]);
    } else {
      setSelectedPeople(searchResults.map((result) => result.id));
    }
  };

  const toggleBulkSelectCompanies = (selectAll?: boolean) => {
    if (!selectAll) {
      setSelectedCompanies([]);
    } else {
      setSelectedCompanies(searchResults.map((result) => result.id));
    }
  };

  return (
    <>
      <h1 className="mb-8 h1">Search</h1>
      <div className="flex flex-col flex-1 w-full lg:flex-row">
        <SearchFilterBar />

        {/* Main Section */}
        <div className="flex flex-col w-full">
          <Tabs>
            <Tabs.List className="pb-2 border-b md:px-4">
              <Tabs.Item>
                <UsersIcon className="w-5 h-5 mr-2 hidden sm:block" /> People
              </Tabs.Item>
              <Tabs.Item>
                <OfficeBuildingIcon className="w-5 h-5 mr-2 hidden sm:block" />
                Companies
              </Tabs.Item>
              <Tabs.Item>
                <ViewGridIcon className="w-5 h-5 mr-2 hidden sm:block" />
                Data Profile
              </Tabs.Item>
            </Tabs.List>
            <Tabs.Panels className="flex-1 lg:relative">
              <Tabs.Panel>
                <SearchTopBar
                  selected={selectedPeople.length}
                  toggleBulkSelect={toggleBulkSelectPeople}
                  allSelected={selectedPeople.length === searchResults.length}
                  openExportModal={() => setShowExportModal(true)}
                />
                <ul className="inset-0 py-1 overflow-y-auto lg:mt-14 lg:absolute">
                  {searchResults.map((result) => (
                    <SearchListItem
                      key={result.name}
                      result={result}
                      selected={selectedPeople.includes(result.id)}
                      onSelectionChange={handleSelectPerson}
                      onToggleSidebar={() => onToggleSidebar(result)}
                    />
                  ))}
                </ul>
              </Tabs.Panel>
              <Tabs.Panel>
                <SearchTopBar
                  selected={selectedCompanies.length}
                  toggleBulkSelect={toggleBulkSelectCompanies}
                  allSelected={selectedPeople.length === searchResults.length}
                  openExportModal={() => setShowExportModal(true)}
                />
                <ul className="inset-0 py-1 overflow-y-auto lg:mt-14 lg:absolute">
                  {searchResults.map((result) => (
                    <SearchListItem
                      key={result.name}
                      result={result}
                      selected={selectedCompanies.includes(result.id)}
                      onSelectionChange={handleSelectCompany}
                      onToggleSidebar={() => onToggleSidebar(result)}
                    />
                  ))}
                </ul>
              </Tabs.Panel>
              <Tabs.Panel className="inset-0 py-1 my-3 overflow-auto text-lg lg:absolute">
                <DataProfileView />
              </Tabs.Panel>
            </Tabs.Panels>
          </Tabs>
        </div>
      </div>
      <Drawer open={!!sidebarInfo} onClose={() => setSidebarInfo(undefined)} rootClassName="z-20">
        {sidebarInfo && <SearchDrawerInfo result={sidebarInfo} />}
      </Drawer>
      <Modal
        open={showExportModal}
        onClose={() => setShowExportModal(false)}
        className="overflow-visible"
      >
        <Modal.Title>Export 12 contacts</Modal.Title>
        <Modal.Description className="pt-4">
          <Alert severity="info" className="mb-6">
            <Alert.Header>7 contacts from your selection were already purchased</Alert.Header>
          </Alert>
          <div className="space-y-4">
            <Select
              options={[
                {
                  label: "Leadiro List",
                  value: "leadiro",
                },
                {
                  label: "Salesforce",
                  value: "salesforce",
                },
                {
                  label: "Hubspot",
                  value: "hubspot",
                },
              ]}
              selectedOption={undefined}
              onChange={(e) => {
                return "";
              }}
              placeholder="Destination"
            />
            <Select
              options={[
                {
                  label: "US Central startups",
                  value: "us-central-startups",
                },
              ]}
              selectedOption={undefined}
              onChange={(e) => {
                return "";
              }}
              placeholder="List"
            />
          </div>
        </Modal.Description>
        <div className="flex justify-end mt-4 space-x-96">
          <Button borderless onClick={() => setShowExportModal(false)}>
            Cancel
          </Button>
          <Button borderless onClick={() => setShowExportModal(false)}>
            Cancel
          </Button>
          <Button borderless onClick={() => setShowExportModal(false)}>
            Cancel
          </Button>
          <Button>Export</Button>
        </div>
      </Modal>
    </>
  );
}
