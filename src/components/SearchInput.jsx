import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchInput = () => {
  return (
    <>
      <FontAwesomeIcon icon={faMagnifyingGlass}/*  style={{ color: '#ffffff', marginRight: '8px' }} */ />
      {/* <input
        type="text"
        placeholder="Search..."
        className="search-input"
      /> */}
    </>
  );
};

export default SearchInput;
