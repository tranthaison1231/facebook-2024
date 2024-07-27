import YourGroupItem from '../components/YourGroupItem'

export default function () {
  return (
    <div className="px-16">
      <div className="pb-4">
        <h4 className="font-bold">Pending your requests</h4>
        <p className="text-gray-500">
          {`View groups and feed channels you've requested to join. Some groups may require you to answer questions in
          order to approve your join request.`}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 2xl:grid-cols-3">
        <YourGroupItem />
        <YourGroupItem />
        <YourGroupItem />
        <YourGroupItem />
        <YourGroupItem />
        <YourGroupItem />
      </div>
    </div>
  )
}
