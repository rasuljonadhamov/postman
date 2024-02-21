const ParamsTable = () => {
  return (
    <div className="mt-4">
      <h3 className="text-gray-500">Query Params</h3>
      <table className="border border-slate-400 border-collapse w-full">
        <thead>
          <tr>
            <th className="border border-slate-300"></th>
            <th className="border border-slate-300">Key</th>
            <th className="border border-slate-300">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-300"></td>
            <td className="border border-slate-300 p-2">title</td>
            <td className="border border-slate-300 p-2">Iphone</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ParamsTable;
