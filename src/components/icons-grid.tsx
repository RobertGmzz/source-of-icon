import { useState, useContext } from 'react'
import { RenderIcon } from '../components/render-icon'
import { IconOverlayPanel } from './icon-overlay-panel'
import type { IconDefinition } from '../types/icon-types'
import { IconAttrsContext } from '../utils/icon-attrs-context'

interface IconsProps {
  icons: IconDefinition[]
}

export function IconsGrid({ icons }: IconsProps) {
  const [selectedIcon, setSelectedIcon] = useState<IconDefinition | null>(null)

  const handleSelectedIcon = () => {
    setSelectedIcon(null)
  }

  const { iconAttrs } = useContext(IconAttrsContext)
  
  return (
    <main className="flex text-white">
      {icons.map((icon) => (
        <div 
          key={icon.id}
          onClick={() => setSelectedIcon(icon)}
        >
          <RenderIcon
          icon={icon}
          size={iconAttrs.size}
          strokeWidth={iconAttrs.strokeWidth}
          stroke={iconAttrs.color}
          />
        </div>
      ))}
      {selectedIcon && <IconOverlayPanel icon={selectedIcon} onClose={handleSelectedIcon} />}
    </main>
  )
}