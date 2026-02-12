import { useEffect, useRef, useState } from "react";
import React from "react";
import stdStyles from '../modules/Student.module.css'

function YearsBtn() {
    const years = ['All', 'First', 'Second', 'Third', 'Fourth'];
    const [activeYear, setActiveYear] = useState('All');
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef} className={stdStyles.customSelect}>
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
            >
                {activeYear} year
                <i class="fa-solid fa-angle-down"></i>
            </button>

            {open && (
                <ul>
                    {years.map((year) => (
                        <li
                            key={year}
                            className={activeYear === year ? stdStyles.activeOption : ""}
                            onClick={() => {
                                setActiveYear(year);
                                setOpen(false);
                            }}
                        >
                            {year} year
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default YearsBtn