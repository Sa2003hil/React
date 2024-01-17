import React from 'react';
import useCourseStore from '../app/courseStore';

function Card() {
    const { courses } = useCourseStore(
        (state) => ({
            courses: state.courses,
            removeCourse: state.removeCourse,
        })
    );

    return (
        <div className='flex w-[100%] m-atuo items-center'>
            {courses.map((course, i) => {
                return (
                    <div key={i} className="w-screen bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="/">
                            <img className="p-8 rounded-xl" src="https://i.ytimg.com/vi/bMknfKXIFA8/maxresdefault.jpg" alt="product_image1" />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="/">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    {course?.title}
                                </h5>
                            </a>
                            <div className="flex items-center mt-2.5 mb-5">
                                {/* Your star SVG icons */}
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                                <a
                                    href="/"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Add to cart
                                </a>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Card;
