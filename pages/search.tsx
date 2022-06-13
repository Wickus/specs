import PageLayout from "@/components/layouts";
import { IMedia } from "@/lib/api/interfaces/IMedia";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

const Search = () => {
	const router = useRouter();
    const [searchState, setSearch] = useState<{search:string,response:IMedia[]}>({
        search: "",
        response: [],
    });

    const onInput = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        setSearch({ ...searchState, search: event.currentTarget.value });
    };

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        axios.get(`/api/search?search=${searchState.search}`).then(({ data }) => {
            setSearch({ ...searchState, response: data });
			console.log(data)
        });
    };

    return (
        <PageLayout>
            <div className="bg-gradient-to-r from-gray-900 bg-gray-800 w-full h-full max-h-full overflow-y-auto">
                <div className="flex items-center justify-center max-w-[600px] h-[50px] bg-sky-900/20 mx-auto shadow-lg shadow-gray-900/20 sticky top-0">
                    <form onSubmit={onSubmit}>
                        <input type="text" className="bg-transparent text-white mr-5" name="search" onInput={onInput} value={searchState.search} placeholder="Enter Movie / Series title" />
                        <button className="bg-white p-2 rounded-full" type="submit">Search</button>
                    </form>
                </div>

                <div>
					<ul className="flex items-center justify-start mt-10">
						{searchState?.response?.map(({id,image,title}, index) => {
							return (
								<li key={index} role="button" onClick={()=>{
									router.push(`/show/${id}`)
								}} className="w-[200px] min-h-[360px] flex flex-col items-start justify-start mr-10">
									<button>Watched</button>
									<div className={"w-full min-h-[250px] bg-gray-500 bg-cover bg-center"} style={{backgroundImage:`url('${image}')`}}/>
									<p className="mt-2">{title}</p>
								</li>
							);
						})}
					</ul>
                </div>
            </div>
        </PageLayout>
    );
};

export default Search;
