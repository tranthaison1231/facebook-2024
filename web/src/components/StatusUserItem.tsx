import Ellipsis from "../assets/svgs/ellipsis.svg?react";

function StatusUserItem({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg bg-white p-4 shadow-lg font-medium flex justify-between items-center">
      <p className={className}>{children}</p>
      <Ellipsis className="hover:fill-black" />
    </div>
  );
}

export default StatusUserItem;
