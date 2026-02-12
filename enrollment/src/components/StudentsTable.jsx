function StudentsTable({ students }) {
  return (
    <div className="rounded border border-gray-300 bg-white">
      <div className="max-h-[70vh] overflow-auto">
        <table className="min-w-250 w-full border-collapse text-left text-lg">
          <thead className="sticky top-0 z-10 bg-gray-100">
            <tr>
              <th className="p-4 font-semibold">Student Number</th>
              <th className="p-4 font-semibold">Student Name</th>
              <th className="p-4 font-semibold">Year</th>
              <th className="p-4 font-semibold">Section</th>
              <th className="p-4 font-semibold">Schedule</th>
              <th className="p-4 font-semibold">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {students.map(student => (
              <tr key={student._id} className="hover:bg-gray-50">
                <td className="p-4">{student.student_number}</td>
                <td className="p-4">{student.name}</td>
                <td className="p-4">{student.year}</td>
                <td className="p-4">{student.section}</td>
                <td className="p-4"><i className="fa-solid fa-caret-down"></i></td>
                <td className="p-4">{student.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default StudentsTable
