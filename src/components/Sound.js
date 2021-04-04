import music from "../nature.mp3";
import Sound from 'react-sound';

const PlaySound = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
) => {
    return(
        <div>
            <Sound
                url = {music}
                playStatus = {Sound.status.PLAYING}
                playFromPostion = {300}
                onLoading ={handleSongLoading}
                onPlaying = {handleSongPlaying}
                onFinishedPlaying = {handleSongFinishedPlaying}
                loop= {true}
            />
        </div>
    )
};

export default PlaySound