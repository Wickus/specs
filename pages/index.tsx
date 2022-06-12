import ActionBar from "@/components/actionbar";
import Categories from "@/components/categories";
import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <div className="bg-gradient-to-r from-gray-900 bg-gray-800 w-full h-full max-h-full overflow-y-auto">
            <ActionBar />
            <Categories />
        </div>
    );
};

export default Home;
