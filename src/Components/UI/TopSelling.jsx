import wire from "../../assets/images/Wire.png";
import gaming from "../../assets/images/Gming.png";
import smart from "../../assets/images/Smart.png";
import usb from "../../assets/images/usb.png";
import port from "../../assets/images/port.png";

export default function TopSelling() {
  return (
    <div className="bg-white rounded-lg border border-gray-200">
      
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="font-semibold">Top Selling Products</h2>
        <button className="text-sm border px-3 py-1 rounded">Today</button>
      </div>

      <div className="divide-y divide-gray-200">

        <Item img={wire} name="Wireless Earphones" price="$89" units="1,250 Units" percent="18%" color="text-red-500 border-red-300" />

        <Item img={gaming} name="Gaming Joy Stick" price="$49" units="5,420 Units" percent="32%" color="text-red-500 border-red-300" />

        <Item img={smart} name="Smart Watch Pro" price="$98" units="862 Units" percent="22%" color="text-blue-500 border-blue-300" />

        <Item img={usb} name="USB-C Fast Charger" price="$35" units="3,200 Units" percent="28%" color="text-green-500 border-green-300" />

        <Item img={port} name="Portable Bluetooth Speaker" price="$65" units="2,890 Units" percent="25%" color="text-yellow-500 border-yellow-300" />

      </div>

    </div>
  );
}

function Item({ img, name, price, units, percent, color }) {
  return (
    <div className="flex justify-between items-center p-4">
      
      <div className="flex items-center gap-3">
        <img src={img} className="w-12 h-12 rounded-md bg-gray-100 p-1" />
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-gray-500">{price} • {units}</p>
        </div>
      </div>

      <span className={`text-xs px-2 py-1 rounded border ${color}`}>
        {percent}
      </span>

    </div>
  );
}