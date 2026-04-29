export default function InfoCard({ amount, title, change }) {
  return (
    <div className="bg-white p-5 rounded-lg border border-gray-200">
      
      <h2 className="text-xl font-bold text-gray-800">{amount}</h2>
      <p className="text-gray-600 mt-1">{title}</p>

    
      <div className="border-t border-gray-200 my-4"></div>

      <div className="flex justify-between text-sm">
        <span className="text-green-500">{change}</span>
        <span className="text-[#e66239] cursor-pointer">View</span>
      </div>

    </div>
  );
}