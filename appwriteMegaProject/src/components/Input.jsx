import React, {useId} from 'react';

const Input = React.forwardRef(
    function Input(
        {
            label,
            type = "text",
            className = "",
            ...props
        }, ref
    ) {
        const id = useId()
        return (
            <div className='w-full'>
                {label && 
                <label className='inline-block mb-1 pl-1'
                htmlFor={id}
                >
                   {label} 
                </label>}
                <input
                 type={type} 
                 className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full${className}`}
                 ref={ref}
                 {...props}
                 id={id}
                 />
            </div>
        )
    }
)

export default Input;


/*
ForwardRef kya hai?: ForwardRef ek tarika hai jisse hum ek Component ko ref object ko forward kar sakte hain, jisse hume us Component ke DOM element ya instance ko directly access karne ki suvidha milti hai.

Kaise kaam karta hai?: ForwardRef ka upyog hota hai jab hum ek Component ko create karte hain aur hume uske internal DOM elements ya methods ko parent Component se access karna hota hai, bina ki direct us Component ko render kiye bina.

Kaise implement karein?:

Sabse pehle, hum React.forwardRef() function ka use karte hain, jo ek higher-order function hai jo hume ref ko forward karne mein madad karta hai.
Fir hum apne Component ko define karte hain aur usko React.forwardRef() ke andar wrap karte hain.
Ab humare Component ke props mein ref ko accept karne ke liye hume forwardRef function ke andar ek callback function pass karni hoti hai, jo ref ko accept karega.
Finally, hum us ref ko apne internal elements ya instances ko refer karne ke liye use kar sakte hain.
*/