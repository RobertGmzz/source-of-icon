import { useIconFilters } from '../utils/use-filters'

//crear una forma de obtener todos los tags y categorias dinamicamente, poder contar cuantos iconos se mostraran al aplicar la categoria (de forma automatica)
const categories = [
    { name: 'ui' },
    { name: 'ux' },
]

export function IconsCategoryList() {
    const { setFilters } = useIconFilters()

    return (
        <ul>
            {categories.map((category) => (
                <li key={category.name} onClick={() => setFilters(prevState => ({...prevState, category: category.name}))}>
                    <a href={`#${category.name}`}>
                        <span>{category.name}</span>
                    </a>
                </li>
            ))}
        </ul>
    )
}