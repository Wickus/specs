import PageLayout from "@/components/layouts";
import { LoginForm } from "@/components/forms";

const LoginPage = () => {
    return (
        <PageLayout>
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-gray-900 bg-gray-800">
                <LoginForm />
            </div>
        </PageLayout>
    );
};

export default LoginPage;
