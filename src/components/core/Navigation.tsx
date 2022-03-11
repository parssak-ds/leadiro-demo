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
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon },
  { name: "Search", href: "/search", icon: UsersIcon },
  { name: "List", href: "/list", icon: FolderIcon },
  { name: "Team", href: "/team", icon: CalendarIcon },
  { name: "Settings", href: "/settings", icon: InboxIcon },
];

const useCurrentRoute = () => {
  const router = useRouter();
  const isCurrentRoute = (href: string) => {
    return router.pathname === href;
  };
  return isCurrentRoute;
};

const StaticNavigation = () => {
  const isCurrentRoute = useCurrentRoute();
  return (
    <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-primary-700">
      <div className="flex flex-col flex-1">
        <nav className="flex-1 px-2 pb-4 space-y-1">
          {navigation.map((item) => (
            <Link href={item.href} key={item.name}>
              <a
                className={classNames(
                  isCurrentRoute(item.href)
                    ? "bg-primary-800 text-white"
                    : "text-primary-100 hover:bg-primary-600",
                  "flex items-center px-2 py-2 text-sm font-medium rounded-md"
                )}
              >
                <item.icon className="flex-shrink-0 w-6 h-6 text-primary-300" aria-hidden="true" />
                <span className="hidden ml-3 group-hover:inline-flex">{item.name}</span>
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

const MobileNavigation = () => {
  const isCurrentRoute = useCurrentRoute();

  return (
    <div className="flex-1 h-0 mt-5 overflow-y-auto">
      <nav className="px-2 space-y-1">
        {navigation.map((item) => (
          <Link key={item.name} href={item.href}>
            <a
              className={classNames(
                isCurrentRoute(item.href)
                  ? "bg-primary-800 text-white"
                  : "text-primary-100 hover:bg-primary-600",
                "group flex items-center px-2 py-2 text-base font-medium rounded-md"
              )}
            >
              <item.icon
                className="flex-shrink-0 w-6 h-6 mr-4 text-primary-300"
                aria-hidden="true"
              />
              {item.name}
            </a>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export const Navigation = Object.assign(StaticNavigation, { Mobile: MobileNavigation });
