import useCurrentUser from "@/hoocks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);

    // Log the session for debugging
    console.log('Session:', session);

    // If no session, redirect to auth page
    if (!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false,
            },
        };
    }

    // If session exists, proceed to the profiles page
    return {
        props: {},
    };
}

const Profiles = () => {
    const router = useRouter();
    const { data: user } = useCurrentUser();

    return (
        <div className="flex items-center justify-center h-screen bg-black">
            <div className="flex flex-col items-center">
                <h1 className="text-3xl md:text-6xl text-white text-center mb-8 rounded-lg">
                    Who is watching?
                </h1>
                <div onClick={() => router.push('/')} className="flex flex-col items-center justify-center">
                    <div className="group flex-row w-44">
                        <div className="
                            w-44
                            h-44
                            rounded-lg // Change to 'rounded-full' for a circular image
                            flex
                            items-center
                            justify-center
                            border-2
                            border-transparent
                            group-hover:cursor-pointer
                            group-hover:border-white
                            overflow-hidden
                        ">
                            <img 
                                src="/images/profile.jpg" 
                                alt="Profile" 
                                className="w-full h-full object-cover rounded-lg" // Add rounded here
                            />
                        </div>
                    </div>
                    <div className="
                        mt-4
                        text-gray-400
                        text-center
                        group-hover:text-white
                    ">
                        {user?.name}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profiles;
