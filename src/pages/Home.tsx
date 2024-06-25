import Item from "../components/Item";
import Button from "../components/Button";
import background from "../assets/images/jumbotron-background.png";
import Setting from "../components/Setting";
import logo from "../assets/svgs/logo.svg";
const LIST_ITEMS = [
  {
    id: 1,
    productName: "Product 1 ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    quantity: 2,
    price: 200,
  },
  {
    id: 2,
    productName: "Product 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    quantity: 2,
    price: 200,
  },
  {
    id: 3,
    productName: "Product 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    quantity: 2,
    price: 200,
  },
  {
    id: 4,
    productName: "Product 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    quantity: 2,
    price: 200,
  },
];
export default function Home() {
  return (
    <div className="w-full relative overflow-x-auto">
      <img src={background} alt="jumbotron" className="relative z-0" />
      <div className=" bg-white mx-6 -mt-6 relative z-10 rounded-md p-4">
        <dl className="flex justify-between items-center py-2">
          <dt className="text-2xl font-bold">Invoice #215462</dt>
          <dd className="text-xs font-medium"> DUE DATE: Aug 19,2002</dd>
        </dl>
        <h1 className="text-xl font-bold py-2">Hello ,Devon Lane</h1>
        <p className="text-xs py-2">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
        <table className="w-full text-xs text-left rtl:text-right text-gray-800">
          <thead className="text-xs bg-white border-b-2">
            <tr className="children:font-normal py-3">
              <th scope="col" className=" text-start ">
                Product name
              </th>
              <th scope="col" className=" text-start ">
                Quantity
              </th>
              <th scope="col" className=" text-start ">
                Price
              </th>
              <th scope="col" className=" text-right ">
                Totals
              </th>
            </tr>
          </thead>
          <tbody>
            {LIST_ITEMS.map((item) => (
              <Item
                key={item.id}
                productName={item.productName}
                description={item.description}
                quantity={item.quantity}
                price={item.price}
              />
            ))}
          </tbody>
          {LIST_ITEMS.length > 0 && (
            <tfoot className="border-t-2">
              <tr className="children:py-3 children:font-semibold children:text-sm">
                <td
                  colSpan={3}
                  className=" text-left"
                >
                  Net Amount
                </td>
                <td className=" text-right">
                  {LIST_ITEMS.reduce(
                    (acc, item) => acc + item.quantity * item.price,
                    0,
                  )}
                </td>
              </tr>
            </tfoot>
          )}
        </table>
        <div className="flex flex-row py-4">
          <img src={logo} alt="hopeUI" />
          <p className="pl-2 text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ligula
            interdum tellus sed scelerisque sed habitasse pharetra odio. In sem
            nunc ac cursus maecenas. Et tincidunt ultrices non et quis elit.
            Libero dignissim laoreet mattis mollis molestie vitae odio morbi
            sed.
          </p>
        </div>
        <p className="text-sm py-4">
          Please pay within 15 days. Thank you for your business.
        </p>
        <div className="flex justify-center">
          <Button>Print</Button>
        </div>
      </div>
      <div className="absolute top-56 right-0 z-20">
        <Setting />
      </div>
    </div>
  );
}
