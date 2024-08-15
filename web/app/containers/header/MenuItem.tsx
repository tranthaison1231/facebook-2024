interface ItemProps {
  logoIcon: JSX.Element
  title: string
  content?: string
}

function MenuItem({ logoIcon, title, content }: ItemProps) {
  return (
    <div className="group relative mx-2 flex flex-row items-center rounded-xl p-2 font-normal hover:bg-gray-200">
      <div className="flex-none">{logoIcon}</div>
      <div className="flex grow flex-col overflow-hidden pl-2">
        <h4 className="truncate font-semibold">{title}</h4>
        <p className="line-clamp-2 text-xs">{content}</p>
      </div>
    </div>
  )
}

function CreateItem({ logoIcon, title, content }: ItemProps) {
  return (
    <div className="group/item relative mx-2 flex flex-row items-center rounded-xl px-2 py-1 font-normal hover:bg-gray-200">
      <div className="flex items-center rounded-full bg-gray-200 p-2.5 group-hover/item:bg-gray-300">{logoIcon}</div>
      <div className="flex grow flex-col overflow-hidden pl-2">
        <h4 className="text-wrap font-semibold">{title}</h4>
        <p className="line-clamp-2 text-xs">{content}</p>
      </div>
    </div>
  )
}

export { CreateItem }
export default MenuItem
