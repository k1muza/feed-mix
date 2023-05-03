import { useState } from "react";

export default function useLocalStorage(key: string, defaultValue: any) {
    const [value, setKeyValue] = useState(() => {
        try {
            const v = localStorage.getItem(key)
            return v || defaultValue
        } catch (error) {
            return defaultValue
        }
    })

    const setValue = (v: any) => {
        setKeyValue(v)
        try {
            const parsed = JSON.stringify(v)
            localStorage.setItem(key, parsed)
            setKeyValue(v)
        } catch (error) {
            console.log('Failed to set value ', error)
        }
    }

    return [value, setValue]
}