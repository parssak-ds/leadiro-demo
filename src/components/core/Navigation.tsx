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
  <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-primary-700">
    <div className="flex flex-col flex-1">
      <nav className="flex-1 px-2 pb-4 space-y-1">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current ? "bg-primary-800 text-white" : "text-primary-100 hover:bg-primary-600",
              "flex items-center px-2 py-2 text-sm font-medium rounded-md"
            )}
          >
            <item.icon className="flex-shrink-0 w-6 h-6 text-primary-300" aria-hidden="true" />
            <span className="hidden ml-3 group-hover:inline-flex">{item.name}</span>
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
            item.current ? "bg-primary-800 text-white" : "text-primary-100 hover:bg-primary-600",
            "group flex items-center px-2 py-2 text-base font-medium rounded-md"
          )}
        >
          <item.icon className="flex-shrink-0 w-6 h-6 mr-4 text-primary-300" aria-hidden="true" />
          {item.name}
        </a>
      ))}
    </nav>
  </div>
);

export const Navigation = Object.assign(StaticNavigation, { Mobile: MobileNavigation });
