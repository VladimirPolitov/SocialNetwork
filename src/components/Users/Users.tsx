import React from "react";
import styles from './users.module.css';

let Users = (props: any) => {

    if (props.users.length === 0) {
    props.setUsers([
            {
                id: '1',
                photoUrl: 'https://lh3.googleusercontent.com/proxy/V3mGvW4U3pP-_efqAzivBJYKDZyrlitD5Iu8GffUsww5TxocGvVxknkzwaF9h11BubfmTdlyyHy5KtRCIVypg_o5k0u-rDpdwCYrfb_QmrZ2EZsPGnEqtq1uPAH5eb0pq6_BTBCRxGPAYjaR',
                followed: false,
                fullName: "Dmitry",
                status: "Iam a BOSS",
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: '1',
                photoUrl: 'https://lh3.googleusercontent.com/proxy/V3mGvW4U3pP-_efqAzivBJYKDZyrlitD5Iu8GffUsww5TxocGvVxknkzwaF9h11BubfmTdlyyHy5KtRCIVypg_o5k0u-rDpdwCYrfb_QmrZ2EZsPGnEqtq1uPAH5eb0pq6_BTBCRxGPAYjaR',
                followed: true,
                fullName: "Sasha",
                status: "Iam a BOSS too",
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: '1',
                photoUrl: 'https://lh3.googleusercontent.com/proxy/V3mGvW4U3pP-_efqAzivBJYKDZyrlitD5Iu8GffUsww5TxocGvVxknkzwaF9h11BubfmTdlyyHy5KtRCIVypg_o5k0u-rDpdwCYrfb_QmrZ2EZsPGnEqtq1uPAH5eb0pq6_BTBCRxGPAYjaR',
                followed: false,
                fullName: "Andrew",
                status: "Iam a BOSS too",
                location: {city: 'Kiev', country: 'Ukraine'}
            },
        ],

    )}

    return <div>
        {
            props.users.map((u: any) => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={()=> {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={()=> {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>

                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users