import gaming from "../../assets/images/Gming.png";
import air from "../../assets/images/Air.png";
import smart from "../../assets/images/Smart.png";

export default function TopProducts() {
  const products = [
    {
      name: "Gaming Joy Stick",
      sold: "156 units sold",
      price: "$3,120",
      img: gaming,
    },
    {
      name: "Wireless Headphones",
      sold: "134 units sold",
      price: "$2,680",
      img: air,
    },
    {
      name: "Smartwatch",
      sold: "98 units sold",
      price: "$1,960",
      img: smart,
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">

      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Top Products
      </h2>

      <div className="space-y-4">
        {products.map((p, i) => (
          <div key={i}>

            <div className="flex justify-between items-center">

              <div className="flex items-center gap-4">
                <img
                  src={p.img}
                  className="w-12 h-12 rounded-lg object-cover"
                />

                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {p.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {p.sold}
                  </p>
                </div>
              </div>

              <p className="font-semibold text-gray-900">
                {p.price}
              </p>

            </div>

            {i !== products.length - 1 && (
              <div className="border-t border-gray-200 mt-4"></div>
            )}

          </div>
        ))}
      </div>

    </div>
  );
}