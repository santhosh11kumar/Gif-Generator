import { useState } from "react";

import useGif from '../Hooks/useGif'
import Spinner from "./Spinner";



function Display() {

    const [data, setData] = useState('naruto');

    const { gif, loading, fetchData } = useGif();

    return (
        <div className="  w-1/2 bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[30px]" >

            <h1 className="mt-[15px] text-2xl underline uppercase font-bold">A RANDOM {data} GIF</h1>

            {
                loading ? (<Spinner></Spinner>) : (<img width="450" src={gif} alt="gif"></img>)
            }

            <input type="text" placeholder="Enter the name to generate "
                className="w-10/12  text-lg py-2 rounded-lg mb-[3px] text-center bg-white"
                onChange={
                    (event) => {
                        setData(event.target.value)
                    }
                }
                value={data}

            ></input>

            <button
                className="w-10/12 bg-yellow-400 text-xl py-2 rounded-lg font-bold"
                onClick={() => fetchData(data)}

            >Generate</button>

        </div >
    )
}
export default Display;