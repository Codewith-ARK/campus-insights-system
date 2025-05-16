import React from 'react'
import { LuSearch } from 'react-icons/lu';

export default function DashboardFilter() {
  const courseOptions = ['CS-101', 'CS-104', 'MTH-310', 'ENG-201'];
  const semesterOptions = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];
  return (
    <div className='grid grid-cols-4 gap-3 md:gap-6'>
      <FilterDropdown label={"Courses"} options={courseOptions} />
      <FilterDropdown label={"Semester"} options={semesterOptions} />
      <SearchBar />
    </div>
  )
}

function FilterDropdown({ label, options }) {
  return (
    <fieldset className="fieldset col-span-2 md:col-span-1">
      <legend className="fieldset-legend text-base">{label}</legend>
      <select defaultValue="Pick a browser" className="select w-full">
        {options.map((item, index) => <option value={item} key={index}>{item}</option>)}
      </select>
    </fieldset>
  )
}

function SearchBar({ }) {
  return (
    <fieldset className="fieldset col-span-4 md:col-span-2">
      <legend className="fieldset-legend text-base">Search</legend>
      <label className="input w-full">
        <LuSearch size={18} />
        <input id='search-input' type="search" className="grow" placeholder="Search by course, instructor or keyword" />
      </label>
    </fieldset>
  )
}