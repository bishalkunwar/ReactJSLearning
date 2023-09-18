// conditional rendering function prototype:
const ConditionRender = ({name, isPacked})=>{
    if(isPacked){
      return(
        <li className="item">{name}✔</li>
      )
    }return(
      <li className="item">{name}</li>
    );
};
  
export default ConditionRender;