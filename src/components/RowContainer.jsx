// ---- ---- ---- ----  HOOKS  ---- ---- ---- ----
import { useSlider } from '../customHooks/useSlider'
// ---- ---- ---- ----  COMPONENTS  ---- ---- ---- ----
import { Slider } from './Slider'
import { Control } from './Control'

export function RowContainer ({ index }) {
  const { listByGenre } = useSlider()
  return (
    <div className='row-container'>
      {
        listByGenre.length > 4 &&
          <Control index={index} direction='left' />
        }

      <Slider />

      {
        listByGenre.length > 4 &&
          <Control index={index} direction='right' />
        }
    </div>
  )
}
