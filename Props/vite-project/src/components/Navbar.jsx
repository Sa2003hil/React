// import Link from "next/link";

export default function Navbar() {
    return (
        <div className="w-screen h-20 py-2 px-9 bg-white flex items-center justify-between text-black">
            <div className="flex items-center justify-center w-2/2">
                <p className="text-black uppercase tracking-widest font-bold">Evetease</p>
            </div>
            <div className="w-full">
                <ul className="flex items-center justify-end gap-16 w-full font-semibold text-gray-600">
                    <li className="text-black">
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Discover</a>
                    </li>
                    <li>
                        <a href="/">Special Deals</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                    <li className="text-black">
                        <a href="/signIn">Sign In</a>
                    </li>
                    <li className="text-white font-medium rounded-full bg-[#5D50C6] py-2 px-4 shadow-black">
                        <a href="/">Sign Up</a>
                    </li>
                </ul>
            </div>
            <div></div>
        </div>
    );
}
