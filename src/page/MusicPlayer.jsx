function MusicPlayer() {


    return (
        <>
            <section className="w-full h-fit" style={{ background: "url(./assets/images/2148282049.jpg)", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                <div className="h-screen w-full  overflow-hidden bg-white/40 backdrop-blur-xl">
                    <div className="block relative h-screen w-full  overflow-auto p-2">
                        <div className="w-full fixed top-0 inset-x-0 z-10">
                            <div className="flex items-center justify-between p-2">
                                <div className="flex items-center lg:gap-10">
                                    <img src="./assets/images/2148282049.jpg" alt="" className="h-10 w-10 rounded-full" />

                                    <div className="flex items-center gap-2">
                                        <input type="text" className="w-full p-2 border-0" placeholder="Search for song, artist, etc." />
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    dd
                                </div>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl bg-red-600 backdrop-blur-xl shadow-xl w-7xl mx-auto h-[50vh]">

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MusicPlayer
