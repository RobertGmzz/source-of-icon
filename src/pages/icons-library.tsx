import { IconsGrid } from '../components/icons-grid'
import { useIconFilters } from '../utils/use-filters'
import { IconBrowser} from '../components/icon-browser'
import { FilterButton } from '../components/icon-filter-button'
import { IconsCategoryList } from '../components/icon-category-list'
import { allIcons } from '../utils/import-icons'
import { IconCustomizer } from '../components/icon-customizer'
import { IconAttrsProvider } from '../utils/icon-attrs-context'

export function IconsLibrary() {
    const { iconsResults } = useIconFilters()

    const icons = Object.values(allIcons)
    
    return (
    <IconAttrsProvider>
        <>
        <IconCustomizer />
        <IconsCategoryList />
        <FilterButton />
        <IconBrowser />
        <IconsGrid icons={iconsResults(icons)} />
        </>
    </IconAttrsProvider>
    )
}