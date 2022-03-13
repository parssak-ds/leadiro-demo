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

const Navigation = () => {
  const router = useRouter();
  const isCurrentRoute = (href: string) => {
    return router.pathname === href;
  };
  return (
    <div className="h-full px-2 overflow-y-auto bg-white shadow-xl md:pt-16">
      <h3 className="font-medium md:hidden">DemandScience</h3>
      <nav className="mt-4 space-y-1">
        {navigation.map((item) => (
          <Link href={item.href} key={item.name}>
            <a
              className={classNames(
                isCurrentRoute(item.href)
                  ? "bg-primary-100 text-primary-500"
                  : "hover:bg-gray-100 text-gray-500",
                "flex items-center px-2 py-2 text-sm font-medium rounded-md transition"
              )}
            >
              <item.icon className="flex-shrink-0 w-6 h-6 " aria-hidden="true" />
              <span className="ml-4 md:hidden md:group-hover:inline-flex">{item.name}</span>
            </a>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navigation;
