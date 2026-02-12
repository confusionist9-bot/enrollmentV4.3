import React from 'react'
import { useEffect, useState } from 'react'
import NavLinkBtn from '../components/NavLinkBtn'
import logo from '../assets/iitilogo.png'
import SectionTable from '../components/SectionTable';

function SectionList() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [selected, setSelected] = useState("All");
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
                    <div className="flex">
                        <h1 className="text-2xl font-bold">Section List</h1>
                    </div>

                    <div className="flex flex-col p-8 gap-4 bg-white h-auto">
                        <div className='flex flex-row'>
                            <input type="search" placeholder="Search" className="w-100 p-4 rounded border border-gray-400 "></input>
                        </div>
                        <div className="flex">
                            {["All", "Balance", "In Progress", "Overloaded"].map((item) => (
                                <label
                                    key={item}
                                    className={`px-3.5 py-2 border rounded-md cursor-pointer mr-2 transition ${selected === item ? "bg-[#2E522A] text-white border-[#2E522A]" : "border-[#ccc] text-gray-700"}`}
                                >
                                    <input
                                        type="radio"
                                        name="status"
                                        value={item}
                                        checked={selected === item}
                                        onChange={() => setSelected(item)}
                                        className="sr-only"
                                    />
                                    {item}
                                </label>
                            ))}
                        </div>
                    </div>
                    <SectionTable />
                </section>
            </main>
        </>
    )
}

export default SectionList