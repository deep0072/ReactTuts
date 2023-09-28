import avatar from "../../../assets/avatar.svg"

const Person = ({name, nickName ="no name yet", images}) => {

    // i used "??"" it will give avatar if image url is undefined
    const imgUrl = images?.[0]?.small?.url ?? avatar
    console.log(imgUrl ,"img url")
  return (
    <div>
        <img src={imgUrl} alt={name}  style={{width:"50px"}} />
        <h4>{name}</h4>
        <p>NickName : {nickName}</p>

        
    </div>
  ) 
}

export default Person