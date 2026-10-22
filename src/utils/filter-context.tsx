import { createContext, type Dispatch, type SetStateAction, useState } from 'react'

type FiltersProps = { searchIcons: string; filter: string; category: string }

interface Props {
    children: React.ReactElement
}

export const FiltersContext = createContext<{filters: FiltersProps, setFilters: Dispatch<SetStateAction<FiltersProps>>}>({
    filters: { searchIcons: '', filter: 'alphabetic', category: 'all' },
    setFilters: () => {},
})

export function FiltersProvider({children}: Props) {
    const [filters, setFilters] = useState({searchIcons: '', filter: 'alphabetic', category: 'all'})

    return (
        <FiltersContext.Provider value={{filters, setFilters}}>
            {children}
        </FiltersContext.Provider>
    )
}