import { gql, useQuery } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import { AuthService } from '../auth'
import { Live } from '../component/Live'

const GET_LIVES = gql`
query GetLives {
getAllLives {
liveId
title
author
category
}
}
`;


export const Lives = () => {

    const navigate = useNavigate()

    const { loading, error, data } = useQuery(GET_LIVES, {
        onError: (err) => {
            switch (err.message) {
                case 'jwt expired':
                    AuthService.logout()
                    navigate('/login')
                    window.location.reload()
                    break;
                // TODO: resolver otros casos de error
                default:
                    break;
            }
        }
    })

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
        <div className="container">
            <div className="row">
                {data.getAllLives.map((live) => <Live key={live.liveId} data={live} />)}
            </div>
        </div>
    )
} 