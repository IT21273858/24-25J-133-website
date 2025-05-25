
import { CgFileDocument } from "react-icons/cg";

const documents = [
    { name: "Project Charter", link: "/24-25J-133-Proposal_Presentation.pdf" },
    { name: "Proposal Document", link: "/24-25J-133-Proposal_Presentation.pdf" },
    { name: "Checklist Documents", link: "/RETAF_24-25J-133.pdf" },
    { name: "Final Document", link: "/Mobile and Simulation-based Approach to Reduce Dyslexia in Children_untouched_new.pdf" },
];

const Documents = () => {
    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-semibold mb-6 text-blue-600">Project Documents</h1>
            <div className="flex bg-amber-100 rounded-md p- shadow-2xl hover:shadow-amber-900">
                <div className="flex flex-col gap-6 p-2">
                    {documents.map((doc, i) => (
                        <a href={doc.link} target="_blank" rel="noopener noreferrer" className="flex text-gray-400! hover:underline! text-3xl items-center">
                            <div key={i} className="flex flex-row gap-3 items-center hover:text-black!">
                                {doc.name}
                                <CgFileDocument size={25}/>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Documents;
