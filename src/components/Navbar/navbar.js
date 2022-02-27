import { useSession, signIn, signOut } from "next-auth/react"

function NavBar() {
    const { data: session } = useSession()
    if (session) {
        {/* If User has logged in */}
        return <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-xl">MakeMeAfford.</span>
                    </a>
                    <nav className="text-center md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a href="/" className="mr-5 hover:text-gray-900">Home</a>
                        <a href="/dashboard" className="mr-5 hover:text-gray-900">Make Budget</a>
                    </nav>
                    <a className="mx-auto text-sm hover:text-gray-900 invisible sm:visible">Signed in as {session.user.email}</a>
                    <button onClick={() => signOut()} className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-white mt-4 md:mt-0">Log Out
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
                <hr className="text-gray-800"/>
            </header>
        </>
    }
    {/* If User is logged out/hasn't logged in yet */}
    return <>
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-xl">MakeMeAfford.</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <a href="/" className="mr-5 hover:text-gray-900">Home</a>
                    <a onClick={() => signIn()} className="mr-5 hover:text-gray-900">Make Budget</a>
                </nav>
                <button onClick={() => signIn()} className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-white mt-4 md:mt-0">Log In
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    </>
}

export default NavBar