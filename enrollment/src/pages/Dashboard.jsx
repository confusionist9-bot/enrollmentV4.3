import React from 'react'
import { useEffect, useState } from 'react'
import NavLinkBtn from '../components/NavLinkBtn'
import logo from '../assets/iitilogo.png'
import Modal from '../components/Modal'
import StudentsTable from '../components/StudentsTable'
import api from "../lib/axios";
import toast from "react-hot-toast";

function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await api.get("/students");
        console.log(res.data);
        setStudents(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.log("Error fetching students");
        console.log(error.response);
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load students");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

    return (

        <>
            

            <button
                onClick={() => setSidebarOpen(true)}
                className="md:hidden fixed top-4 left-4 z-50 p-5 rounded bg-white/80 text-black hover:bg-white text-3xl"
            >
                ☰
            </button>

            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <aside
                className={`
          fixed md:sticky top-0 left-0 z-50
          h-screen w-80 sm:w-52 md:w-52 lg:w-80
          bg-white border-r border-gray-200
          p-5 flex flex-col
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
            >
                <button
                    onClick={() => setSidebarOpen(false)}
                    className="md:hidden absolute top-4 right-4 p-2 rounded hover:bg-gray-100 text-3xl"
                >
                    ✕
                </button>

                <div className="flex flex-col items-center mb-12">
                    <h1 className="text-3xl font-bold">IITI</h1>
                    <h3 className="text-sm text-gray-500">Enrollment System</h3>
                </div>

                <nav className="flex-1">
                    <ul className="space-y-2">
                        <NavLinkBtn />
                    </ul>
                </nav>

                <div className="flex mt-auto p-4 items-center justify-center rounded border border-gray-200">
                    <span className="text-lg text-gray-600">Log out</span>
                </div>
            </aside>

            <main className="flex-1 overflow-x-hidden">
                <header>
                    <div className="flex flex-row-reverse p-4 items-center w-full h-25 bg-[url('/header.jpg')] bg-cover bg-center">
                        <img src={logo} className="w-20 h-20" />
                        <h3 className='text-lg text-white mr-2'>
                            INSTITUTE OF INFORMATION TECHNOLOGY AND INNOVATION - STUDENT PORTAL
                        </h3>
                    </div>
                </header>

                <section className="flex flex-col md:bg-[url('/logo.png')] bg-no-repeat bg-center bg-contain mt-4 m-6 sm:mt-12 md:m-12 gap-4">
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold">Student Summary</h1>
                        <p className="text-sm">Overview of current student enrollment status.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
                        <div
                            onClick={() => openModal("New Students")}
                            className="cursor-pointer flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-4 md:p-6 min-h-40 hover:shadow-md transition"
                        >
                            <div className="w-fit rounded-full px-4 py-1 bg-gray-300">
                                <span className="text-sm md:text-base text-gray-600">New Students</span>
                            </div>
                            <div className="mt-6">
                                <span className="text-2xl md:text-3xl font-bold">1000</span>
                                <p className="text-sm text-gray-500">Registered</p>
                            </div>
                        </div>

                        <div
                            onClick={() => openModal("Enrolled Students")}
                            className="cursor-pointer flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-4 md:p-6 min-h-40 hover:shadow-md transition"
                        >
                            <div className="w-fit rounded-full px-4 py-1 bg-green-100">
                                <span className="text-sm md:text-base text-green-700">Enrolled</span>
                            </div>
                            <div className="mt-6">
                                <span className="text-2xl md:text-3xl font-bold">100</span>
                                <p className="text-sm text-gray-500">Enrolled Students</p>
                            </div>
                        </div>

                        <div
                            onClick={() => openModal("Pending Students")}
                            className="cursor-pointer flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-4 md:p-6 min-h-40 hover:shadow-md transition"
                        >
                            <div className="w-fit rounded-full px-4 py-1 bg-yellow-100">
                                <span className="text-sm md:text-base text-yellow-600">Pending</span>
                            </div>
                            <div className="mt-6">
                                <span className="text-2xl md:text-3xl font-bold">900</span>
                                <p className="text-sm text-gray-500">Pending Students</p>
                            </div>
                        </div>

                        <div
                            onClick={() => openModal("Irregular Students")}
                            className="cursor-pointer flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-4 md:p-6 min-h-40 hover:shadow-md transition"
                        >
                            <div className="w-fit rounded-full px-4 py-1 bg-red-100">
                                <span className="text-sm md:text-base text-red-600">Irregular</span>
                            </div>
                            <div className="mt-6">
                                <span className="text-2xl md:text-3xl font-bold">30</span>
                                <p className="text-sm text-gray-500">Irregular Students</p>
                            </div>
                        </div>

                    </div>

                    <div className="flex">
                        <h1 className="text-2xl font-bold">Student List</h1>
                    </div>
                    <div>
                        {loading ? (
                            <div className="card y-0 text-center text-2xl font-bold bg-[#2E522A] text-white">Loading Student Records...</div>
                        ) : (
                            <StudentsTable students={students} className="fixed-header"/>
                        )}
                    </div>
                </section>

            </main>

            <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={modalTitle}>
                <div className="flex flex-col gap-4 p-4 max-h-[80vh] overflow-y-auto">
                    <input
                        type="search"
                        placeholder="Search"
                        className="rounded border border-gray-300 p-4 w-full"
                    />
                    <StudentsTable students={students} />
                </div>
            </Modal>
        </>
    )
}

export default Dashboard