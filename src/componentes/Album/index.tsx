import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMusics from '../../services/musicsAPI';
import Loading from '../Loading';
import { AlbumType, SongType } from '../../types';
import MusicCard from '../MusicCard';

function Album() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [album, setAlbum] = useState<AlbumType>();
  const [listMusics, setListMusics] = useState<SongType[]>();

  useEffect(() => {
    async function fetchMusics() {
      setLoading(true);
      const [albumResponse, ...musicResponses] = await getMusics(id);
      setAlbum(albumResponse);
      setListMusics(musicResponses);
      setLoading(false);
    }
    fetchMusics();
  }, [id]);

  return (
    <div>
      {loading
        ? <Loading />
        : (album && (
          <div>
            <h2 data-testid="album-name">{album.collectionName}</h2>
            <h3 data-testid="artist-name">{album.artistName}</h3>
            <div>
              {listMusics?.map((music) => (
                <MusicCard
                  key={ music.trackId }
                  trackName={ music.trackName }
                  previewUrl={ music.previewUrl }
                />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}

export default Album;
