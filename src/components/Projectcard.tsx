
export interface ProjectCardProps {
    name: string;
    details: string;
    link: string;
    demoLink?: string;
    techs: string[];
    image?: string;
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
    image,
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
        <div className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group flex flex-col md:flex-row h-full min-h-[280px] md:min-h-[240px]">
            {/* Project Image - Left Side */}
            <div className="relative w-full md:w-1/3 h-48 md:h-auto md:min-h-[240px] bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden p-4">
                {image ? (
                    <img
                        src={image}
                        alt={`${name} screenshot`}
                        className="w-full h-full object-cover object-center rounded-lg group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = target.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                        }}
                    />
                ) : null}
                {/* Fallback placeholder */}
                <div className={`w-full h-full flex items-center justify-center rounded-lg bg-gray-700/50 border-2 border-dashed border-gray-600 ${image ? 'hidden' : 'flex'}`}>
                    <div className="text-center">
                        <svg className="w-16 h-16 text-gray-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        <p className="text-gray-500 text-sm">{name}</p>
                    </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-7 left-7">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(category)}`}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </span>
                </div>

                {/* Status Badge */}
                <div className="absolute top-7 right-7">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
                        {status.replace('-', ' ').toUpperCase()}
                    </span>
                </div>
            </div>

            {/* Project Content - Right Side */}
            <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <h4 className="text-xl font-bold text-teal-400 mb-3">
                        {name}
                    </h4>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                        {details}
                    </p>

                    {/* Highlights */}
                    {highlights && highlights.length > 0 && (
                        <div className="mb-4">
                            <h5 className="text-sm font-semibold text-teal-400 mb-2">Key Features:</h5>
                            <ul className="text-sm text-gray-400 space-y-1">
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

                <div>
                    {/* Technology Tags */}
                    <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                            {techs.slice(0, 6).map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full hover:bg-teal-600 hover:text-white transition-colors cursor-default"
                                >
                                    {tech}
                                </span>
                            ))}
                            {techs.length > 6 && (
                                <span className="px-3 py-1 bg-gray-600 text-gray-400 text-xs rounded-full">
                                    +{techs.length - 6} more
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                        {demoLink && (
                            <a
                                href={demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 bg-teal-600 hover:bg-teal-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                Live Demo
                            </a>
                        )}
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${demoLink ? 'flex-1' : 'w-full'} border-2 border-gray-600 hover:border-teal-400 text-gray-300 hover:text-teal-400 text-center py-2 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2`}
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            Source Code
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projectcard;