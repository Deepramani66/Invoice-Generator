export default function ItemInput({ index, item, updateItem }) {
  return (
    <div className="flex gap-2 mb-2">
      <input
        className="border p-2"
        placeholder="Product"
        value={item.product_name}
        onChange={(e) => updateItem(index, "product_name", e.target.value)}
      />

      <input
        className="border p-2 w-20"
        type="number"
        placeholder="Qty"
        value={item.quantity}
        onChange={(e) => updateItem(index, "quantity", e.target.value)}
      />

      <input
        className="border p-2 w-24"
        type="number"
        placeholder="Price"
        value={item.price}
        onChange={(e) => updateItem(index, "price", e.target.value)}
      />
    </div>
  );
}