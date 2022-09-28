import { useContext } from "react";
import { userContext } from "../App";
import Wrapper from "../hoc/test";

const ComponentA = (props)=>{
const value = useContext(userContext);
value.fun("Wallah its working")
return <div>{value.data}{props.newLine}</div>
}

export default Wrapper(ComponentA);