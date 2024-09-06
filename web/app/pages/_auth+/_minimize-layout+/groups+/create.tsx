import DesktopPreview from '@/core/components/DesktopPreview'
import LeftBarGroupsCreate from '@/features/home/components/left-section/LeftBarGroupsCreate'

export default function GroupCreate() {
  return (
    <div className="bg-gray-100">
      <LeftBarGroupsCreate className="fixed w-full flex-col lg:w-90" />
      <div className="ml-90 hidden h-screen justify-items-center pt-14 lg:grid">
        <DesktopPreview />
      </div>
    </div>
  )
}
