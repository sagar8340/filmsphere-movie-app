import React from 'react'

export const Togglebtn = ({mode, setMode, className}) => {
    const toggleMode = () => {

        if (mode === 'light') {
            setMode('dark');
        } else {
            setMode('light');
        }
    }
    return (
        <button onClick={toggleMode}  className={`w-14 h-7 rounded-full p-1 flex items-center
                ${mode === 'dark' ? 'bg-gray-700' : 'bg-gray-300'} cursor-pointer ${className}
            `}>
            <div
                className={`w-5 h-5 bg-[#fc00d82e] rounded-full
                    transition-transform duration-300
                    ${mode === 'dark' ? 'translate-x-7' : 'translate-x-0'}
                `}
            ></div>
        </button>
    )
}
export default Togglebtn
