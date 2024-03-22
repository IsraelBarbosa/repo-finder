import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import locationIcon from '../../images/location.svg';
import website from '../../images/website.svg';
import github from '../../images/ri-github-fill.svg';
import { ProfileGithub } from '../../hooks/useGitHubApi/useGitHubApi';
import { LoadingInfo } from '../../App';

const ProfileInfoImg = styled.img`
  width: 100%;
  margin-bottom: 1rem;
  max-width: 19.6rem;
  background: linear-gradient(-60deg, #2fbb4f, #00a6fb) border-box;
  border-radius: 50rem;
  border: 0.4rem solid transparent;
`;

const ProfileInfoTitle = styled.h1`
  all: unset;
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--blue-500);
  text-align: center;
`;

const ProfileInfoParagraph = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--blue-300);
  text-align: center;
`;

const ProfileInfoAmount = styled.span`
  font-size: 2rem;
  font-weight: 500;
  color: var(--blue-400);
  text-align: center;
`;

const ProfileInfoAmountDesc = styled.span`
  font-size: 1.8rem;
  font-weight: 400;
  color: var(--preto-100);
  text-align: center;
`;

const ProfileInfoIconContact = styled.img`
  width: 100%;
  max-width: 2.2rem;
  filter: invert(24%) sepia(57%) saturate(2436%) hue-rotate(177deg)
    brightness(93%) contrast(101%);
`;

const ProfileInfoContact = styled.span`
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--preto-100);
`;

const ProfileInfoButton = styled.button`
  all: unset;
  display: block;
  background-color: var(--green-100);
  border-radius: 0.4rem;
  transition: filter 0.3s;

  &:hover {
    filter: contrast(70%);
  }
`;

const ProfileInfoImgButton = styled.img`
  width: 100%;
  max-width: 3.5rem;
`;

const ProfileInfoButtonLink = styled.a`
  all: unset;
  display: block;
  padding: 0.4rem;
  font-size: 1.6rem;
  font-weight: 500;
`;

interface Props {
  infoProfileGithub: ProfileGithub;
  loading: boolean;
  error: string;
}

export function ProfileInfo({
  infoProfileGithub: {
    avatar_url,
    bio,
    blog,
    followers,
    html_url,
    location,
    name,
    public_repos,
    message,
  },
  loading,
  error,
}: Props) {
  return (
    <div className="mb-5">
      <Container>
        {loading && <LoadingInfo>Carregando...</LoadingInfo>}
        {message && <LoadingInfo>{message}</LoadingInfo>}
        {error && <LoadingInfo>{error}</LoadingInfo>}
        {!loading && !message && (
          <Row className="justify-content-center align-items-center">
            <Col className="col-12 col-md-4 col-lg-4 col-xl-3 col-xxl-2 d-flex justify-content-center align-items-center flex-column">
              <ProfileInfoImg src={avatar_url} alt="profile" />
              <ProfileInfoTitle>{name}</ProfileInfoTitle>
              <ProfileInfoParagraph>{bio}</ProfileInfoParagraph>
            </Col>
            <Col className="col-12 col-md-8 col-lg-6 col-xl-4 col-xxl-4 d-flex flex-column gap-5">
              <div className="d-flex justify-content-center justify-content-md-start align-items-center gap-5">
                <div className="d-flex flex-column">
                  <ProfileInfoAmount>{public_repos}</ProfileInfoAmount>
                  <ProfileInfoAmountDesc>Repositórios</ProfileInfoAmountDesc>
                </div>
                <div className="d-flex flex-column">
                  <ProfileInfoAmount>{followers}</ProfileInfoAmount>
                  <ProfileInfoAmountDesc>Seguidores</ProfileInfoAmountDesc>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center align-items-md-start flex-column gap-3">
                <div className="d-flex align-items-center gap-3">
                  <ProfileInfoIconContact src={locationIcon} alt="location" />
                  <ProfileInfoContact>
                    {location || 'Não informado'}
                  </ProfileInfoContact>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <ProfileInfoIconContact src={website} alt="blog" />
                  <ProfileInfoContact>
                    {blog || 'Não informado'}
                  </ProfileInfoContact>
                </div>
              </div>

              <ProfileInfoButton>
                <ProfileInfoButtonLink
                  className="d-flex justify-content-center align-items-center gap-3"
                  href={html_url}
                  rel="noopener noreferrer"
                >
                  <ProfileInfoImgButton src={github} alt="github" />
                  Perfil
                </ProfileInfoButtonLink>
              </ProfileInfoButton>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}
