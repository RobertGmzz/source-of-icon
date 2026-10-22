export type Elements = {
    type: 'g'; 
    children: Elements[] 
} | {
    type: 'path',
    d: string
} | {
    type: 'circle',
    cx: number | string,
    cy: number | string,
    r: number | string
} | {
    type: 'rect',
    x?: number | string,
    y?: number | string,
    width: number | string,
    height: number | string,
    rx?: number | string,
    ry?: number | string
} | {
    type: 'line',
    x1: number | string,
    y1: number | string,
    x2: number | string,
    y2: number | string
} | {
    type: 'polyline',
    points: string
} | {
    type: 'polygon',
    points: string
} | {
    type: 'ellipse',
    cx: number | string,
    cy: number | string,
    rx: number | string,
    ry: number | string
}

export interface IconDefinition {
    id: string,
    name: string,
    category: string,
    elements: Elements[],
}