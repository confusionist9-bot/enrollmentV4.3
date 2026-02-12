import React, { useState } from "react";
import NavLinkBtn from "../components/NavLinkBtn";
import logo from "../assets/iitilogo.png";
import { curriculumData } from "../components/CurriculumData";
import CurriculumTable from "../components/CurriculumTable";

function Curriculum() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
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
                            INSTITUTE OF INFORMATION TECHNOLOGY AND INNOVATION
                        </h3>
                    </div>
                </header>

                <div className="flex flex-col md:bg-[url('/logo.png')] bg-no-repeat bg-center bg-contain mt-4 m-6 sm:mt-12 md:m-12 gap-4">

                    <section className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold">Curriculum</h1>
                        <div className="flex flex-col gap-2 ml-auto items-center">
                            <h3 className="text-lg">Updated List as of</h3>
                            <span className="text-2xl font-bold">2025</span>
                        </div>
                    </section>

                    <section className="flex bg-white/70 rounded p-6 w-full">
                        <CurriculumTable initialData={curriculumData} />
                    </section>
                </div>

            </main>
        </>
    )
}

export default Curriculum