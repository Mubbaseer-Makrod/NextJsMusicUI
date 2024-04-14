'use client'
import React from 'react'
import { BackgroundGradient } from './ui/background-gradient'
import CourseData from '../data/music_courses.json'
import Image from 'next/image'

interface Course {
    "id": number,
    "title": string,
    "slug": string,
    "description": string,
    "price": number,
    "instructor": string,
    "isFeatured": boolean,
}

function FeaturedCourses() {

    const featuredCourses = CourseData.courses.filter(
        (course: Course) => course.isFeatured)
    
  return (
    <div className='py-12 bg-gray-900'>
        <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
        </div>
        <div className='mt-10 mx-8'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center ">
                { featuredCourses && featuredCourses.map((course: Course, index) => (
                    <div className="flex justify-center" key={index}>
                        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 
                            sm:p-10 bg-white dark:bg-zinc-900 h-60">
                            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 ">
                            {course.title}
                            </p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 ">
                            {course.description}
                            </p>
                            <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800 ">
                            <span>Buy now </span>
                            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                                {`$${course.price}`}
                            </span>
                            </button>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
        </div>
        <div className='mt-20 text-center'>
            <button className="px-8 py-2 rounded-full bg-gradient-to-b from-teal-500 to-teal-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
            Gradient
            </button>
        </div>
    </div>
  )
}

export default FeaturedCourses