import { useRouter } from "next/router";
import { actions } from "./actions";

const ActionBar = () => {
    const actionList = { ...actions } as { [key: string]: { request: string; } };
	const router = useRouter();
    return (
        <div className="flex items-center justify-center max-w-[600px] h-[50px] bg-sky-900/20 mx-auto shadow-lg shadow-gray-900/20 sticky top-0">
            <ul className="w-full flex items-center justify-evenly text-white">
                {Object.keys(actionList).map((action: string, index) => {
                    return <li role="button" key={index} onClick={()=>{
						router.push(actionList[action].request)
					}}>{action}</li>;
                })}
            </ul>
        </div>
    );
};

export default ActionBar;
