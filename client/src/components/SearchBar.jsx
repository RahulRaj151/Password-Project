const SearchBar = ({ value, onChange }) => (
  <input className="input" placeholder="Search by website or username..." value={value} onChange={(e) => onChange(e.target.value)} />
);
export default SearchBar;
