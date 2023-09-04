import { useState } from 'react';
import { SongType } from '../../types';
import './musicCard.css';
import { addSong, removeSong } from '../../services/favoriteSongsAPI';

function MusicCard({ trackName, previewUrl, trackId }: SongType) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChecked = async (event) => {
    setIsChecked(event.target.checked);
    const song = { trackId, trackName, previewUrl };
    if (event.target.checked) {
      await addSong(song);
    } else {
      await removeSong(song);
    }
  };

  return (
    <div data-testid="music-card" className="container-music">
      <h3>{trackName}</h3>
      <audio
        className="audio-component"
        data-testid="audio-component"
        src={ previewUrl }
        controls
      >
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
          style={ { opacity: 0 } }
          type="checkbox"
          id={ `checkbox-music-${trackId}` }
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
