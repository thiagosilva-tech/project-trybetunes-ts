import { Link } from 'react-router-dom';
import { AlbumType } from '../../types';
import './prevAlbum.css';

type AlbumTypeProp = {
  albumInfo: AlbumType
};

function PrevAlbum({ albumInfo }: AlbumTypeProp) {
  return (
    <div className="container-prevAlbumInfo">
      <img src={ albumInfo.artworkUrl100 } alt={ albumInfo.collectionName } />
      <Link
        className="link-prevAlbum"
        data-testid={ `link-to-album-${albumInfo.collectionId}` }
        to={ `/album/${albumInfo.collectionId}` }
      >
        {albumInfo.collectionName}
      </Link>
      <p className="p-artistName">{albumInfo.artistName}</p>
    </div>
  );
}

export default PrevAlbum;
