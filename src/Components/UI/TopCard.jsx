export default function TopCard({ title, amount, change, color, iconBg }) {
  return (
    <div className={`${color} p-5 rounded-lg border border-gray-200`}>
      
      <div className="flex items-center gap-4 mb-3">
        <div className={`${iconBg} text-white p-3 rounded-md`}>
          $
        </div>
        <h3 className="text-sm text-gray-700">{title}</h3>
      </div>

      <h2 className="text-2xl font-bold text-gray-800">{amount}</h2>

      <p className="text-sm text-gray-500 mt-1">{change}</p>
    </div>
  );
}