import {FormEvent, forwardRef, HTMLProps} from "react";
import clsx from "clsx";

type Props = HTMLProps<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, Props>(({
                                                       className,
                                                       ...props
                                                   }, forwardedRef) => {
    return (
        <input {...props}
               ref={forwardedRef}
               className={clsx("focus:ring-2 outline-0 px-5 py-3 text-2xl rounded-full border-white/30 border-2 bg-transparent", className)}/>
    )
})

Input.displayName = "Input";

export default Input
