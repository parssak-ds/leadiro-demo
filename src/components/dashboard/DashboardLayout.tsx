import { Alert, Badge, Button } from "demandscience-ui";
import React from "react";

const DashboardLayoutRoot = ({ children }) => (
  <>
    <div className="flex justify-between">
      <h1 className="h1">Dashboard</h1>
      <div className="hidden px-2 py-1 lg:block">Insert tabs here</div>
    </div>

    <hr className="my-4 md:my-8" />

    <div className="gap-12 pb-4 space-y-4 lg:grid-cols-8 xl:grid-cols-7 lg:grid lg:space-y-0">
      {children}
    </div>
  </>
);

const DashboardLayoutMain = ({ children }) => (
  <div className="col-span-5 space-y-4 divide-y">{children}</div>
);

const DashboardLayoutNotifications = ({ notifications }: { notifications: INotification[] }) => (
  <div className="col-span-3 space-y-4 xl:col-span-2">
    <div className="flex items-center">
      <h2 className="h2">Notifications</h2>
      <Badge className="ml-2">{notifications.length}</Badge>
      <Button borderless theme="secondary" className="ml-auto">
        Mark as read
      </Button>
    </div>
    {notifications.map((notification) => (
      <Alert key={notification.title} handleClose={() => {}} severity="neutral" className="flex flex-col space-y-2">
        <Alert.Header className="-mt-2">
          <Alert.Title>{notification.title}</Alert.Title>
          <span className="inline-block ml-auto text-xs text-gray-400">{notification.date}</span>
          <Alert.CloseButton className="ml-1" />
        </Alert.Header>
        <p>{notification.content}</p>
        {notification.link && (
          <a href={notification.link.url} className="block text-secondary-300">
            {notification.link.label}
          </a>
        )}
        {notification.action && (
          <Button
            size="xs"
            borderless
            theme="secondary"
            className="ml-auto w-max"
            onClick={notification.action.callback}
          >
            {notification.action.label}
          </Button>
        )}
      </Alert>
    ))}
    {/* <Alert handleClose={() => {}} severity="neutral">
      <Alert.Header className="-mt-2">
        <Alert.Title>100 New Credits</Alert.Title>
        <span className="inline-block ml-auto text-xs text-gray-400">Feb 12, 2022</span>
        <Alert.CloseButton className="ml-1" />
      </Alert.Header>
      <p>You have received your monthly quota of 100 credits. </p>
    </Alert>
    <Alert handleClose={() => {}} severity="neutral">
      <Alert.Header className="-mt-2">
        <Avatar src="" alt="Jason Smith" />
        <Alert.Title className="ml-2">Shared List</Alert.Title>
        <span className="inline-block ml-auto text-xs text-gray-400">Feb 12, 2022</span>
        <Alert.CloseButton className="ml-1" />
      </Alert.Header>
      <div className="flex flex-col mt-2 space-y-2">
        <p>Jason Smith shared a list with you. </p>
        <a href="" className="block text-secondary-300">
          US Central large companies
        </a>
        <Button size="xs" borderless theme="secondary" className="ml-auto w-max">
          View List
        </Button>
      </div>
    </Alert>
    <Alert handleClose={() => {}} severity="neutral">
      <Alert.Header className="-mt-2">
        <Alert.Title>50 New Credits</Alert.Title>
        <span className="inline-block ml-auto text-xs text-gray-400">Feb 12, 2022</span>
        <Alert.CloseButton className="ml-1" />
      </Alert.Header>
      <p>You have received your monthly quota of 100 credits. </p>
    </Alert> */}
  </div>
);

const DashboardLayout = Object.assign(DashboardLayoutRoot, {
  Main: DashboardLayoutMain,
  Notifications: DashboardLayoutNotifications,
});

export default DashboardLayout;
