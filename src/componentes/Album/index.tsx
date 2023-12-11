import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMusics from '../../services/musicsAPI';
import Loading from '../Loading';
import { AlbumType, SongType } from '../../types';
import MusicCard from '../MusicCard';
import './album.css';
import { getFavoriteSongs } from '../../services/favoriteSongsAPI';

function Album() {
  const { id = '' } = useParams();
  const [loading, setLoading] = useState(false);
  const [album, setAlbum] = useState<AlbumType>();
  const [listMusics, setListMusics] = useState<SongType[]>();
  const [favoriteSongs, setFavoriteSongs] = useState<SongType[]>([]);

  useEffect(() => {
    async function fetchMusics() {
      setLoading(true);
      const [albumResponse, ...musicResponses] = await getMusics(id);
      const favoriteTasks = await getFavoriteSongs();
      setFavoriteSongs(favoriteTasks);
      setAlbum(albumResponse);
      setListMusics(musicResponses);
      setLoading(false);
    }
    fetchMusics();
  }, [id]);

  function isFavorite(track: SongType) {
    return favoriteSongs.some((song) => song.trackId === track.trackId);
  }

  return (
    <div>
      {loading
        ? <Loading />
        : (album && (
          <div className="container-album">
            <div className="container-albumInfo">
              <img
                className="img-album"
                src={ album.artworkUrl100 }
                alt={ album.collectionName }
              />
              <h2 data-testid="album-name">{album.collectionName}</h2>
              <h3 data-testid="artist-name">{album.artistName}</h3>
            </div>
            <div>
              {listMusics?.map((music) => (<MusicCard
                key={ music.trackId }
                isFavorite={ isFavorite(music) }
                music={ music }
              />))}
            </div>
          </div>
        ))}
    </div>
  );
}

export default Album;
