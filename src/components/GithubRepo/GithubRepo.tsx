import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import { RepoGithub } from '../../hooks/useGitHubApi/useGitHubApi';
import { LoadingInfo } from '../../App';

const GithubRepoTitle = styled.h1`
  width: 100%;
  padding-bottom: 1rem;
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--blue-400);
  text-align: center;

  border-bottom-width: 0.5rem;
  border-bottom-style: solid;
  border-image: linear-gradient(to right, #373737, #2fbb4f, #00a6fb) 1;
`;

const GithubRepoFolder = styled.div``;

const GithubRepoFolderTitle = styled.h2`
  all: unset;
  max-width: 160px;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
  color: var(--black-100);

  /* white-space: nowrap; */
  overflow: hidden;
  text-overflow: ellipsis;
`;

const GithubRepoFolderButton = styled.button`
  all: unset;
  background-color: var(--blue-100);
  border-radius: 0.4rem;
  transition: filter 0.3s;

  &:hover {
    filter: contrast(70%);
  }
`;

const GithubRepoFolderButtonLink = styled.a`
  all: unset;
  display: inline-block;
  padding: 1rem 0.6rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--white);
`;

type Props = {
  repos: RepoGithub[];
  loading: boolean;
  message: string;
  error: string;
};

export function GithubRepo({ repos, loading, message, error }: Props) {
  return (
    <Container>
      <Row className="justify-content-center align-items-center">
        <Col className="col-8 col-sm-6 col-md-5 col-lg-3 d-flex justify-content-center align-items-center flex-column mb-4">
          <GithubRepoTitle>Repósitorios</GithubRepoTitle>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-end">
        {loading && <LoadingInfo>Carregando...</LoadingInfo>}
        {message && <LoadingInfo>{message}</LoadingInfo>}
        {error && <LoadingInfo>{error}</LoadingInfo>}
        {!loading &&
          !message &&
          Array.isArray(repos) &&
          repos.map(({ name, html_url }, index) => (
            <Col
              key={index}
              className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center align-items-center flex-column mb-4"
            >
              <GithubRepoFolder className="d-flex justify-content-center align-items-center flex-column">
                <GithubRepoFolderTitle className="overflow-hidden mb-3">
                  {name}
                </GithubRepoFolderTitle>
                <GithubRepoFolderButton>
                  <GithubRepoFolderButtonLink href={html_url}>
                    Ver repositório
                  </GithubRepoFolderButtonLink>
                </GithubRepoFolderButton>
              </GithubRepoFolder>
            </Col>
          ))}
      </Row>
    </Container>
  );
}
