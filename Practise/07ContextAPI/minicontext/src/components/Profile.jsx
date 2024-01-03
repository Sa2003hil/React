import { useContext } from 'react'
import UserContext from '../context/userContext'

function Profile() {
    // this  is how we get the data from the context
    const { user } = useContext(UserContext)
    if (!user) return <div>please Login !</div>

    return <div>Welcome {user.username}</div>
}

export default Profile