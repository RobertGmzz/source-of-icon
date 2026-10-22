import { RenderIcon } from './render-icon'
import type { IconDefinition } from '../types/icon-types'

interface IconPanelProps {
    icon: IconDefinition
    onClose: () => void
}

export function IconOverlayPanel({ icon, onClose }: IconPanelProps) {

    return (
        <div className='flex gap-10'>
            <div>
                <RenderIcon icon={icon}/>
                {icon.name}
                {icon.category}
                {icon.id}
            </div>
            <button className='cursor-pointer' onClick={onClose}>cerrar</button>
        </div>
    )
}