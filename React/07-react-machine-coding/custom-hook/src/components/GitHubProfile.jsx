import { useState } from "react"
import useGitHubUser from "../hooks/useGitHubUser"

const GitHubProfile = () => {
    const [username, setUsername] = useState('')
    const { data, error, loading } = useGitHubUser(username);

    console.log({ data, error, loading });
    return (
        <div>
            <input
                type="text"
                placeholder="Enter GitHub username"
                onChange={(e) => setUsername(e.target.value)}
            />

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}

            {data && (
                <div>
                    <h3>{data.name}</h3>
                    <p>Followers: {data.followers}</p>
                    <p>Public Repos: {data.public_repos}</p>
                    <img src={data.avatar_url} width="100" />
                </div>
            )}
        </div>
    )
}

export default GitHubProfile
