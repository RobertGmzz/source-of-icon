import { createContext, type Dispatch, type SetStateAction, useState} from 'react'

type IconAttrs = { size: number; strokeWidth: number, color: string }

interface Attrs {
    children: React.ReactElement
}

export const IconAttrsContext = createContext<{iconAttrs: IconAttrs, setIconAttrs: Dispatch<SetStateAction<IconAttrs>>}>({
    iconAttrs: { size: 120, strokeWidth: 2, color: 'currentColor' },
    setIconAttrs: () => {},
})

export function IconAttrsProvider({children}: Attrs) {
    const [iconAttrs, setIconAttrs] = useState({ size: 120, strokeWidth: 2, color: 'currentColor' })

    return (
        <IconAttrsContext.Provider value={{iconAttrs, setIconAttrs}}>
            {children}
        </IconAttrsContext.Provider>
    )
}