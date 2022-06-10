import Head from "next/head";
import { ReactNode } from "react";

const PageLayout:React.FC<{children:ReactNode}> = (props) => {
	const {children} = props

    return (
        <>
            <Head>
				<title>Specs 0-0 | Login</title>
				<meta name="description" content="Login page for Specs 0-0"/>
				<meta name="author" content="Wickus Van der Merwe"/>
			</Head>
			<main>{children}</main>
        </>
    );
};

export default PageLayout;
