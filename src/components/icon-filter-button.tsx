import { useIconFilters } from '../utils/use-filters'

export function FilterButton() {
    const { setFilters } = useIconFilters()

    const handleSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilters(prevState => ({...prevState, filter: event.target.value}))
    }
    
    return (
        <select id='crear-id-con-useId' defaultValue='alphabetic' onChange={handleSelection}>
            <option value='ui'>UI</option>
            <option value='ux'>UX</option>
            <option value='alphabetic'>alphabetic</option>
            <option value='favourites'>favourites</option>
            <option value='release-date'>release date</option>
        </select>
    )
}