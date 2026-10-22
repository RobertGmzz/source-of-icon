import type { Elements } from '../types/icon-types'

export function SvgElements({ element }: { element: Elements }) {
    switch (element.type) {
        case 'g':
            return (
                <g>
                    {element.children.map((child, index) => (
                        <SvgElements key={`${child.type}-${index}`} element={child} />
                    ))}
                </g>
            )
        case 'path':
            return <path d={element.d} />
        case 'circle':
            return <circle cx={element.cx} cy={element.cy} r={element.r} />
        case 'rect':
            return (
                <rect
                    x={element.x}
                    y={element.y}
                    width={element.width}
                    height={element.height}
                    rx={element.rx}
                    ry={element.ry}
                />
            )
        case 'line':
            return <line x1={element.x1} y1={element.y1} x2={element.x2} y2={element.y2} />
        case 'polyline':
            return <polyline points={element.points} />
        case 'polygon':
            return <polygon points={element.points} />
        case 'ellipse':
            return <ellipse cx={element.cx} cy={element.cy} rx={element.rx} ry={element.ry} />
        default:
        return null
    }
}