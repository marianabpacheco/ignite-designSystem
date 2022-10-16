import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { InputHTMLAttributes } from 'react';


export interface TextInputRootProps {
    children: React.ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
    return (
        <div className={clsx(
            `flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300`)}>
                {props.children}
        </div>
    )
}

export interface TextInputIconPros{
    children: React.ReactNode;
}


function TextInputIcon(props: TextInputIconPros) {
    return(
   <Slot className='w-6 h-6 text-gray-400' >
    {props.children}
   </Slot>
    )
 }

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
    return (
            <input
                className="bg-transparent flex-1 text-gray-100  outline-none text-xs placeholder:text-gray-400"
                {...props}

            >
            </input>
    )
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}