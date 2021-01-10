const User = (props)=>{
    console.log("User",props);
    return (
        <div>
            User
            <button onClick={()=>props.history.goBack()}>返回</button>
        </div>
    )
}
export default User;