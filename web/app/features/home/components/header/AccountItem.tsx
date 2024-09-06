import Radio from '@/core/components/Radio'
import { cn } from '@/core/utils/cn'

interface Radio {
  title: string
  content?: string
}

interface ItemProps {
  logoIcon?: JSX.Element
  title: string
  search?: JSX.Element
  directIcon?: JSX.Element
  content?: string
  radios?: Radio[]
  style?: string
  onClick?: () => void
}

function AccountItem({ logoIcon, title, directIcon, content, radios, style, onClick }: ItemProps) {
  return (
    <div
      className={cn(
        'flex items-start gap-1 rounded-md py-1 pl-2',
        {
          'group cursor-pointer items-center hover:bg-gray-200': !radios
        },
        style
      )}
      onClick={onClick}
    >
      {logoIcon && (
        <div className="relative flex cursor-pointer items-center gap-2 rounded-full bg-gray-200 p-2.5 group-hover:bg-gray-300">
          {logoIcon}
        </div>
      )}
      <div className={cn('flex grow items-center justify-between pr-3', { '-mt-3': radios })}>
        <div className={cn('grow', { 'pl-3': !logoIcon })}>
          <p className="p-2 font-semibold leading-5">{title}</p>
          {content && <p className="-mt-1 px-2 pb-1 text-xs font-normal">{content}</p>}
          {radios?.map((radio: Radio) => {
            return <Radio key={radio.title} title={radio.title} content={radio.content} />
          })}
        </div>
        <div>{directIcon}</div>
      </div>
    </div>
  )
}

export default AccountItem
