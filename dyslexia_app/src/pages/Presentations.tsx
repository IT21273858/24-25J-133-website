
import { RiSlideshow2Line } from "react-icons/ri";

const presentations = [
    { name: "Proposal Presentation", link: "/24-25J-133- Progrss Presentation-updated2.pptx" },
    { name: "Progress Presentation 1", link: "/24-25J-133- Proposal Presentation.pptx" },
    { name: "Progress Presentation 2", link: "/24-25J-133- Progrss Presentation.pptx" },
    { name: "Final Presentation", link: "/24-25J-133- Proposal Presentation.pptx" },
];

const Presentations = () => {
    return (
        <div className="p-8 max-w-4xl mx-auto h-screen">
            <h1 className="text-3xl font-semibold mb-6 text-blue-600">Presentation Slides</h1>
            <div className="flex bg-amber-100 rounded-md p- shadow-2xl hover:shadow-amber-900">
            <div className="flex flex-col gap-6 p-2">
                {presentations.map((p, i) => (
                    <a href={p.link} className="flex text-gray-400! hover:underline! text-3xl items-center ">
                        <div key={i} className="flex flex-row gap-3 items-center hover:text-black!">
                            {p.name}
                            <RiSlideshow2Line size={25} />
                        </div>
                    </a>
                ))}
            </div>
            </div>
        </div>
    );
};

export default Presentations;
