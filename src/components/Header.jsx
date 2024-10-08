// ---- ---- ---- ---- HOOKS ---- ---- ---- ----
import { useRef, useState } from 'react'
// ---- ---- ---- ---- COMPONENTS ---- ---- ---- ----
import { NavLink } from 'react-router-dom'

// echarle un vistazo luego para descartar errores y mejorar el código
export const Header = ({ search, setSearch }) => {
  const [isActiveInput, setIsActiveInput] = useState(false)

  const inputRef = useRef(null)

  const clearInputValue = () => { // Clear input-field when closed
    inputRef.current.value = ''
    setSearch(false)
    setIsActiveInput(false)
  }

  const focusInput = () => { // Auto focus input field when displayed
    setTimeout(() => {
      inputRef.current.focus()
    }, 300)
  }

  return (
    <header className='header'>
      <div className='header-bar'>

        <div>
          <NavLink
            to='/' className={({ isActive }) => {
              return isActive ? 'links title1 is-active' : 'links title1'
            }}
          >Home
          </NavLink>
        </div>

        <div>
          <NavLink
            to='/genres' className={({ isActive }) => {
              return isActive ? 'links title1 is-active' : 'links title1'
            }}
          >Genres
          </NavLink>
        </div>
      </div>

      <div className={isActiveInput ? 'search-container is-active' : 'search-container'}>

        <button
          className='search-btn'
          onClick={() => {
            setIsActiveInput(!isActiveInput)
            if (!inputRef.current.parentNode.parentNode.parentNode.className.includes('is-active')) {
              focusInput()
            } else { inputRef.current.blur() }
          }}
        >
          <i className='bi-search search-icon' />
        </button>

        <div className='input-container'>
          <form
            onSubmit={(ev) => {
              ev.preventDefault()
            }}
          >
            <input
              className='search-input'
              id='search-input'
              ref={inputRef}
              type='text'
              name='search'
              placeholder='Search movies'
              onChange={ev => {
                ev.preventDefault()
                setSearch(ev.target.value)
              }}
            />
          </form>

          <div>
            {search && <i className='bi-x close-icon' onClick={() => { clearInputValue() }} />}
          </div>

        </div>
      </div>
    </header>
  )
}
