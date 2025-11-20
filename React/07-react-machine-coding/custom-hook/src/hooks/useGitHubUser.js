import { useEffect, useState } from "react"

const useGitHubUser = (username) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchGitHubUser = async () => {
        try {
            setLoading(true);
            setError(null);

            const res = await fetch(`https://api.github.com/users/${username}`);
            if (!res.ok) {
                setError(new Error('Failed to fetch GitHub user'));
                return;
            }
            const userData = await res.json();
            setData(userData);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (username) {
            fetchGitHubUser();
        }
    }, [username]);
    return { data, loading, error };
}

export default useGitHubUser