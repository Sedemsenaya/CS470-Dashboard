"use client"
import React, {useState} from "react";

function Toggle() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleMode = () => {
        setIsDarkMode(prevMode => !prevMode)
    }

    return (
        <div>

        </div>
    )
}