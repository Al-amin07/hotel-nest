

const TableRowLoading = () => {
    return (
   
    <div className="container mx-auto px-4 sm:px-8">
    <div className="py-8">
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead className="animate-pulse">
              <tr>
                {Array.from({ length: 7 }).map((_, index) => (
                  <th
                    key={index}
                    className="px-5 py-3 bg-gray-200 border-b border-gray-300 text-gray-600 text-left text-sm uppercase font-normal"
                  >
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, index) => (
                <tr key={index} className="animate-pulse">
                  <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  </td>
                  <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                  </td>
                  <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                  </td>
                  <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                  </td>
                  <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                  </td>
                  <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                  </td>
                  <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
    );
};

export default TableRowLoading;