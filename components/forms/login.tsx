import Image from "next/image";
import { login } from "@/lib/forms/login";
import { useRouter } from "next/router";

const LoginForm = () => {
    const inputStyles = "border-[1px] w-full p-2 border-gray-300 rounded-md mb-5";
    const router = useRouter();

    const onSubmit = () => {
        login.then((res: any) => {
            if (res.success) {
                router.push("/");
            }
        });
    };

    return (
        <div className="max-w-[500px] w-full p-10 shadow-lg shadow-black-1/2 rounded-md bg-white">
            <div className="max-w-[160px] mx-auto mb-5">
                <Image src="/logo.png" width={1366} height={660} alt="Specs Logo" />
            </div>
            <form
                className="flex flex-col items-center justify-center"
                onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit();
                }}
            >
                <input className={inputStyles} type="text" name="username" placeholder="Username" />
                <input className={inputStyles} type="password" name="password" placeholder="Password" />
                <div className="flex items-center justify-between w-full mt-5">
                    <button type="submit" className="bg-gray-300 w-[180px] h-[40px] rounded-md">
                        Login
                    </button>
                    <button type="button" className="bg-gray-300 w-[180px] h-[40px] rounded-md">
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
