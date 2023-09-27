import getLikedSongs from "@/actions/getLikedSongs";
import Header from "@/components/Header";
import Image from "next/image";
import LikedContent from "./components/LikedContent";

export const revalidate = 0;
const Liked = async () => {
    const songs = await getLikedSongs();
    return (
        <section className="bg-neutral-900 rounded-lg w-full h-full overflow-hidden overflow-y-auto">
            <Header>
                <div className="mt-20">
                    <div className="flex flex-col md:flex-row items-center gap-x-5">
                        <div className="relative h-32 w-32 lg:h-40 lg:w-40">
                            <Image height={500} width={500} src={"/images/liked.png"} alt="Song Image" />
                        </div>
                        <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
                            <p className="hidden md:block ">Playlist</p>
                            <h1 className="text-white text=4xl sm:text-5xl lg:text-6xl font-bold">Liked Songs</h1>
                        </div>
                    </div>
                </div>
            </Header>
            <LikedContent songs={songs} />
        </section>
    );
};

export default Liked;
