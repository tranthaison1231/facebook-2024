export default function Item(props: any) {
  return (
    <tr>
      <th scope="row" className="py-4 whitespace-nowrap font-normal text-start">
        <p>{props.productName}</p>
        <p>{props.description}</p>
      </th>
      <td className="py-4 text-start">{props.quantity}</td>
      <td className="py-4 text-start">{`$${props.price}`}</td>
      <td className="py-4 text-right">{props.quantity * props.price}</td>
    </tr>
  );
}
