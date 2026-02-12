import React, { useMemo, useState } from "react";

export default function CurriculumTable({ initialData }) {
  const [activeYear, setActiveYear] = useState("firstYear");
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState(initialData);

  const currentData = data?.[activeYear];

  const getTotals = (subjects) =>
    (subjects || []).reduce(
      (acc, sub) => ({
        lec: acc.lec + Number(sub.lec || 0),
        lab: acc.lab + Number(sub.lab || 0),
        units: acc.units + Number(sub.units || 0),
      }),
      { lec: 0, lab: 0, units: 0 }
    );

  const handleInputChange = (semKey, index, field, value) => {
    setData((prev) => {
      const next = structuredClone(prev);
      next[activeYear][semKey][index][field] = value;
      return next;
    });
  };

  const renderTable = (semesterData, semKey, title) => {
    const totals = getTotals(semesterData);

    return (
      <div className="flex-1 min-w-0">
        <h3 className="text-center text-[#555] text-[0.85rem] mb-4 uppercase tracking-widest">
          {title}
        </h3>

        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[560px] table-fixed border-collapse text-[0.8rem]">
            <colgroup>
              <col className="w-[18%]" />
              <col className="w-[52%]" />
              <col className="w-[10%]" />
              <col className="w-[10%]" />
              <col className="w-[10%]" />
            </colgroup>

            <thead>
              <tr>
                <th className="border border-[#e0e0e0] bg-[#f9f9f9] text-[#666] font-bold uppercase py-2 px-2 text-center whitespace-nowrap">
                  CODE
                </th>
                <th className="border border-[#e0e0e0] bg-[#f9f9f9] text-[#666] font-bold uppercase py-2 px-2 text-center whitespace-nowrap">
                  TITLE
                </th>
                <th className="border border-[#e0e0e0] bg-[#f9f9f9] text-[#666] font-bold uppercase py-2 px-2 text-center whitespace-nowrap">
                  LEC
                </th>
                <th className="border border-[#e0e0e0] bg-[#f9f9f9] text-[#666] font-bold uppercase py-2 px-2 text-center whitespace-nowrap">
                  LAB
                </th>
                <th className="border border-[#e0e0e0] bg-[#f9f9f9] text-[#666] font-bold uppercase py-2 px-2 text-center whitespace-nowrap">
                  UNITS
                </th>
              </tr>
            </thead>

            <tbody>
              {(semesterData || []).map((sub, i) => (
                <tr key={i}>
                  <td className="border border-[#e0e0e0] py-2 px-2 text-center text-[#444] whitespace-nowrap">
                    {isEditing ? (
                      <input
                        className="w-full min-w-0 px-2 py-1 border border-[#ccc] rounded text-[0.8rem] text-center"
                        value={sub.code || ""}
                        onChange={(e) =>
                          handleInputChange(semKey, i, "code", e.target.value)
                        }
                      />
                    ) : (
                      sub.code
                    )}
                  </td>

                  <td className="border border-[#e0e0e0] py-2 px-2 text-[#444] text-left font-medium break-words">
                    {isEditing ? (
                      <input
                        className="w-full min-w-0 px-2 py-1 border border-[#ccc] rounded text-[0.8rem]"
                        value={sub.title || ""}
                        onChange={(e) =>
                          handleInputChange(semKey, i, "title", e.target.value)
                        }
                      />
                    ) : (
                      sub.title
                    )}
                  </td>

                  <td className="border border-[#e0e0e0] py-2 px-2 text-center text-[#444] whitespace-nowrap">
                    {isEditing ? (
                      <input
                        type="number"
                        className="w-full min-w-0 px-2 py-1 border border-[#ccc] rounded text-center text-[0.8rem]"
                        value={sub.lec ?? ""}
                        onChange={(e) =>
                          handleInputChange(semKey, i, "lec", e.target.value)
                        }
                      />
                    ) : (
                      sub.lec
                    )}
                  </td>

                  <td className="border border-[#e0e0e0] py-2 px-2 text-center text-[#444] whitespace-nowrap">
                    {isEditing ? (
                      <input
                        type="number"
                        className="w-full min-w-0 px-2 py-1 border border-[#ccc] rounded text-center text-[0.8rem]"
                        value={sub.lab ?? ""}
                        onChange={(e) =>
                          handleInputChange(semKey, i, "lab", e.target.value)
                        }
                      />
                    ) : (
                      sub.lab
                    )}
                  </td>

                  <td className="border border-[#e0e0e0] py-2 px-2 text-center text-[#444] whitespace-nowrap">
                    {isEditing ? (
                      <input
                        type="number"
                        className="w-full min-w-0 px-2 py-1 border border-[#ccc] rounded text-center text-[0.8rem]"
                        value={sub.units ?? ""}
                        onChange={(e) =>
                          handleInputChange(semKey, i, "units", e.target.value)
                        }
                      />
                    ) : (
                      sub.units
                    )}
                  </td>
                </tr>
              ))}
            </tbody>

            <tfoot>
              <tr>
                <td colSpan={2} className="border border-[#e0e0e0] py-2 px-2" />
                <td className="border border-[#e0e0e0] py-2 px-2 text-center text-[#444] font-medium">
                  {totals.lec}
                </td>
                <td className="border border-[#e0e0e0] py-2 px-2 text-center text-[#444] font-medium">
                  {totals.lab}
                </td>
                <td className="border border-[#e0e0e0] py-2 px-2 text-center text-[#444] font-medium">
                  {totals.units}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  };

  const yearKeys = useMemo(
    () => ["firstYear", "secondYear", "thirdYear", "fourthYear"],
    []
  );
  const yearLabels = useMemo(
    () => ["First Year", "Second Year", "Third Year", "Fourth Year"],
    []
  );

  if (!currentData) return null;

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2.5 mb-6">
        {yearKeys.map((year, idx) => (
          <button
            key={year}
            onClick={() => !isEditing && setActiveYear(year)}
            className={[
              "px-4 py-2 rounded-md border text-sm font-medium transition-all duration-200 focus:outline-none",
              isEditing ? "opacity-60 cursor-not-allowed" : "cursor-pointer",
              activeYear === year
                ? "bg-[#2E5A31] text-white border-[#244626] shadow-md"
                : "bg-white text-gray-500 border-gray-300 hover:bg-gray-100",
            ].join(" ")}
          >
            {yearLabels[idx]}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.05)] p-5 min-h-[550px] overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-6">
          {renderTable(currentData.firstSem, "firstSem", "FIRST SEMESTER")}
          <div className="hidden lg:block w-px bg-[#eee] my-2.5 shrink-0" />
          {renderTable(currentData.secondSem, "secondSem", "SECOND SEMESTER")}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        {!isEditing ? (
          <button
            className="bg-[#2e5a31] text-white px-10 py-2.5 rounded hover:bg-[#244626]"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        ) : (
          <div className="flex gap-2.5">
            <button
              className="bg-[#d9534f] text-white px-10 py-2.5 rounded hover:bg-[#c9302c]"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
            <button
              className="bg-[#2e5a31] text-white px-10 py-2.5 rounded hover:bg-[#244626]"
              onClick={() => setIsEditing(false)}
            >
              Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
