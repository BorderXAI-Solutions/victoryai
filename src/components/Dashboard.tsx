import React from 'react';
import { BookOpen, Palette, Activity, Heart } from 'lucide-react';

export const Dashboard = () => {
  return (
    <div id="dashboard" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Child's Progress Overview
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            A holistic view of your child's development
          </p>
        </div>

        <div className="mt-12 relative">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-center">
                    <BookOpen className="h-8 w-8 text-blue-600" />
                    <h3 className="ml-3 text-xl font-medium text-gray-900">Academics</h3>
                  </div>
                  <p className="mt-2 text-4xl font-semibold text-blue-600">92%</p>
                  <p className="mt-2 text-sm text-gray-500">Overall performance</p>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <div className="flex items-center">
                    <Palette className="h-8 w-8 text-purple-600" />
                    <h3 className="ml-3 text-xl font-medium text-gray-900">Arts</h3>
                  </div>
                  <p className="mt-2 text-4xl font-semibold text-purple-600">87%</p>
                  <p className="mt-2 text-sm text-gray-500">Creative expression</p>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <div className="flex items-center">
                    <Activity className="h-8 w-8 text-green-600" />
                    <h3 className="ml-3 text-xl font-medium text-gray-900">Sports</h3>
                  </div>
                  <p className="mt-2 text-4xl font-semibold text-green-600">85%</p>
                  <p className="mt-2 text-sm text-gray-500">Physical development</p>
                </div>

                <div className="bg-red-50 rounded-lg p-6">
                  <div className="flex items-center">
                    <Heart className="h-8 w-8 text-red-600" />
                    <h3 className="ml-3 text-xl font-medium text-gray-900">EQ</h3>
                  </div>
                  <p className="mt-2 text-4xl font-semibold text-red-600">90%</p>
                  <p className="mt-2 text-sm text-gray-500">Emotional intelligence</p>
                </div>
              </div>

              <div className="mt-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-medium text-gray-900">Recent Activities</h4>
                  <div className="mt-4 space-y-4">
                    {[
                      'Completed Advanced Mathematics Module',
                      'Art Exhibition Participation',
                      'Swimming Competition Achievement',
                      'Leadership Workshop Completion'
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-[#F4B223] rounded-full"></div>
                        <span className="ml-3 text-gray-600">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};