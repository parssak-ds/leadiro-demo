import { ArrowRightIcon, SearchIcon } from "@heroicons/react/outline";
import DashboardSection from "components/dashboard/DashboardSection";
import DashboardListItem from "components/dashboard/DashboardListItem";
import DashboardLayout from "components/dashboard/DashboardLayout";
import { Alert, Badge, Button, Card, Progress } from "demandscience-ui";
import { PlusIcon } from "@heroicons/react/solid";

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

  const notifications = [
    {
      title: "100 New Credits",
      date: "Feb 12, 2022",
      content: "You have received your monthly quota of 100 credits. ",
    },
    {
      title: "Shared List",
      date: "Feb 12, 2022",
      content: "Jason Smith shared a list with you. ",
      link: {
        label: "US Central large companies",
        url: "#",
      },
      action: {
        label: "View List",
        callback: () => {},
      },
    },
    {
      title: "50 New Credits",
      date: "Feb 12, 2022",
      content: "You have received your monthly quota of 100 credits. ",
    },
  ];

  return (
    <DashboardLayout>
      <DashboardLayout.Main>
        {/* Top Alerts */}
        <section className="grid gap-2 md:grid-cols-2">
          <Card elevation="none" size="md">
            <Card.Body className="flex flex-col">
              <Card.Title>Credits Usage</Card.Title>
              <p className="mt-2 font-medium text-blue-500">Replenishes on March 1, 2022</p>
              <div className="mt-4 space-x-1">
                <Badge type="red">98 Credits used</Badge>
                <Badge type="gray">3 credits left</Badge>
              </div>
              <Progress value={58} size="sm" className="mt-4" />
            </Card.Body>
          </Card>
          <Alert handleClose={() => {}}>
            <Alert.Header>
              <Alert.CloseButton />
            </Alert.Header>
            <Alert.Title>Low Credits</Alert.Title>
            <p className="mt-2 ">You are running low on credits</p>
            <Button borderless className="!p-0 mt-3" theme="secondary">
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
      </DashboardLayout.Main>

      {/* Right hand side */}
      <DashboardLayout.Notifications notifications={notifications} />
    </DashboardLayout>
  );
}
