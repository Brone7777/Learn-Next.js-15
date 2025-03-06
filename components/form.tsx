'use client'

import { createCamps } from "@/utils/action"
import { useActionState } from "react"
import { useFormStatus } from "react-dom"

const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
        <button type="submit" disabled={pending}>
            {pending ? "Submitting..." : "Submit"}
        </button>
    );
};

const Form = () => {
    const [message, formAction] = useActionState(createCamps, null)//useActionState คือการใช้งาน state ของ action ที่เราสร้างขึ้นมา
    return (
        <>
            {message && <h1>{message}</h1>}
            <form action={formAction} className="flex gap-4">
                Form
                <input placeholder="name" name="title" className="border" defaultValue="Kanjana" />
                <input placeholder="location" name="location" className="border" defaultValue="Japan" />
                {/* <button type="submit">submit</button> */}
                <SubmitButton />
            </form>
        </>
    )
}
export default Form