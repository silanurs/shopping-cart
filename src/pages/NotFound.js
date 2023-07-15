import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const NotFound = ()=>{
    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            navigate("/")
        }, 2000)
    }, [])
    return (<h1 className="not-found">Not Found</h1>)
}
export default NotFound