import { useEffect, useState } from 'react';

function PageButton() {
    const [activeSection, setActiveSection] = useState("description")

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting){
                        setActiveSection(entry.target.id)
                    }
                });
            },
            {threshold: 0.5} // Visible 50% before changing
        )

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const pageTypes = [
        { id: "description", label: "About Me"},
        { id: "skills", label: "My Skills"},
        { id: "projects", label: "My Projects"},
        { id: "learning", label: "Future Plans"},
    ]

    return (
        <>
            <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col items-end gap-4">
                {pageTypes.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                        <div key={item.id} className='relative flex items-center group'>
                            {/* <span
                            className={`
                                absolute right-full mr-2 px-3 py-1 rounded-l-lg text-[white] text-sm whitespace-nowrap transition-all duration-300 
                                ${isActive ? "opacity-0" : "opacity-0 group-hover:opacity-100 bg-[Grey] group-hover:h-7"}
                            `}
                            >
                                {item.label}
                            </span> */}

                            <button
                                onClick={() =>
                                    document
                                    .getElementById(item.id)
                                    ?.scrollIntoView({ behavior: "smooth" })
                                }
                                className={`
                                    transition-all duration-300 cursor-pointer 
                                    ${isActive
                                    ? "px-4 py-2 bg-gradient-to-l from-page_selector to-Primary text-[White] rounded-l-lg shadow-md"
                                    : "flex items-center w-3 h-3 bg-[Grey] hover:h-7 rounded-sm"}
                                `}
                                >
                                {isActive && item.label}
                                <span
                                className={`
                                    absolute right-full mr-2 px-3 py-1 rounded-l-lg text-[white] text-sm whitespace-nowrap transition-all duration-300 
                                    ${isActive ? "opacity-0" : "opacity-0 group-hover:opacity-100 bg-[Grey]"}
                                `}
                                >
                                    {item.label}
                                </span>
                            </button>
                        </div>
                    )
                })}    
            </div>  
        </>
    )
}

export default PageButton;