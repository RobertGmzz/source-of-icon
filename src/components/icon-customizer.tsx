import { useIconAttrs } from '../utils/use-attrs'

export function IconCustomizer() {
    const { handleStroke, handleSize, handleStrokeColor, handleDefaultValues } = useIconAttrs()

    return (
        <div>
            <input type='range' min={0.5} max={3} step={0.25} onChange={handleStroke} />
            <input type='range' min={16} max={120} step={4} onChange={handleSize} />
            <input type='color' onChange={handleStrokeColor}/>
            <button onClick={handleDefaultValues}>reset</button>
        </div>
    )
}