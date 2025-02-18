import React from 'react';

export interface ProjectCardProps {
    name: string;
    details: string;
    link: string;
    techs?: string[]
    // pic?: string;
}

function Projectcard({ name, details, link}: ProjectCardProps) {
    return (
        // <div className="project-card border border-gray-300 p-4 mb-4 rounded-lg">
        //     {pic && (
        //         <img
        //             src={pic}
        //             alt={`${name} project`}
        //             className="max-w-full max-h-40 mb-2 block rounded-md"
        //         />
        //     )}
        //     <h3 className="mt-0 mb-2 text-xl font-semibold">{name}</h3>
        //     <p className="mb-2 text-gray-700">{details}</p>
        //     <a
        //         href={link}
        //         target="_blank"
        //         rel="noopener noreferrer"
        //         className="inline-block px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white text-center rounded-md no-underline"
        //     >
        //         View Project
        //     </a>
        // </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow">
            <h4 className="text-2xl font-bold mb-2">{`${name}`}</h4>
            <p className="text-gray-400 mb-4">{details}.</p>
            <a href={`${link}` }className="text-teal-400 hover:underline">View Project</a>
        </div>
    );
}

export default Projectcard;