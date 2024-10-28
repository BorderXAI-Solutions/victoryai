import React from 'react';
import { Brain, Target, BarChart, Users, BookOpen, Sparkles } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Assessment',
      description: 'Comprehensive evaluation of your child\'s abilities across multiple domains using advanced AI technology.'
    },
    {
      icon: Target,
      title: 'Personalized Strategy',
      description: 'Custom educational plans tailored to your child\'s unique abilities, interests, and goals.'
    },
    {
      icon: BarChart,
      title: 'Progress Tracking',
      description: 'Real-time monitoring and adjustment of educational strategies based on continuous performance data.'
    },
    {
      icon: Users,
      title: 'Expert Coordination',
      description: 'Seamless integration with schools, tutors, and coaches for optimal educational outcomes.'
    },
    {
      icon: BookOpen,
      title: 'Curriculum Optimization',
      description: 'Dynamic adjustment of learning materials and approaches based on your child\'s progress.'
    },
    {
      icon: Sparkles,
      title: 'Talent Development',
      description: 'Identification and nurturing of hidden talents and potential across various domains.'
    }
  ];

  return (
    <div id="features" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A Comprehensive Educational Solution
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Victoria combines cutting-edge AI technology with educational expertise to provide a complete learning ecosystem.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="relative">
                <div className="absolute h-12 w-12 text-indigo-600">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};