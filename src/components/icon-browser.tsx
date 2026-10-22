import { useIconFilters } from "../utils/use-filters"

export function IconBrowser() {
    const { filters, setFilters } = useIconFilters()

    const handleSetInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilters(prevState => ({...prevState, searchIcons: event.target.value}))
    }

    return (
        <input className='bg-gray-800' id='icon-search' type='search' value={filters.searchIcons} onChange={handleSetInput} />
    )
}