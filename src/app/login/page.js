
export default function Login() {
    return (
        <div className="bg-[#FFEDDB] flex justify-center items-center h-screen ">
            <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Utilisateur
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Utilisateur" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Mot de passe
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-[#EDCDBB] hover:bg-[#BF9270] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Log in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}