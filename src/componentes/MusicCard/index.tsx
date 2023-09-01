import { useState } from 'react';
import { SongType } from '../../types';

function MusicCard({ trackName, previewUrl, trackId }: SongType) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChecked = () => {
    setIsChecked(!isChecked);
    console.log(trackId);
  };

  return (
    <div data-testid="music-card">
      <h3>{trackName}</h3>
      <audio data-testid="audio-component" src={ previewUrl } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        <code>audio</code>
        .
      </audio>
      <label
        htmlFor={ `checkbox-music-${trackId}` }
        data-testid={ `checkbox-music-${trackId}` }
      >
        <input
          style={ { display: 'none' } }
          type="checkbox"
          id={ `checkbox-music-${trackId}` }
          checked={ isChecked }
          onChange={ handleChecked }
        />
        <img
          src={ isChecked
            ? '/src/images/checked_heart.png'
            : '/src/images/empty_heart.png' }
          alt="favorite"
        />

      </label>
    </div>
  );
}

export default MusicCard;
