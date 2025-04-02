export default function CreateInvite() {
    return (
        <>
        <form className="flex flex-col gap-1 w-fit">
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="details">Details: </label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="message">Message: </label>
                <input type="text" />
            </div>
            <div className="flex flex-col w-fit bg-neutral-300">
                <button type="submit" className="w-full pl-2 pr-2">create</button>
                <button type="submit" className="w-full pl-2 pr-2">back</button>
            </div>
        </form>
        </>
    )
}