import { useEffect, useState } from 'react';
import { getFavoriteSongs } from '../../services/favoriteSongsAPI';
import { SongType } from '../../types';
import MusicCard from '../MusicCard';
import Loading from '../Loading';

function Favorites() {
  const [loading, setLoading] = useState(false);
  const [favoriteSongs, setFavoriteSongs] = useState<SongType[]>([]);

  useEffect(() => {
    async function fetchFavorites() {
      setLoading(true);
      const favoriteTasks = await getFavoriteSongs();
      setFavoriteSongs(favoriteTasks);
      setLoading(false);
    }
    fetchFavorites();
  }, []);

  function isFavorite(track: SongType) {
    return favoriteSongs.some((song) => song.trackId === track.trackId);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h3>Músicas favoritas:</h3>
      <div>
        {favoriteSongs?.map((music) => (<MusicCard
          key={ music.trackId }
          isFavorite={ isFavorite(music) }
          music={ music }
        />))}
      </div>

    </div>
  );
}

export default Favorites;
