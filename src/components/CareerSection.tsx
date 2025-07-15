import { useState } from 'react';
import { CareerData, getTotalExperience, getAllTechnologies, type WorkExperience } from '../data/CareerData';

interface CareerCardProps {
  experience: WorkExperience;
  index: number;
}

function CareerCard({ experience, index }: CareerCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'full-time':
        return 'bg-green-600';
      case 'part-time':
        return 'bg-blue-600';
      case 'contract':
        return 'bg-yellow-600';
      case 'internship':
        return 'bg-purple-600';
      case 'volunteer':
        return 'bg-orange-600';
      default:
        return 'bg-gray-600';
    }
  };

  const getTypeText = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ');
  };

  return (
    <div 
      className="relative animate-fadeInUp"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Timeline connector */}
      {index < CareerData.length - 1 && (
        <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-teal-400 to-gray-600 z-0"></div>
      )}
      
      <div className="relative bg-gray-800 rounded-lg p-6 ml-14 hover:bg-gray-750 transition-all duration-300 group border border-gray-700 hover:border-teal-400/30">
        {/* Timeline dot */}
        <div className="absolute -left-14 top-6 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center shadow-lg ring-4 ring-gray-900 group-hover:ring-teal-400/20 transition-all duration-300">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
          </svg>
        </div>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
              {experience.position}
            </h3>
            <div className="flex items-center space-x-2 mt-1">
              <p className="text-teal-400 font-semibold">{experience.company}</p>
              {experience.isRemote && (
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-blue-600 text-white rounded-full">
                  Remote
                </span>
              )}
            </div>
            <p className="text-gray-400 text-sm mt-1">
              {experience.location} • {experience.duration}
            </p>
          </div>
          <div className="flex items-center space-x-2 mt-2 sm:mt-0">
            <span className={`inline-flex items-center px-3 py-1 text-xs font-medium text-white rounded-full ${getTypeColor(experience.type)}`}>
              {getTypeText(experience.type)}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="mb-4">
          <ul className="space-y-2">
            {(isExpanded ? experience.description : experience.description.slice(0, 2)).map((desc, idx) => (
              <li key={idx} className="text-gray-300 text-sm flex items-start">
                <span className="text-teal-400 mr-2 mt-1.5 flex-shrink-0">•</span>
                <span>{desc}</span>
              </li>
            ))}
          </ul>
          
          {experience.description.length > 2 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-teal-400 hover:text-teal-300 text-sm font-medium mt-2 transition-colors"
            >
              {isExpanded ? 'Show Less' : 'Show More'}
            </button>
          )}
        </div>

        {/* Technologies */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-700 text-gray-300 rounded-md hover:bg-gray-600 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Achievements */}
        {experience.achievements && experience.achievements.length > 0 && isExpanded && (
          <div>
            <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Achievements:</h4>
            <ul className="space-y-1">
              {experience.achievements.map((achievement, idx) => (
                <li key={idx} className="text-gray-300 text-sm flex items-start">
                  <span className="text-yellow-400 mr-2 mt-1.5 flex-shrink-0">★</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

function CareerSection() {
  const totalExperience = getTotalExperience();
  const allTechnologies = getAllTechnologies();

  return (
    <section id="career" className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">Career Journey</h3>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-6 px-4 sm:px-0">
            My professional experience in full-stack development, from building robust applications to mentoring aspiring developers
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="inline-flex items-center justify-center bg-gray-700 rounded-full px-4 py-2 text-sm text-teal-400 font-medium">
              {totalExperience} Experience
            </div>
            <div className="inline-flex items-center justify-center bg-gray-700 rounded-full px-4 py-2 text-sm text-teal-400 font-medium">
              {CareerData.length} Positions
            </div>
            <div className="inline-flex items-center justify-center bg-gray-700 rounded-full px-4 py-2 text-sm text-teal-400 font-medium">
              {allTechnologies.length}+ Technologies
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="space-y-8">
            {CareerData.map((experience, index) => (
              <CareerCard
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Technology Summary */}
        <div className="mt-12 sm:mt-16 bg-gray-800 rounded-lg p-6">
          <h4 className="text-xl font-bold text-white mb-4 text-center">Technologies I've Worked With</h4>
          <div className="flex flex-wrap justify-center gap-2">
            {allTechnologies.map((tech, index) => (
              <span
                key={tech}
                className="inline-flex items-center px-3 py-1 text-sm font-medium bg-gray-700 text-gray-300 rounded-full hover:bg-teal-600 hover:text-white transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerSection;
