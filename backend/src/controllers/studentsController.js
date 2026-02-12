import Student from "../models/Student.js";

export async function getAllStudents(req, res) {
  try {
    const { status } = req.query;
    let query = {};
    if (status && status !== 'All students') {
      query = { status };
    }
    const students = await Student.find(query).sort({ createdAt: -1 }); // -1 will sort in desc. order (newest first)
    res.status(200).json(students);
  } catch (error) {
    console.error("Error in getAllStudents controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getStudentById(req, res) {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found!" });
    res.json(student);
  } catch (error) {
    console.error("Error in getStudentById controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getStudentBySection(req, res) {
  try {
    const student = await Student.findBySection(req.params.section);
    if (!student) return res.status(404).json({ message: "Student not found!" });
    res.json(student);
  } catch (error) {
    console.error("Error in getStudentBySection controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createStudent(req, res) {
  try {
    const { title, content } = req.body;
    const student = new Student({ title, content });

    const savedStudent = await student.save();
    res.status(201).json(savedStudent);
  } catch (error) {
    console.error("Error in createStudent controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function updateStudent(req, res) {
  try {
    const { title, content } = req.body;
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      { title, content },
      {
        new: true,
      }
    );

    if (!updatedStudent) return res.status(404).json({ message: "Student not found" });

    res.status(200).json(updatedStudent);
  } catch (error) {
    console.error("Error in updateStudent controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteStudent(req, res) {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) return res.status(404).json({ message: "Student not found" });
    res.status(200).json({ message: "Student deleted successfully!" });
  } catch (error) {
    console.error("Error in deleteStudent controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
