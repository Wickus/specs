import PageLayout from "@/components/layouts";
import { LoginForm } from "@/components/forms";

const LoginPage = () => {
    return (
        <PageLayout>
            <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-[#37bffd] to-[#ff6666]">
                <LoginForm />
            </div>
        </PageLayout>
    );
};

export default LoginPage;
