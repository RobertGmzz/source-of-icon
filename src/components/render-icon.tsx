import type { IconDefinition } from '../types/icon-types'
import { SvgElements } from './icon-elements'

export interface IconProps {
    icon: IconDefinition
    size?: number | string
    viewBox?: string
    className?: string
    fill?: string
    stroke?: string
    strokeWidth?: number

    fillRule?: 'nonzero' | 'evenodd',
    clipRule?: 'nonzero' | 'evenodd',

    strokeLinecap?: 'butt' | 'round' | 'square',
    strokeLinejoin?: 'miter' | 'round' | 'bevel'
}

export function RenderIcon({ icon, size = 24, viewBox = '0 0 24 24', className, fill = 'none', stroke = 'currentColor', strokeWidth = 2, fillRule = 'nonzero', clipRule = 'nonzero', strokeLinecap = 'round', strokeLinejoin = 'round' }: IconProps) {
    return (
        <svg 
            width={size}
            height={size}
            viewBox={viewBox}
            fill={fill}
            fillRule={fillRule}
            clipRule={clipRule}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap={strokeLinecap}
            strokeLinejoin={strokeLinejoin}
            className={className}
            aria-hidden='true'
        >
            {icon.elements.map((element, index) => (
                <SvgElements key={`${element.type}-${index}`} element={element} />
            ))}
        </svg>
    )
}