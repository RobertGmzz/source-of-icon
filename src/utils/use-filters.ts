import { useContext } from 'react'
import { FiltersContext } from './filter-context'
import type { IconDefinition } from '../types/icon-types'

export function useIconFilters() {
  const { filters, setFilters } = useContext(FiltersContext)

  const iconsResults = (iconsList: IconDefinition[]) => iconsList.filter((icon) => {
    const matchesSearch = icon.name.toLowerCase().includes(filters.searchIcons.toLowerCase())

    const matchesCategory = filters.category === 'all' || icon.category === filters.category
    const matchesFilter = filters.filter === 'alphabetic' || icon.category === filters.filter //todavia falta filtrar por orden alfabetico realmente | agregar tags a los iconos

    return matchesSearch && matchesCategory && matchesFilter
  })

  /*
  intentar no devolver setFilters, crear logica para evitar esto
  */

  return { iconsResults, filters, setFilters }
}