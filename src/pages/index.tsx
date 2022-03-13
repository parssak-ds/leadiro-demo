import {
  ArrowRightIcon,
  ChevronRightIcon,
  LockClosedIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { PlusIcon } from "@heroicons/react/solid";
import DashboardSection from "components/dashboard/DashboardSection";
import DashboardListItem from "components/dashboard/DashboardListItem";
import { Alert, Badge, Button, Card } from "demandscience-ui";

export default function HomePage() {
  const searches = [
    "Airlines - Germany",
    "UK startups biotech",
    "Client 1 - France",
    "Search for Jason",
  ];

  const lists = [
    {
      title: "US-East startups",
      status: "private",
      parent: "ABM",
      count: 54,
    },
    {
      title: "US-Central large companies",
      status: "shared",
      parent: "ABM",
      count: 54,
    },
  ];

  return (
    <>
      <div className="flex justify-between">
        <h1 className="h1">Dashboard</h1>
        <div className="hidden px-2 py-1 lg:block">Insert tabs here</div>
      </div>
      <hr className="my-8" />

      <div className="grid-cols-8 gap-8 pb-4 space-y-4 lg:grid lg:space-y-0">
        {/* Left hand side */}
        <div className="col-span-5 space-y-4 divide-y">
          {/* Top Alerts */}
          <section className="grid gap-2 md:grid-cols-2">
            <Alert>
              <Alert.Title>Credits used</Alert.Title>
              <p className="font-medium text-blue-500">Replenishes on March 1, 2022</p>
              <div className="mt-4 space-x-1">
                <Badge type="red">98 Credits used</Badge>
                <Badge type="gray">3 credits left</Badge>
              </div>
            </Alert>
            <Alert handleClose={() => {}}>
              <Alert.Title>Low Credits</Alert.Title>
              <p>You are running low on credits</p>
              <Button borderless className="!p-0 mt-2" theme="secondary">
                Buy more credits <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Button>
            </Alert>
          </section>

          {/* Recent Searches */}
          <DashboardSection title="Recent Searches" action={() => {}}>
            <div className="pb-4 space-x-2 overflow-auto whitespace-nowrap">
              {searches.map((search) => (
                <Badge key={search} size="lg" className="px-2" type="gray" onClick={() => {}}>
                  <SearchIcon className="w-4 h-4 mr-1.5" />
                  {search}
                </Badge>
              ))}
            </div>
            <Button size="xs" outline theme="secondary">
              <PlusIcon className="w-4 h-4 mr-1" />
              New Search
            </Button>
          </DashboardSection>

          {/* Your lists */}
          <DashboardSection title="Your Lists" action={() => {}}>
            <div className="pb-4 divide-y">
              {lists.map((list) => (
                // @ts-ignore
                <DashboardListItem key={list.title} {...list} />
              ))}
            </div>
            <Button size="xs" outline theme="secondary">
              <PlusIcon className="w-4 h-4 mr-1" />
              Add List
            </Button>
          </DashboardSection>
        </div>

        {/* Right hand side */}
        <div className="col-span-3 space-y-4">
          <div className="flex items-center">
            <h2 className="h2">Notifications</h2>
            <Badge className="ml-2">4</Badge>
            <Button borderless theme="secondary" className="ml-auto">
              Mark as read
            </Button>
          </div>
          <Alert handleClose={() => {}}>
            <Alert.Title>100 New Credits</Alert.Title>
            <p>You have received your monthly quota of 100 credits. </p>
          </Alert>
          <Alert handleClose={() => {}}>
            <Alert.Title>Shared List</Alert.Title>
            <p>Jason Smith shared a list with you. </p>
          </Alert>
          <Alert handleClose={() => {}}>
            <Alert.Title>50 New Credits</Alert.Title>
            <p>You have received your monthly quota of 50 credits. </p>
          </Alert>
        </div>
      </div>
    </>
  );
}
