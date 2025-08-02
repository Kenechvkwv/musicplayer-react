function MusicPlayer() {


    return (
        <>
            <section className="w-full h-fit" style={{ background: "url(./assets/images/2148282049.jpg)", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                <div className="h-screen w-full  overflow-hidden bg-white/40 backdrop-blur-xl">
                    <div className="block relative h-screen w-full  overflow-hidden">
                        <div className="w-full block h-[50px] p-2">
                            <div className="flex items-center justify-between p-2">
                                <div className="flex items-center lg:gap-10">
                                    <img src="./assets/images/360_F_809987906_p3zbXrCLLiptspYTubBaaRtKW285c2Ve.jpg" alt="" className="h-10 w-10 rounded-full" />

                                    <div className="flex items-center gap-2">
                                        <input type="text" className="w-full p-2 border-0" placeholder="Search for song, artist, etc." />
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <p className="w-fit px-3 py-1 font-semibold bg-white rounded-md">Upgrade Plan</p>
                                    <img src="./assets/images/360_F_809987906_p3zbXrCLLiptspYTubBaaRtKW285c2Ve.jpg" alt="" className="h-10 w-10 rounded-full" />
                                </div>
                            </div>
                        </div>


                        <div className="w-full h-[calc(100vh-100px)] overflow-hidden p-2 flex items-center justify-center">
                            <div className="p-6 rounded-xl shadow-xl w-7xl mx-auto h-[60vh] grid grid-cols-1 md:grid-cols-3 gap-10 bg-black/20 backdrop-blur-xl">
                                <div className="col-span-1">
                                    <div className="h-[40vh] w-full rounded-lg bg-center bg-cover bg-red-500 mb-3"></div>
                                    <div className="flex items-center justify-center gap-3 p-4 bg-gray-200 rounded-lg">
                                        <button id="shuffle" type="button" className="w-fit cursor-pointer transition duration-300 transform hover:scale-125">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="currentColor" viewBox="0 0 24 24" >
                                                <path d="m18,6h-2.59c-.53,0-1.04.21-1.41.59l-9.41,9.41h-2.59v2h2.59c.53,0,1.04-.21,1.41-.59l9.41-9.41h2.59v3l4-4-4-4v3Z"></path><path d="m18,16h-1.59l-2.71-2.71-1.41,1.41,2.71,2.71c.37.37.89.59,1.41.59h1.59v3l4-4-4-4v3Z"></path><path d="m7.29,9.71l1.41-1.41-1.71-1.71c-.37-.37-.89-.59-1.41-.59h-3.59v2h3.59l1.71,1.71Z"></path>
                                            </svg>
                                        </button>

                                        <button id="previous" type="button" className="w-fit cursor-pointer transition duration-300 transform hover:scale-125">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="currentColor" viewBox="0 0 24 24" >
                                                <path d="M17.46 6.11c-.33-.17-.73-.14-1.04.08l-7 5c-.26.19-.42.49-.42.81s.16.63.42.81l7 5c.17.12.38.19.58.19.16 0 .31-.04.46-.11.33-.17.54-.51.54-.89V7c0-.37-.21-.72-.54-.89M16 15.06 11.72 12 16 8.94v6.11ZM6 6h2v12H6z"></path>
                                            </svg>
                                        </button>

                                        <button id="play" type="button" className="w-fit cursor-pointer transition duration-300 transform hover:scale-125">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="currentColor" viewBox="0 0 24 24" >
                                                <path d="M6.51 18.87a1.002 1.002 0 0 0 1-.01l10-6c.3-.18.49-.51.49-.86s-.18-.68-.49-.86l-10-6a.99.99 0 0 0-1.01-.01c-.31.18-.51.51-.51.87v12c0 .36.19.69.51.87ZM8 7.77 15.06 12 8 16.23z"></path>
                                            </svg>
                                        </button>

                                        <button id="next" type="button" className="w-fit cursor-pointer transition duration-300 transform hover:scale-125">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="currentColor" viewBox="0 0 24 24" >
                                                <path d="m14.58 11.19-7-5c-.31-.22-.71-.25-1.04-.08S6 6.62 6 7v10c0 .37.21.72.54.89.14.07.3.11.46.11.2 0 .41-.06.58-.19l7-5c.26-.19.42-.49.42-.81s-.16-.63-.42-.81M8 15.06V8.95l4.28 3.06L8 15.07ZM16 6h2v12h-2z"></path>
                                            </svg>
                                        </button>

                                        <button id="repeat" type="button" className="w-fit cursor-pointer transition duration-300 transform hover:scale-125">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="currentColor" viewBox="0 0 24 24" >
                                                <path d="m16,5H7c-1.1,0-2,.9-2,2v5h2v-5h9v3l5-4-5-4v3Z"></path><path d="m17,17h-9v-3l-5,4,5,4v-3h9c1.1,0,2-.9,2-2v-5h-2v5Z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-span-1 md:col-span-2">
                                    <div className="block bg-white/50 h-full w-full rounded-lg p-4">
                                        <div className="flex items-center justify-between mb-4">
                                            <p className="">
                                                <span className="block text-2xl font-bold">Know</span>
                                                <span className="block text-sm text-light">Jayson Mars [2019]</span>
                                            </p>

                                            <p className="text-right">
                                                <span className="block text-2xl font-bold">4.5</span>
                                            </p>
                                        </div>
                                        <div className="block">
                                            <ul>
                                                <li className=""></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full block h-[50px] bg-gray-300 p-2">
                            <div className="flex items-center max-w-7xl mx-auto gap-10">
                                <div className="bg-gray-500 w-full rounded-lg">
                                    <div className="bg-green-500 py-2 rounded-lg" style={{ width: '30%', }}></div>
                                </div>
                                <button type="button" className="w-fit cursor-pointer transition duration-300 transform hover:scale-125">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        fill="currentColor" viewBox="0 0 24 24" >
                                        <path d="m6,22h12c1.1,0,2-.9,2-2V4c0-1.1-.9-2-2-2H6c-1.1,0-2,.9-2,2v16c0,1.1.9,2,2,2Zm0-18h12v16H6V4Z"></path><path d="m12,11c-2.21,0-4,1.79-4,4s1.79,4,4,4,4-1.79,4-4-1.79-4-4-4Zm0,6c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2Z"></path><path d="M12 5A2 2 0 1 0 12 9 2 2 0 1 0 12 5z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MusicPlayer
