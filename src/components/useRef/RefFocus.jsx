import React from 'react'

const RefFocus = () => {

    const inputRef = useRef()
    useEffect(() => {
        inputRef.current.focus()
    }, [])
  return (
    <div>
        <form action="">
            <label htmlFor="">nombre</label>
            <input type="text" ref={inputRef} />
            <label htmlFor="">apellido</label>
            <input type="text" ref={inputRef}/>
        </form>
    </div>
  )
}

export default RefFocus