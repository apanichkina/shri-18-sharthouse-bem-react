import React, {ChangeEvent} from 'react';
import {cn} from '@bem-react/classname';
import {Slider} from '../Slider/Slider';
import './Music.css';
import {secToTime, timeToSec} from '../../utils/time';

const cnMusic = cn('Music');

export interface IMusicProps {
  className?: string;
  artist: string;
  name: string;
  length: string;
  volume: number;
  albumcover: string;
}

interface IMusicState {
  volume: string;
  trackTime: string;
}

export class Music extends React.Component<IMusicProps, IMusicState> {
  public constructor(props: IMusicProps) {
    super(props);

    this.state = {
      volume: String(props.volume),
      trackTime: timeToSec(props.length),
    };

    this.onTrackBarChange = this.onTrackBarChange.bind(this);
    this.onVolumeBarChange = this.onVolumeBarChange.bind(this);
  }

  private onTrackBarChange(evt: ChangeEvent<HTMLInputElement>) {
    this.setState({trackTime: evt.target.value});
  }

  private onVolumeBarChange(evt: ChangeEvent<HTMLInputElement>) {
    this.setState({volume: evt.target.value});
  }

  public render() {
    const {className, albumcover, name, artist} = this.props;
    const {volume, trackTime} = this.state;
    const formatedVolume = `${volume}%`;
    const formatedTime = secToTime(trackTime);

    return (
      <div className={cnMusic(null, [className])}>
        <div className={cnMusic('TrackInfoContainer')}>
          <img className={cnMusic('AlbumCover')} src={albumcover} alt={name}/>
          <div className={cnMusic('TrackContainer')}>
            <div className={cnMusic('Name')}>{[artist, name].join(' - ')}</div>
            <div className={cnMusic('Track')}>
              <Slider
                style="track"
                className={cnMusic('TrackBar')}
                title="track"
                min="0"
                max="800"
                value={trackTime}
                step="1"
                onChange={this.onTrackBarChange}
              />
              <span className={cnMusic('TrackLength')}>{formatedTime}</span>
            </div>
          </div>
        </div>
        <div className={cnMusic('ControlsContainer')}>
          <img src="../images/rewind.svg" className={cnMusic('Button', {left: true})}/>
          <img src="../images/rewind.svg" className={cnMusic('Button')}/>
          <Slider
            style="volume"
            className={cnMusic('VolumeBar')}
            title="volume"
            min="0"
            max="100"
            value={volume}
            step="1"
            onChange={this.onVolumeBarChange}
          />
          <span className={cnMusic('VolumeValue')}>{formatedVolume}</span>
        </div>
      </div>
    );
  }
}
