import React, { useState, useCallback, useEffect , useRef} from 'react'


const App = () => {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [Password, setPassword] = useState('')
  const passwordRef=useRef(null);


  const passwordGenerator = useCallback(() => {
    let Pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numberAllowed) str += '0123456789'
    if (characterAllowed) str += '!@#$%^&*()_+~`|}{[]:;?><,./-='
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      Pass += str.charAt(char)
    }
    setPassword(Pass)
  }, [length, numberAllowed, characterAllowed])
  const copyPasswordToClipBoard=useCallback(()=>{
   passwordRef.current?.select()
    window.navigator.clipboard.writeText(Password);
  },[Password])


  useEffect(() => {passwordGenerator()}, [length, numberAllowed, characterAllowed, passwordGenerator])
  return (
    <>
      <div className='w-full max-w-2xl mx-auto shadow-lg rounded-xl px-6 my-8 text-center text-orange-500 bg-gray-600 min-h-32 p-4
      ' >
        <h1 className='text-4xl text-center  text-white'  >Password Generator</h1>


        <div className='flex shadow rounded-lg overflow-hidden mb-4 m-4'>
          <input


            type='text' value={Password} readOnly className=' outline-none w-full px-3 py-2 text-gray-700 '
            placeholder='Password..'
ref={passwordRef}


          />
          <button
          onClick={copyPasswordToClipBoard}
          className='bg-blue-500 text-white px-4 py-2'>Copy</button>



        </div>
        <div className='flex  text-sm  gap-x-2'>
          <div className='flex items-center gap-x-1 ml-10'>
            <input


              type='range'
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}


            />
            <label className='text-white mr-8   '>Length : {length}</label>
          </div>


          <div className='flex items-center gap-x-1 '>



            <input


              type='checkbox'
              defaultChecked={numberAllowed}
              onChange={(e) => setNumberAllowed((prev) => !prev)}
            />
            <label>Include Numbers</label>


          </div>
          <div className='flex items-center gap-x-1 '>
            <input
              type='checkbox'
              defaultChecked={characterAllowed}
              onChange={(e) => setCharacterAllowed((prev) => !prev)}
            />
            <label>Include Symbols</label>





          </div>


        </div>


      </div>
    </>
  )
}


export default App

