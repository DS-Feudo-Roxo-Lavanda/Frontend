const SearchResults = ({results}) => {

    if (!results || !results.length) return null

    const showList = results.map(({id, title}) => {

        if (!title) {
            return;
        }

        return(
        <li key={id}>{title}</li>
        )
    })

    return(
        <div className='search-results'>
            <ul>{showList}</ul>
        </div>
    )
}
export default SearchResults

