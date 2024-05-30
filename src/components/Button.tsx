import {HTMLProps} from "react";

type Props = HTMLProps<HTMLButtonElement>

function Button(props: Props) {
    return (
        <button
            className={"w-[200px] disabled:opacity-50 rounded-full outline-0 text-2xl bg-red-500 px-5 py-3"}
            {...props}
        />
    )
}

export default Button
