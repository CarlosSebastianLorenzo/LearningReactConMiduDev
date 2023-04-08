import './TwitterFollowCard.css'
import { useState } from 'react'

export function TwitterFollowCard ( {format=(e)=>("Not Found"), userName='', children='Unknown', initialIsFollowing=false}){
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const text = isFollowing ? 'Following' : 'Follow'
    const buttonClassName = isFollowing ? 'tw-unfollowButton' : 'tw-followButton'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <figure className='tw-followFigure'>
                <img className='tw-followImg' src={`https://unavatar.io/github/${userName}`} alt="Sebastian Lorenzo" />
                <figcaption className='tw-followFigcaption'>
                    <a className='tw-followAnchor' href={`https://github.com/${userName}`} target="_blank">
                        {children}
                    </a>
                    <p>{format(userName)}</p>
                </figcaption>
            </figure>
                <button className={buttonClassName} onClick={handleClick}>
                    <span>{text}</span>
                    <span>Stop Following</span>
                </button>
        </article>
    )
}