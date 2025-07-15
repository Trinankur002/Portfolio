import { useState } from 'react';
import { SkillsData, SkillCategories, Skill } from '../data/SkillsData';

interface SkillCardProps {
  skill: Skill;
}

function SkillCard({ skill }: SkillCardProps) {
  const getSkillLevelText = (level: number) => {
    switch (level) {
      case 5: return 'Expert';
      case 4: return 'Advanced';
      case 3: return 'Intermediate';
      case 2: return 'Beginner';
      case 1: return 'Learning';
      default: return 'Unknown';
    }
  };

  const getSkillLevelColor = (level: number) => {
    switch (level) {
      case 5: return 'bg-green-500';
      case 4: return 'bg-teal-500';
      case 3: return 'bg-blue-500';
      case 2: return 'bg-yellow-500';
      case 1: return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors duration-300 group">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-semibold text-white group-hover:text-teal-400 transition-colors">
          {skill.name}
        </h4>
        <span className={`px-2 py-1 text-xs font-medium rounded-full text-white ${getSkillLevelColor(skill.level)}`}>
          {getSkillLevelText(skill.level)}
        </span>
      </div>
      
      {/* Skill Level Bar */}
      <div className="w-full bg-gray-600 rounded-full h-2">
        <div 
          className={`h-2 rounded-full transition-all duration-500 ${getSkillLevelColor(skill.level)}`}
          style={{ width: `${(skill.level / 5) * 100}%` }}
        />
      </div>
    </div>
  );
}

function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const filteredSkills = activeCategory === 'all'
    ? SkillsData
    : SkillsData.filter(skill => skill.category === activeCategory);

  // Show only first 8 skills (2 rows on desktop) when collapsed
  const displayedSkills = isExpanded ? filteredSkills : filteredSkills.slice(0, 8);

  const getSkillsByCategory = (categoryId: string) => {
    return SkillsData.filter(skill => skill.category === categoryId);
  };

  // Reset expansion when category changes
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setIsExpanded(false);
  };

  return (
    <section id="skills" className="py-20 px-8 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-2">
            A comprehensive overview of my technical expertise and the tools I use to build amazing applications
          </p>
          <div className="inline-flex items-center justify-center bg-gray-700 rounded-full px-4 py-1 text-sm text-teal-400 font-medium mt-4">
            {SkillsData.length} Skills in {SkillCategories.length} Categories
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-teal-600 text-white shadow-lg'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
            }`}
          >
            All Skills
          </button>
          {SkillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-teal-600 text-white shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={category.icon} />
              </svg>
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedSkills.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <SkillCard skill={skill} />
              </div>
            ))}
          </div>

          {/* Show More Button - Only when collapsed and has more than 8 skills */}
          {filteredSkills.length > 8 && !isExpanded && (
            <div className="text-center mt-10">
              <button
                onClick={() => setIsExpanded(true)}
                className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 mx-auto"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span>Show All Skills & Categories</span>
                <span className="ml-1 bg-teal-500 text-white text-xs px-2 py-1 rounded-full">
                  +{filteredSkills.length - displayedSkills.length} more
                </span>
              </button>
            </div>
          )}

          {/* Show Less Button for specific categories when expanded */}
          {isExpanded && activeCategory !== 'all' && filteredSkills.length > 8 && (
            <div className="text-center mt-10">
              <button
                onClick={() => setIsExpanded(false)}
                className="px-8 py-3 bg-gray-700 text-teal-400 border border-teal-400 hover:bg-gray-600 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 mx-auto"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
                <span>Show Less Skills</span>
                <span className="ml-1 bg-gray-600 text-white text-xs px-2 py-1 rounded-full">
                  {displayedSkills.length}/{filteredSkills.length}
                </span>
              </button>
            </div>
          )}
        </div>

        {/* Category Overview - Only show when expanded and viewing all skills */}
        {isExpanded && activeCategory === 'all' && (
          <div className="mt-16">
            <div className="text-center mb-12">
              <h4 className="text-3xl font-bold text-white mb-4">Skills by Category</h4>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Detailed breakdown of my expertise across different technology domains
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SkillCategories.map((category, index) => {
                const categorySkills = getSkillsByCategory(category.id);
                const averageLevel = categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length;

                return (
                  <div
                    key={category.id}
                    className="bg-gray-800 p-6 rounded-lg animate-fadeInUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={category.icon} />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white">{category.name}</h4>
                        <p className="text-sm text-gray-400">{categorySkills.length} skills</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{category.description}</p>

                    {/* Average Proficiency */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-400 mb-2">
                        <span>Average Proficiency</span>
                        <span>{averageLevel.toFixed(1)}/5</span>
                      </div>
                      <div className="w-full bg-gray-600 rounded-full h-2">
                        <div
                          className="h-2 bg-teal-500 rounded-full transition-all duration-500"
                          style={{ width: `${(averageLevel / 5) * 100}%` }}
                        />
                      </div>
                    </div>

                    {/* Top Skills in Category */}
                    <div className="flex flex-wrap gap-2">
                      {categorySkills.slice(0, 3).map((skill) => (
                        <span
                          key={skill.name}
                          className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"
                        >
                          {skill.name}
                        </span>
                      ))}
                      {categorySkills.length > 3 && (
                        <span className="px-3 py-1 bg-gray-700 text-gray-400 text-sm rounded-full">
                          +{categorySkills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Show Less Button - Only when expanded */}
            <div className="text-center mt-16">
              <button
                onClick={() => setIsExpanded(false)}
                className="px-8 py-3 bg-gray-700 text-teal-400 border border-teal-400 hover:bg-gray-600 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 mx-auto"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
                <span>Show Less Skills</span>
                <span className="ml-1 bg-gray-600 text-white text-xs px-2 py-1 rounded-full">
                  {displayedSkills.length}/{filteredSkills.length}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default SkillsSection;
