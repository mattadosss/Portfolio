export default function Home() {
    return (
        <div className="flex flex-col min-h-screen text-gray-800 font-geist ml-25 mt-15 mb-20">
            <h1 className="text-3xl font-semibold font-[Orbitron]">Hey there 👋!</h1>
            <div className="flex mt-13 font-[Geist] ">

                <img src="https://placehold.co/40x50" className="w-70 mr-20"/>
                <p className="max-w-200 text-4xl">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>
            </div>
            <div className="flex mt-23 font-[Geist] ">
                <p className="max-w-200 text-4xl mr-20">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>

                <img
                src="https://placehold.co/60x50" className="w-70 mr-20"/>
            </div>


        </div>
    );
}

