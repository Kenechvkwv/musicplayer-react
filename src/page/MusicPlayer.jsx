import { use, useEffect, useState } from 'react';
import { initialize, getPlaylist } from '../assets/playlist.js'
import Player from './components/Player'
import Playlist from './components/Playlist'
import Progress from './components/Progress'

function MusicPlayer() {
    const [playlist, setPlaylist] = useState(null);
    const [currentSong, setCurrentSong] = useState(null);

    // load playlist data on component
    useEffect(() => {
        initialize();
        async function loadPlaylist() {
            try {
                const data = await getPlaylist();
                setPlaylist(data);
            } catch (err) {
                console.error(err);
            }
        }

        loadPlaylist();
    }, []);

    // handle selected song
    const handleSongSelect = (song) => {
        setCurrentSong(song);
    }


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

                                <div className="hidden md:flex items-center gap-3">
                                    <p className="w-fit px-3 py-1 font-semibold bg-white rounded-md">Upgrade Plan</p>
                                    <img src="./assets/images/360_F_809987906_p3zbXrCLLiptspYTubBaaRtKW285c2Ve.jpg" alt="" className="h-10 w-10 rounded-full" />
                                </div>
                            </div>
                        </div>


                        <div className="w-full h-[calc(100vh-100px)] md:overflow-hidden p-2 flex items-center justify-center">
                            <div className="p-2 md:p-6 rounded-xl shadow-xl w-7xl mx-auto md:h-[60vh] grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-3 bg-black/20 backdrop-blur-xl">
                                <div className="col-span-1">
                                    {/* player */}
                                    <Player playlist={playlist} currentSong={currentSong} />
                                </div>
                                <div className="col-span-1 md:col-span-2">
                                    {/* playlist */}
                                    <Playlist playlist={playlist} onSelectSong={handleSongSelect} />
                                </div>
                            </div>
                        </div>

                        <div className="w-full block h-[50px] bg-gray-300 p-2">
                            {/* progress */}
                            <Progress currentSong={currentSong} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MusicPlayer
