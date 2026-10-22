import { IconAttrsContext } from '../utils/icon-attrs-context'
import { useContext } from 'react'

export const useIconAttrs = () => {
    const { setIconAttrs } = useContext(IconAttrsContext)

    const handleStroke = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newStroke = Number(event.target.value)
        
        setIconAttrs(prevState => ({...prevState, strokeWidth: newStroke}))
    }

    const handleSize = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSize = Number(event.target.value)
        
        setIconAttrs(prevState => ({...prevState, size: newSize}))
    }

    const handleStrokeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIconAttrs(prevState => ({...prevState, color: event.target.value}))
    }

    const handleDefaultValues = () => {
        setIconAttrs({ size: 120, strokeWidth: 2, color: 'currentColor' })
    }

    return { handleStroke, handleSize, handleStrokeColor, handleDefaultValues }
}