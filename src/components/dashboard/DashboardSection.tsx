import { ChevronRightIcon } from "@heroicons/react/outline";
import { Button } from "demandscience-ui";

const DashboardSection = ({
  title,
  action,
  children,
}: {
  title: string;
  action: () => void;
  children: React.ReactNode;
}) => (
  <section>
    <div className="flex justify-between mt-8 mb-6">
      <h3 className="h3">{title}</h3>
      <Button borderless className="!p-0" theme="secondary" onClick={action}>
        View all <ChevronRightIcon className="w-4 h-4 ml-1" />
      </Button>
    </div>
    {children}
  </section>
);

export default DashboardSection;
