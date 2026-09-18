import { Search } from 'lucide-react';

export const Surchbar = ({text,setText}) => {
   
    const formSubmitfun = (event) => {
        event.preventDefault();
      
    }

    return (
        <div>
            <form onSubmit={(event) => {
                formSubmitfun(event);
            }} className='flex items-center '>

                <input onChange={(e) => {
                    setText(e.target.value);
                }} value={text} type="text" placeholder='Surch movies' className="outline-none w-22 text-[12px]
                md:text-[15px] md:w-28" />

                <button> <Search /></button>
            </form>
        </div>
    )
}
export default Surchbar
