import styled from 'styled-components';
import { Header } from './components/Header/Header';
import { GlobalStyle } from './styles/global';
import { ProfileInfo } from './components/ProfileInfo/ProfileInfo';
import { GithubRepo } from './components/GithubRepo/GithubRepo';
import { ReactNode, useState } from 'react';
import useGitHubApi from './hooks/useGitHubApi/useGitHubApi';
import { Row } from 'react-bootstrap';

const GithubRepoFolderLoading = styled.p`
  all: unset;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.2;
  color: var(--black-100);
  text-align: center;
`;

type LoadingInfoProps = {
  children: ReactNode;
};

export function LoadingInfo({ children }: LoadingInfoProps) {
  return (
    <Row className="justify-content-center align-items-end">
      <GithubRepoFolderLoading>{children}</GithubRepoFolderLoading>
    </Row>
  );
}

export function App() {
  const [inputGithubUser, setInputGithubUser] =
    useState<string>('react-bootstrap');

  const { profile, repos, loading, error } = useGitHubApi(`${inputGithubUser}`);

  console.log('respo', repos);

  return (
    <>
      <Header
        inputGithubUser={inputGithubUser}
        setInputGithubUser={setInputGithubUser}
      />
      <main>
        <ProfileInfo
          infoProfileGithub={profile}
          loading={loading}
          error={error}
        />
        <GithubRepo
          repos={repos}
          loading={loading}
          message={profile.message}
          error={error}
        />
      </main>
      <GlobalStyle />
    </>
  );
}
