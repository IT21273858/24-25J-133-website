const team = [
    { name: "Shangeeth V", role: "Team Leader", email: "IT21273858@sliit.lk", src: "/profile/shangeeth.jpg" },
    { name: "Sanjeeva N", role: "Member", email: "IT21334542@slit.lk", src: "/profile/jeevan.jpg" },
    { name: "Thiraviyarasa A", role: "Member", email: "IT21176210@sliit.lk", src: "/profile/asmitha.jpg" },
    { name: "Dr. Kapila Dissanayaka", role: "Supervisor", email: "kapila.d@sliit.lk", src: "/profile/kapila.jpg" },
    { name: "Ms. Rivoni De Zoysa", role: "Co-Supervisor", email: "rivoni.d@sliit.lk", src: "/profile/zoysa.jpg" },
    { name: "Dr. Gowritharan S", role: "External Supervisor", email: "gowritharan@gmail.com", src: "/profile/gowritharan.jpg" },
];

const About = () => {
    return (
        <div className="p-8 max-w-4xl mx-auto h-screen">
            <h1 className="text-3xl font-semibold mb-6 text-blue-600">About Us</h1>
            <div className="space-y-4 overflow-y-scroll flex flex-col h-[95%] scrollbar-hide">
                {team.map((member, i) => (
                    <div key={i} className="border p-4 rounded-lg shadow flex flex-row justify-between">
                        <div className="flex flex-col">
                            <h2 className="text-xl font-semibold">{member.name}</h2>
                            <p>{member.role}</p>
                            <p className="text-blue-500">{member.email}</p>
                        </div>
                        <div className="flex">
                            <img src={member.src} alt={member.name} className="w-16 h-16 rounded-full mx-auto" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
