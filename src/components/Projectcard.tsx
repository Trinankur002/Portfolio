
export interface ProjectCardProps {
    name: string;
    details: string;
    link: string;
    techs?: string[]
    // pic?: string;
}

function Projectcard({ name, details, link}: ProjectCardProps) {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow">
            <h4 className="text-2xl font-bold mb-2">{`${name}`}</h4>
            <p className="text-gray-400 mb-4">{details}.</p>
            <a href={`${link}` }className="text-teal-400 hover:underline">View Project</a>
        </div>
    );
}

export default Projectcard;