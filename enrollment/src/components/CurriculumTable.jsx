import React, { useState } from "react";

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
            <div className="flex-1 px-0 sm:px-4">
                <h3 className="text-center text-[#555] text-[0.85rem] mb-4 uppercase tracking-widest">
                    {title}
                </h3>

                <div className="w-full overflow-x-auto">
                    <table className="min-w-130 w-full border-collapse text-[0.8rem]">
                        <thead>
                            <tr>
                                <th className="w-[15%] border border-[#e0e0e0] bg-[#f9f9f9] text-[#666] font-bold uppercase py-2 px-1 text-center">
                                    CODE
                                </th>
                                <th className="w-[55%] border border-[#e0e0e0] bg-[#f9f9f9] text-[#666] font-bold uppercase py-2 px-1 text-center">
                                    TITLE
                                </th>
                                <th className="w-[10%] border border-[#e0e0e0] bg-[#f9f9f9] text-[#666] font-bold uppercase py-2 px-1 text-center">
                                    LEC
                                </th>
                                <th className="w-[10%] border border-[#e0e0e0] bg-[#f9f9f9] text-[#666] font-bold uppercase py-2 px-1 text-center">
                                    LAB
                                </th>
                                <th className="w-[10%] border border-[#e0e0e0] bg-[#f9f9f9] text-[#666] font-bold uppercase py-2 px-1 text-center">
                                    UNITS
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {(semesterData || []).map((sub, i) => (
                                <tr key={i}>
                                    <td className="border border-[#e0e0e0] py-2 px-1 text-center text-[#444]">
                                        {isEditing ? (
                                            <input
                                                className="w-full px-2 py-1 border border-[#ccc] rounded text-[0.8rem]"
                                                value={sub.code}
                                                onChange={(e) =>
                                                    handleInputChange(semKey, i, "code", e.target.value)
                                                }
                                            />
                                        ) : (
                                            sub.code
                                        )}
                                    </td>

                                    <td className="border border-[#e0e0e0] py-2 px-1 text-[#444] text-left pl-4 font-medium">
                                        {isEditing ? (
                                            <input
                                                className="w-full px-2 py-1 border border-[#ccc] rounded text-[0.8rem]"
                                                value={sub.title}
                                                onChange={(e) =>
                                                    handleInputChange(semKey, i, "title", e.target.value)
                                                }
                                            />
                                        ) : (
                                            sub.title
                                        )}
                                    </td>

                                    <td className="border border-[#e0e0e0] py-2 px-1 text-center text-[#444]">
                                        {isEditing ? (
                                            <input
                                                type="number"
                                                className="w-full px-2 py-1 border border-[#ccc] rounded text-center text-[0.8rem]"
                                                value={sub.lec}
                                                onChange={(e) =>
                                                    handleInputChange(semKey, i, "lec", e.target.value)
                                                }
                                            />
                                        ) : (
                                            sub.lec
                                        )}
                                    </td>

                                    <td className="border border-[#e0e0e0] py-2 px-1 text-center text-[#444]">
                                        {isEditing ? (
                                            <input
                                                type="number"
                                                className="w-full px-2 py-1 border border-[#ccc] rounded text-center text-[0.8rem]"
                                                value={sub.lab}
                                                onChange={(e) =>
                                                    handleInputChange(semKey, i, "lab", e.target.value)
                                                }
                                            />
                                        ) : (
                                            sub.lab
                                        )}
                                    </td>

                                    <td className="border border-[#e0e0e0] py-2 px-1 text-center text-[#444]">
                                        {isEditing ? (
                                            <input
                                                type="number"
                                                className="w-full px-2 py-1 border border-[#ccc] rounded text-center text-[0.8rem]"
                                                value={sub.units}
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
                                <td colSpan="2" className="border border-[#e0e0e0] py-2 px-1" />
                                <td className="border border-[#e0e0e0] py-2 px-1 text-center text-[#444]">
                                    {totals.lec}
                                </td>
                                <td className="border border-[#e0e0e0] py-2 px-1 text-center text-[#444]">
                                    {totals.lab}
                                </td>
                                <td className="border border-[#e0e0e0] py-2 px-1 text-center text-[#444]">
                                    {totals.units}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        );
    };

    const yearKeys = ["firstYear", "secondYear", "thirdYear", "fourthYear"];
    const yearLabels = ["First Year", "Second Year", "Third Year", "Fourth Year"];

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

            <div className="bg-white rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.05)] p-5 min-h-137.5">
                <div className="flex flex-col lg:flex-row gap-6">
                    {renderTable(currentData.firstSem, "firstSem", "FIRST SEMESTER")}
                    <div className="hidden lg:block w-px bg-[#eee] my-2.5" />
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
