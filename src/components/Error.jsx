import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();

    return (
        <div>
            <h1 className="text-4xl ">Oops!</h1>
            <p className="text-2xl">Sorry, an unexpected error has occurred.</p>
            <p className="text-2xl">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default Error;






