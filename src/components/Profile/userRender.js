import UserProfileComponent from "./userProfileComponent";
import user from './user.json'

export default function userRend() {
    
    return (
        <div>
            <UserProfileComponent
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}   
            />
        </div>
    )
}