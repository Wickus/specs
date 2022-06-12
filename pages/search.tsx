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
        });
    };

    return (
        <PageLayout>
            <div>
                <div>
                    <form onSubmit={onSubmit}>
                        <input type="text" name="search" onInput={onInput} value={searchState.search} placeholder="Enter Movie / Series title" />
                        <button type="submit">Search</button>
                    </form>
                </div>

                <div>
					<ul className="flex items-center justify-start mt-10">
						{searchState.response.map(({id,image,title}, index) => {
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
