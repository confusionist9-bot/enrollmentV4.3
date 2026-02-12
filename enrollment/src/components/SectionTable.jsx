function SectionTable() {
    return (
        <div className="rounded border border-gray-300 bg-white">
            <div className="max-h-[70vh] overflow-auto">
                <table className="min-w-250 w-full border-collapse text-left text-lg">
                    <thead className="sticky top-0 z-10 bg-gray-100">
                        <tr>
                            <th className="p-4 font-semibold">Year</th>
                            <th className="p-4 font-semibold">Section</th>
                            <th className="p-4 font-semibold">Regular</th>
                            <th className="p-4 font-semibold">Irregular</th>
                            <th className="p-4 font-semibold">Total</th>
                            <th className="p-4 font-semibold">Capacity</th>
                            <th className="p-4 font-semibold">Schedule</th>
                            <th className="p-4 font-semibold">Status</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y">
                        <tr className="hover:bg-gray-50">
                            <td className="p-4">1</td>
                            <td className="p-4">A</td>
                            <td className="p-4">40</td>
                            <td className="p-4">2</td>
                            <td className="p-4">45</td>
                            <td className="p-4">45</td>
                            <td className="p-4"><i className="fa-solid fa-caret-down"></i></td>
                            <td className="p-4">Balance</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="p-4">1</td>
                            <td className="p-4">A</td>
                            <td className="p-4">40</td>
                            <td className="p-4">2</td>
                            <td className="p-4">45</td>
                            <td className="p-4">45</td>
                            <td className="p-4"><i className="fa-solid fa-caret-down"></i></td>
                            <td className="p-4">Balance</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="p-4">1</td>
                            <td className="p-4">A</td>
                            <td className="p-4">40</td>
                            <td className="p-4">2</td>
                            <td className="p-4">45</td>
                            <td className="p-4">45</td>
                            <td className="p-4"><i className="fa-solid fa-caret-down"></i></td>
                            <td className="p-4">Balance</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="p-4">1</td>
                            <td className="p-4">A</td>
                            <td className="p-4">40</td>
                            <td className="p-4">2</td>
                            <td className="p-4">45</td>
                            <td className="p-4">45</td>
                            <td className="p-4"><i className="fa-solid fa-caret-down"></i></td>
                            <td className="p-4">Balance</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default SectionTable