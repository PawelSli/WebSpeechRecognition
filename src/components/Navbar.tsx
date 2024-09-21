import Link from 'next/link'

export default function Navbar() {

    return (
        <nav className='bg-gray-900 text-white shadow-md'>
            <div className="mx-auto py-3 flex justify-start">
                <div className='flex space-x-4 ml-4 md:ml-5 lg:ml-6'>
                    <Link href="/live-to-text" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                        Live to text
                    </Link>
                    <Link href="/file-to-text" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                        File to text
                    </Link>
                </div>
            </div>
        </nav>
    );
}