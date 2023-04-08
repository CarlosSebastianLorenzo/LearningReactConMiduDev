import {TwitterFollowCard} from './TwitterFollowCard.jsx'
import React from 'react'
import './App.css'

let users = [
    {   id: 1,
        name : 'Carlos Sebastian Lorenzo',
        userName:   'CarlosSebastianLorenzo',
        isFollowing: true
    },
    {   id: 2,
        name : 'Ignacio Vasallo',
    userName:   'Vassa94',
    isFollowing: false
    },
    {   id: 3,
        name : 'Joaquin Sampieri',
    userName:   'joacosam',
    isFollowing: true
    },
    {   id: 4,
        name : 'Fernando Andres Raggio',
    userName:   'JoeTheorium',
    isFollowing: true
    },
    {   id: 5,
        name : '',
    userName:   '',
    isFollowing: false
    }
]

export function App (){
    const format = (userName) => userName=='' ? '' : `@${userName}` 

    return (
        <div>
            {users.map(({name, userName, isFollowing, id})=> (
            <TwitterFollowCard key={id} format={format} initialIsFollowing={isFollowing} userName={userName}>
                <h3>{name}</h3>
            </TwitterFollowCard>
            ))}
        </div>
    )
}