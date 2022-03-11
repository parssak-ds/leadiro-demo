import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/outline";
import { classNames } from "utils";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: InboxIcon, current: false },
  { name: "Reports", href: "#", icon: ChartBarIcon, current: false },
];

const StaticNavigation = () => (
  <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-indigo-700">
    <div className="flex items-center flex-shrink-0 px-4">
      <img
        className="w-auto h-8"
        src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
        alt="Workflow"
      />
    </div>
    <div className="flex flex-col flex-1 mt-5">
      <nav className="flex-1 px-2 pb-4 space-y-1">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current ? "bg-indigo-800 text-white" : "text-indigo-100 hover:bg-indigo-600",
              "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
            )}
          >
            <item.icon className="flex-shrink-0 w-6 h-6 mr-3 text-indigo-300" aria-hidden="true" />
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  </div>
);

const MobileNavigation = () => (
  <div className="flex-1 h-0 mt-5 overflow-y-auto">
    <nav className="px-2 space-y-1">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={classNames(
            item.current ? "bg-indigo-800 text-white" : "text-indigo-100 hover:bg-indigo-600",
            "group flex items-center px-2 py-2 text-base font-medium rounded-md"
          )}
        >
          <item.icon className="flex-shrink-0 w-6 h-6 mr-4 text-indigo-300" aria-hidden="true" />
          {item.name}
        </a>
      ))}
    </nav>
  </div>
);

export const Navigation = Object.assign(StaticNavigation, {Mobile: MobileNavigation});
