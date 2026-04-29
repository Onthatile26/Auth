import wire from "../../assets/images/Wire.png";
import usb from "../../assets/images/usb.png";
import phone from "../../assets/images/phone.png";
import port from "../../assets/images/port.png";
import keyboard from "../../assets/images/keybord.png";

export default function LowStock() {
  return (
    <div className="bg-white rounded-lg border border-gray-200">
      
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="font-semibold">Low Stock Products</h2>
        <span className="text-[#e66239] text-sm cursor-pointer">View All</span>
      </div>

      <div className="divide-y divide-gray-200">

        <Item img={wire} name="Wireless Headphones" id="#554433" stock="06" />
        <Item img={usb} name="USB-C Cable Pack" id="#887766" stock="09" />
        <Item img={phone} name="Phone Screen Protector" id="#332211" stock="03" />
        <Item img={port} name="Portable Charger 20000mAh" id="#998877" stock="07" />
        <Item img={keyboard} name="Mechanical Keyboard RGB" id="#665544" stock="02" />

      </div>

    </div>
  );
}

function Item({ img, name, id, stock }) {
  return (
    <div className="flex justify-between items-center p-4">
      
      <div className="flex items-center gap-3">
        <img src={img} className="w-12 h-12 rounded-md bg-gray-100 p-1" />
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-gray-500">ID: {id}</p>
        </div>
      </div>

      <div className="text-right">
        <p className="text-[#e66239] font-semibold">{stock}</p>
        <p className="text-xs text-gray-500">In Stock</p>
      </div>

    </div>
  );
}