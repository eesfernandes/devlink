import { Link } from "react-router-dom";

export function Error(){

    return(
        <div className="flex w-full min-h-screen justify-center items-center flex-col text-white">
            <h1 className="font-bold text-4xl mb-4">Error 404</h1>
            <h1 className="font-bold text-4xl mb-4">Página não encontrada!</h1>

            <Link to="/" className="bg-gray-50/20 py-1 px-4 mt-2 rounded-md">
                Voltar para Home
            </Link>
        </div>
    )
}