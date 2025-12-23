import { Certification } from "@/types/certification";

export default function CertificationTable({
  certifications,
}: {
  certifications: Certification[];
}) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
      <table className="w-full text-left">
        <thead className="bg-slate-100 text-slate-600 text-xs uppercase tracking-wider font-semibold">
          <tr>
            <th className="px-6 py-4">Identification</th>
            <th className="px-6 py-4">Cost</th>
            <th className="px-6 py-4">Expiration</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4 text-right">Registered</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-200 text-sm">
          {certifications.map((c) => (
            <tr
              key={c.id}
              className="hover:bg-indigo-50/60 transition-colors"
            >
              <td className="px-6 py-5">
                <div className="font-semibold text-slate-900">
                  {c.name}
                </div>
                <div className="text-xs text-slate-500 mt-1 line-clamp-1">
                  {c.description}
                </div>
              </td>

              <td className="px-6 py-5 font-mono text-indigo-600">
                ${c.cost.toLocaleString()}
              </td>

              <td className="px-6 py-5 text-xs text-slate-500 font-mono">
                {new Date(c.expirationDate).toLocaleDateString()}
              </td>

              <td className="px-6 py-5">
                <span
                  className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full ${
                    c.status === "ACTIVE"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-rose-100 text-rose-700"
                  }`}
                >
                  {c.status}
                </span>
              </td>

              <td className="px-6 py-5 text-right text-xs text-slate-500 font-mono">
                {new Date(c.registrationDate).toLocaleDateString()}
              </td>
            </tr>
          ))}

          {certifications.length === 0 && (
            <tr>
              <td
                colSpan={5}
                className="px-6 py-14 text-center text-slate-400 italic text-xs tracking-wide"
              >
                NO CERTIFICATIONS FOUND
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
