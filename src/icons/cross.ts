import type { IconDefinition } from '../types/icon-types'

export const crossIcon: IconDefinition = {
    id: 'cross',
    name: 'cross',
    category: 'ui',
    elements: [
        { 
            type: 'path',
            d: 'M4.5 19.5 L19.5 4.5' 
        }, 
        {   
            type: 'path',
            d: 'M4.5 4.5 L19.5 19.5'
        },
    ]
}