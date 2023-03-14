import React from 'react';

const courses = [
  {
    title: 'Web Development with React',
    instructor: 'John Smith',
    price: '$99.99',
    image: 'https://source.unsplash.com/0JYgd2QuMfw/400x300',
  },
  {
    title: 'Web Development with React',
    instructor: 'John Smith',
    price: '$99.99',
    image: 'https://source.unsplash.com/0JYgd2QuMfw/400x300',
  },
  {
    title: 'Web Development with React',
    instructor: 'John Smith',
    price: '$99.99',
    image: 'https://source.unsplash.com/0JYgd2QuMfw/400x300',
  },
  {
    title: 'Web Development with React',
    instructor: 'John Smith',
    price: '$99.99',
    image: 'https://source.unsplash.com/0JYgd2QuMfw/400x300',
  },
  {
    title: 'Web Development with React',
    instructor: 'John Smith',
    price: '$99.99',
    image: 'https://source.unsplash.com/0JYgd2QuMfw/400x300',
  },
  {
    title: 'Introduction to Python',
    instructor: 'Jane Doe',
    price: '$89.99',
    image: 'https://source.unsplash.com/dyHNRXyV7n8/400x300',
  },
  {
    title: 'Introduction to Python',
    instructor: 'Jane Doe',
    price: '$89.99',
    image: 'https://source.unsplash.com/dyHNRXyV7n8/400x300',
  },
  {
    title: 'Introduction to Python',
    instructor: 'Jane Doe',
    price: '$89.99',
    image: 'https://source.unsplash.com/dyHNRXyV7n8/400x300',
  },
  {
    title: 'Introduction to Python',
    instructor: 'Jane Doe',
    price: '$89.99',
    image: 'https://source.unsplash.com/dyHNRXyV7n8/400x300',
  },
  // Add more course objects as needed
];

const CourseCard = ({ course }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={course.image} alt={course.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{course.title}</div>
        <p className="text-gray-700 text-base">{course.instructor}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{course.price}</span>
      </div>
    </div>
  );
};

const CourseList = () => {
  return (
    <div className="flex flex-wrap -mx-4">
      {courses.map((course, index) => (
        <div className="px-4 mb-8" key={index}>
          <CourseCard course={course} />
        </div>
      ))}
    </div>
  );
};

export default CourseList;
