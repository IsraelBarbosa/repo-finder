import { useState, useEffect } from 'react';

export interface ProfileGithub {
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  location: string;
  blog: string;
  html_url: string;
  message: string;
}

export interface RepoGithub {
  name: string;
  html_url: string;
}

function useGitHubApi(username: string) {
  const [profile, setProfile] = useState<ProfileGithub>({} as ProfileGithub);
  const [repos, setRepos] = useState<RepoGithub[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Criação das promessas para as chamadas de API
        const profilePromise = fetch(
          `https://api.github.com/users/${username}`,
          {
            headers: {
              Authorization: `${process.env.REACT_APP_GITHUB_TOKEN}`,
            },
          }
        );

        const reposPromise = fetch(
          `https://api.github.com/users/${username}/repos`,
          {
            headers: {
              Authorization: `${process.env.REACT_APP_GITHUB_TOKEN}`,
            },
          }
        );

        // Uso de Promise.all para esperar ambas as promessas
        const [profileResponse, reposResponse] = await Promise.all([
          profilePromise,
          reposPromise,
        ]);

        // Conversão das respostas para JSON
        const profileData = await profileResponse.json();
        const reposData = await reposResponse.json();

        // Atualização do estado com os dados recebidos
        setProfile(profileData);
        setRepos(reposData);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  return { profile, repos, loading, error };
}

export default useGitHubApi;
