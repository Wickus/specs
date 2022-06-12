import ActionBar from "@/components/actionbar";
import Categories from "@/components/categories";
import { delete_cookie } from "@/lib/cookies";
import { Users } from "@prisma/client";
import axios from "axios";
import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Home: NextPage<{ id: number }> = (props) => {
    const { id } = props;
    const [user, setUser] = useState<Users | null>(null);
	const router = useRouter();

    useEffect(() => {
        if (!user) {
            axios.get(`/api/user/${id}`).then(({ data }) => {
                setUser(data);
            });
        }
    }, []);

    console.log(user);

    return (
        <div className="bg-gradient-to-r from-gray-900 bg-gray-800 w-full h-full max-h-full overflow-y-auto">
            <p className="absolute top-5 left-5 text-white">Welcome {user?.firstName}</p>
            <button
				className="absolute top-5 right-20 text-white"
                type="button"
                onClick={() => {
                    delete_cookie("id");
					router.push("/login")
                }}
            >
                Logout
            </button>
            <ActionBar />
            <Categories />
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.req.cookies;
    if (id) {
        return {
            props: {
                id,
            },
        };
    } else {
        return {
            redirect: {
                permanent: false,
                destination: "/login",
            },
        };
    }
};

export default Home;
