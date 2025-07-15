
export interface ProjectCardProps {
    name: string;
    details: string;
    link: string;
    demoLink?: string;
    techs: string[];
    category: 'mobile' | 'backend' | 'frontend' | 'fullstack';
    status: 'completed' | 'in-progress' | 'archived';
    highlights?: string[];
}

function Projectcard({
    name,
    details,
    link,
    demoLink,
    techs,
    category,
    status,
    highlights
}: ProjectCardProps) {
    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'mobile': return 'bg-blue-500';
            case 'backend': return 'bg-green-500';
            case 'frontend': return 'bg-purple-500';
            case 'fullstack': return 'bg-orange-500';
            default: return 'bg-gray-500';
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed': return 'bg-green-600 text-green-100';
            case 'in-progress': return 'bg-yellow-600 text-yellow-100';
            case 'archived': return 'bg-gray-600 text-gray-100';
            default: return 'bg-gray-600 text-gray-100';
        }
    };

    return (
        <div className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group border border-gray-700 hover:border-gray-600 flex flex-col min-h-[400px]">
            {/* Project Header with Category and Status */}
            <div className="flex justify-between items-center px-4 py-3 border-b border-gray-700 bg-gradient-to-r from-gray-800 to-gray-750 flex-shrink-0">
                {/* Category Badge */}
                <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(category)} shadow-sm`}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>

                {/* Status Badge */}
                <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(status)} shadow-sm`}>
                    {status.replace('-', ' ').toUpperCase()}
                </span>
            </div>

            {/* Project Content */}
            <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                    <h4 className="text-lg sm:text-xl font-bold text-teal-400 mb-2 sm:mb-3 group-hover:text-teal-300 transition-colors">
                        {name}
                    </h4>

                    <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                        {details}
                    </p>

                    {/* Highlights */}
                    {highlights && highlights.length > 0 && (
                        <div className="mb-3 sm:mb-4">
                            <h5 className="text-xs sm:text-sm font-semibold text-teal-400 mb-1 sm:mb-2">Key Features:</h5>
                            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
                                {highlights.slice(0, 3).map((highlight, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-teal-400 mr-2">•</span>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <div className="mt-auto">
                    {/* Technology Tags */}
                    <div className="mb-4 sm:mb-6">
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {techs.slice(0, 6).map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-2 sm:px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full hover:bg-teal-600 hover:text-white transition-colors cursor-default"
                                >
                                    {tech}
                                </span>
                            ))}
                            {techs.length > 6 && (
                                <span className="px-2 sm:px-3 py-1 bg-gray-600 text-gray-400 text-xs rounded-full">
                                    +{techs.length - 6} more
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                        {demoLink && (
                            <a
                                href={demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 bg-teal-600 hover:bg-teal-700 hover:shadow-lg text-white text-center py-2.5 px-3 sm:px-4 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 min-h-[40px] transform hover:scale-105"
                            >
                                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                <span className="hidden sm:inline whitespace-nowrap">Live Demo</span>
                                <span className="sm:hidden">Demo</span>
                            </a>
                        )}
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${demoLink ? 'flex-1' : 'w-full'} border-2 border-gray-600 hover:border-teal-400 hover:bg-teal-400/10 text-gray-300 hover:text-teal-400 text-center py-2.5 px-3 sm:px-4 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 min-h-[40px] backdrop-blur-sm`}
                        >
                            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            <span className="hidden sm:inline whitespace-nowrap">Source Code</span>
                            <span className="sm:hidden">Code</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projectcard;