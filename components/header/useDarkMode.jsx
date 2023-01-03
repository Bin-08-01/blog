import {useEffect, useState} from "react";

const useDarkMode = () => {

    const [isDarkMode, setDarkMode] = useState(null);

    useEffect(()=>{
        if(localStorage.theme === 'dark'){
            setDarkMode(true);
        }else{
            setDarkMode(false);
        }
    }, []);

    const toggleDarkMode = (isCheck) => {
        localStorage.setItem("theme", isCheck ? "dark" : "light");
        setDarkMode(isCheck);
    }


    useEffect(() => {
        if(localStorage.theme==='dark'){
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode])
    return [isDarkMode, toggleDarkMode];
}

export default useDarkMode;
