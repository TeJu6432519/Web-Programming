import React from 'react';
import ProfileImg from './components/profileImage';
import UserInfo from './components/userInfo';
import UserPosts from './components/userPosts';

function ProfilePage(){
    return(
        <div>
        <ProfileImg/><br/>
        <UserInfo/>
        <UserPosts/>
        </div>
    );
}

export default ProfilePage;