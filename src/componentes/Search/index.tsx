import { useState } from 'react';
import Loading from '../Loading';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import { AlbumType } from '../../types';
import PrevAlbum from '../PrevAlbum';

function Search() {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<AlbumType[]>([]);
  const [artistName, setArtistName] = useState('');
  const [showResultEmpty, setShowResultEmpty] = useState(false);

  const handleSearch = async () => {
    if (search.length < 2) {
      return;
    }

    setLoading(true);
    const searchResult = await searchAlbumsAPI(search);
    setLoading(false);

    if (searchResult && searchResult.length > 0) {
      setResults(searchResult);
      setArtistName(search);
      setShowResultEmpty(false);
    } else {
      setResults([]);
      setArtistName('');
      setShowResultEmpty(true);
    }
    setSearch('');
  };

  if (loading) {
    return (<Loading />);
  }

  return (
    <div>
      <form>
        <input
          type="text"
          name="search"
          value={ search }
          onChange={ (e) => setSearch(e.target.value) }
          data-testid="search-artist-input"
        />
        <button
          disabled={ search.length < 2 }
          onClick={ handleSearch }
          data-testid="search-artist-button"
        >
          Pesquisar
        </button>

        {results.length > 0 && (
          <div>
            <p>
              Resultado de álbuns de:
              {' '}
              {artistName}
            </p>
            {results
              .map((result) => (<PrevAlbum
                key={ result.artistId }
                albumInfo={ result }
              />))}
          </div>
        )}
        {showResultEmpty && <p>Nenhum álbum foi encontrado</p>}
      </form>
    </div>
  );
}

export default Search;
