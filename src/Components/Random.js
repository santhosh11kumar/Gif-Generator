import Spinner from "./Spinner";
import useGif from "../Hooks/useGif";
function Random() {
    const { gif, loading, fetchData } = useGif();
    return (
        <div>
            <div className="  w-1/2 bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[30px]">
                <h1 className="mt-[15px] text-2xl underline uppercase font-bold">A Random Gif</h1>
                {
                    loading ? (<Spinner></Spinner>) : (<img width="450" src={gif} alt="gif"></img>)
                }
                <button
                    // onClick={() => fetchData()}
                    className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold"
                    onClick={fetchData}
                >
                    Generate
                </button>
            </div>
        </div>
    );
}
export default Random;
