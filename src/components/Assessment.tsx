import React from 'react';
import { CheckCircle } from 'lucide-react';

export const Assessment = () => {
  const assessmentAreas = [
    'Academic Performance',
    'Learning Style Analysis',
    'Cognitive Development',
    'Social Skills',
    'Creative Abilities',
    'Physical Development',
    'Emotional Intelligence',
    'Special Talents'
  ];

  return (
    <div id="assessment" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Comprehensive Assessment
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              Our AI-powered assessment platform evaluates your child across multiple dimensions to create a complete picture of their abilities and potential.
            </p>
            <div className="mt-8">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {assessmentAreas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="ml-2 text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-lg p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Start Your Child's Assessment</h3>
                  <form className="mt-4 space-y-4">
                    <div>
                      <label htmlFor="childName" className="block text-sm font-medium text-gray-700">
                        Child's Name
                      </label>
                      <input
                        type="text"
                        id="childName"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                        Age
                      </label>
                      <input
                        type="number"
                        id="age"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="grade" className="block text-sm font-medium text-gray-700">
                        Grade Level
                      </label>
                      <select
                        id="grade"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      >
                        <option>Select grade</option>
                        <option>Pre-K</option>
                        <option>Kindergarten</option>
                        <option>1st Grade</option>
                        <option>2nd Grade</option>
                        <option>3rd Grade</option>
                        <option>4th Grade</option>
                        <option>5th Grade</option>
                        <option>6th Grade</option>
                        <option>7th Grade</option>
                        <option>8th Grade</option>
                        <option>9th Grade</option>
                        <option>10th Grade</option>
                        <option>11th Grade</option>
                        <option>12th Grade</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Begin Assessment
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};