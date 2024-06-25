import AddItem from "../assets/svgs/add-item.svg?react";

function StatusUserItem() {
  return (
    <div className="group text-[#8A92A6] hover:text-black  rounded-lg border-dotted border-2 border-[#8A92A6] bg-transparent p-4 font-medium flex justify-between items-center">
      <p >New Task</p>
      <AddItem className="group-hover:fill-black" />
    </div>
  );
}

export default StatusUserItem;
