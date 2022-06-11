const Category = () => {
	return <section className="p-10 text-white">
		<h2 className="text-4xl font-bold tracking-wider">Category name of media</h2>
		<ul className="flex items-center justify-start mt-10">
			<li className="w-[200px] h-[300px] flex flex-col items-start justify-start mr-10">
				<button>Watched</button>
				<div className="w-full h-[250px] bg-gray-500"></div>
				<p className="mt-2">Name of media</p>
			</li>
			<li className="w-[200px] h-[300px] flex flex-col items-start justify-start mr-10">
				<button>Watched</button>
				<div className="w-full h-[250px] bg-gray-500"></div>
				<p className="mt-2">Name of media</p>
			</li>
			<li className="w-[200px] h-[300px] flex flex-col items-start justify-start mr-10">
				<button>Watched</button>
				<div className="w-full h-[250px] bg-gray-500"></div>
				<p className="mt-2">Name of media</p>
			</li>
		</ul>
	</section>
}

export default Category