import React, { useEffect, useRef, useState }  from "react";
import WaveSurfer from 'wavesurfer.js'
import '../styles/audio.css';
import { parseHoursMinSec } from "../utils/parse-min-sec";
interface PropsAudio{
  audio: string;
  waveColor: string;
  progressColor: string
}

const Audio: React.FC<PropsAudio> = ({audio, waveColor, progressColor}) => {
    const containerRef: any = useRef();
    const waveSurferRef: any = useRef();
    const [play, setPlay] = useState<boolean>(false);
    const [duration, setDuration] = useState<string>('00:00');

    const start = () => {
      waveSurferRef.current.playPause();
      setPlay(true)
    }
    const pause = () => {
      waveSurferRef.current.playPause();
      setPlay(false)
    }
  

    useEffect(() => {
        const waveSurfer = WaveSurfer.create({
          container: containerRef.current,
          barWidth: 1,
          barHeight:4,
          waveColor,
          height:25,
          progressColor
          
        })
        waveSurfer.load(audio)
        waveSurfer.on('ready', () => {
          waveSurferRef.current = waveSurfer
          setDuration(parseHoursMinSec(waveSurferRef.current.decodedData.duration));
        });
        return () => {
          waveSurfer.destroy()
        }
      }, [audio, waveColor, progressColor])

    return (
      <div className="wrapper">
        <div>
          { !play && <button className="btn-play" onClick={start} type="button"></button> }
          {  play && <button className="btn-pause" onClick={pause} type="button" ></button> }
        </div>
        <div className="player" ref={containerRef} />
        {waveSurferRef.current && <div  className="duration">{duration}</div>}
      </div>
    )
}
export default Audio;