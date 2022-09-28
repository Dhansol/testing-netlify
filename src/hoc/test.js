const Wrapper = (Component)=>{
   const NewComponent = ()=>{
    return <Component newLine="Something new"/>
   }
return NewComponent;
}

export default Wrapper;