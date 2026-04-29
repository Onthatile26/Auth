import mac from "../../assets/images/Mac.png";
import air from "../../assets/images/Air.png";
import ipad from "../../assets/images/Ipad.png";
import smart from "../../assets/images/Smart.png";
import keyboard from "../../assets/images/keybord.png";

export default function RecentSales() {
  return (
    <div className="bg-white rounded-lg border border-gray-200">
      
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="font-semibold">Recent Sales</h2>
        <button className="text-sm border px-3 py-1 rounded">Weekly</button>
      </div>

      <div className="divide-y divide-gray-200">

        <Item img={mac} name="MacBook Pro 16" category="Computers" price="$2,499" status="Completed" />
        <Item img={air} name="AirPods Pro Max" category="Audio" price="$549" status="Processing" />
        <Item img={ipad} name="iPad Air 11" category="Tablets" price="$799" status="Completed" />
        <Item img={smart} name="Apple Watch Ultra" category="Wearables" price="$799" status="Pending" />
        <Item img={keyboard} name="Magic Keyboard" category="Accessories" price="$299" status="Cancelled" />

      </div>

    </div>
  );
}

function Item({ img, name, category, price, status }) {
  const styles = {
    Completed: "bg-green-100 text-green-600",
    Processing: "bg-orange-100 text-orange-500",
    Pending: "bg-yellow-100 text-yellow-600",
    Cancelled: "bg-red-100 text-red-500",
  };

  return (
    <div className="flex justify-between items-center p-4">
      
      <div className="flex items-center gap-3">
        <img src={img} className="w-12 h-12 rounded-md bg-gray-100 p-1" />
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-gray-500">{category} • {price}</p>
        </div>
      </div>

      <span className={`text-xs px-2 py-1 rounded ${styles[status]}`}>
        {status}
      </span>

    </div>
  );
}