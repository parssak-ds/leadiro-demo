import { LockClosedIcon, UserIcon } from "@heroicons/react/outline";
import { Badge } from "demandscience-ui";
import { capitalizeString } from "utils";

const DashboardListItem = ({
  title,
  status,
  parent,
  count,
}: {
  title: string;
  status: "private" | "shared";
  parent: string;
  count: number;
}) => (
  <div className="grid grid-cols-4 gap-4 p-2 text-sm md:grid-cols-5">
    <div className="col-span-2 truncate">{title}</div>
    <div>
      <Badge type={status === 'private' ? 'gray' : 'green'}>
        {status === "private" ? (
          <LockClosedIcon className="w-4 h-4" />
        ) : (
          <UserIcon className="w-4 h-4" />
        )}
        <span className="ml-1">{capitalizeString(status)}</span>
      </Badge>
    </div>
    <div><Badge type="gray">{parent}</Badge></div>
    <div className="hidden md:block">{count} companies</div>
  </div>
);

export default DashboardListItem;
