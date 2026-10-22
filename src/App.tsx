import { IconsLibrary } from './pages/icons-library'
import { FiltersProvider } from './utils/filter-context'

function App() {
  
  return (
    <FiltersProvider>
      <IconsLibrary />
    </FiltersProvider>
  )
}

export default App