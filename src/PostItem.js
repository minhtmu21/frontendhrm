import { useState, useEffect } from "react"

function PostItem(props) {
    const [listData, setListData] = useState([])
    const [nameData, setNameData] = useState('posts')
    const listName = ['posts', 'comments','albums']
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${nameData}`)
            .then((res) => res.json())
            .then((data) =>{
                setListData(data)
            })
    },[nameData])    
    return (
        <div className="mt-3">
            <div>
                {listName.map(name =>(
                    <button className="btn me-2"
                        key={name} 
                        onClick={()=>setNameData(name)}
                        style={name === nameData ? {color: "white", background: "black"} : {}}
                    >
                        {name}
                    </button>
                ))}
            </div>
            <ul className="list-group mt-3">
                {listData.map((data, index) => (
                    <li className="list-group-item" key={index}>
                        {data.title || data.body}
                    </li>
                ))}
            </ul>
        </div>
    )
} 
export default PostItem;