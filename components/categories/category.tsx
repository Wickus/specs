import { IMedia } from "@/lib/api/interfaces/IMedia";
import { useRouter } from "next/router";

const Category: React.FC<{ title: string; data: IMedia[] }> = ({title, data}) => {

	const router = useRouter()

    return (
        <section className="p-10 text-white">
            <h2 className="text-4xl font-bold tracking-wider">{title}</h2>
            <ul className="flex items-center justify-start mt-10">
                {data.map((media, index) => {
                    return (
                        <li key={index} role="button" onClick={()=>{
							router.push(`/show/${media.id}`)
						}} className="w-[200px] min-h-[360px] flex flex-col items-start justify-start mr-10">
                            <button>Watched</button>
                            <div className={"w-full min-h-[250px] bg-gray-500 bg-cover bg-center"} style={{backgroundImage:`url('${media.image}')`}}/>
                            <p className="mt-2">{media.title}</p>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Category;
