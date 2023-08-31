import { Link } from 'react-router-dom';
import { AlbumType } from '../../types';

type AlbumTypeProp = {
  albumInfo: AlbumType
};

function PrevAlbum({ albumInfo }: AlbumTypeProp) {
  return (
    <div>
      <img src={ albumInfo.artworkUrl100 } alt={ albumInfo.collectionName } />
      <Link
        data-testid={ `link-to-album-${albumInfo.collectionId}` }
        to={ `/album/${albumInfo.collectionId}` }
      >
        {albumInfo.collectionName}

      </Link>
      <p>{albumInfo.artistName}</p>
    </div>
  );
}

export default PrevAlbum;
