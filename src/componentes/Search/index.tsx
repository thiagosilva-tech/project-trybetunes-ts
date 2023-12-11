import { useState } from 'react';
import Loading from '../Loading';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import { AlbumType } from '../../types';
import PrevAlbum from '../PrevAlbum';
import './search.css';

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
    <div className="container-search">
      <form className="form-search">
        <input
          className="input-search"
          type="text"
          name="search"
          value={ search }
          onChange={ (e) => setSearch(e.target.value) }
          data-testid="search-artist-input"
        />
        <button
          className="btn-search"
          disabled={ search.length < 2 }
          onClick={ handleSearch }
          data-testid="search-artist-button"
        >
          Pesquisar
        </button>

        {results.length > 0 && (
          <div className="container-albums">
            <p className="p-search">
              Resultado de álbuns de:
              {' '}
              {artistName}
            </p>
            <div className="container-prevAlbum">
              {results
                .map((result) => (<PrevAlbum
                  key={ result.collectionId }
                  albumInfo={ result }
                />))}
            </div>
          </div>
        )}
        {showResultEmpty && <p>Nenhum álbum foi encontrado</p>}
      </form>
    </div>
  );
}

export default Search;
