function Navbar() {
    return (
        <>
            <div className="flex flex-row place-content-between p-[2rem] bg-Primary text-[White] text-[24px]">
                <h1>Alexander Brian Susanto</h1>
                <div className="flex flex-row gap-12">
                    <a href="">About me</a>
                    <a href="#skills">My Skills</a>
                    <a href="#projects">My Projects</a>
                    <a href="#learning">Future Plans</a>
                </div>
            </div>
        </>
    )
}

export default Navbar