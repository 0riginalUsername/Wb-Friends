import {useState, useEffect} from 'react';
import axios from 'axios'

export default function App() {
  const [friends, setFriends] = useState([])
  const [picture, setPicture] = useState('')
  const [name, setName] = useState('')
  useEffect(()=> {
  axios.get('/api/friends').then(res=>{setFriends(res.data)})
  },[])
  function handleAddFriendsClick() {
    let newFriend = {
      name: name,
      picture: picture
    }

    setFriends([...friends, newFriend])
    setName('')
    setPicture('')
  }
  const friendInfo = friends.map((friend, i) => 
  <div key={friend.name + i}>
  <img width="300px"src={friend.picture}/>
  <span >{friend.name}</span>
  </div>
  )
  console.log(friendInfo);
  return <div>
    PictureURL:<input value={picture} onChange={e => {setPicture (e.target.value)}}/><br></br>
    Name:<input value={name} onChange={e=> {setName (e.target.value)}}/>
    <button onClick={handleAddFriendsClick}>Add Friends</button>
    {friendInfo}
  </div>;
}
