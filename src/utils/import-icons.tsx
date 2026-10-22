import type { IconDefinition } from '../types/icon-types'

const modules = import.meta.glob<{[key: string]: IconDefinition}>('../icons/*.ts', { eager: true })

export const allIcons: Record<string, IconDefinition> = {}

Object.values(modules).forEach((module) => {
    Object.keys(module).forEach((key) => {
        const icon = module[key]
        if (icon && icon.id) {
            allIcons[icon.id] = icon
        }
    })
})