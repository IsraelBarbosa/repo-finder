import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import Logo from '../../images/ri-github-fill.svg';
import search from '../../images/search.svg';
import React from 'react';

const HeaderLayout = styled.header`
  padding: 3rem 0;
  margin-bottom: 5rem;
  background: linear-gradient(
    90deg,
    #24292d -5.74%,
    #2fbb4f 56.29%,
    #0d74e7 112.17%
  );
`;

const HeaderLogo = styled.img`
  margin-bottom: 0.5rem;
`;

const HeaderTitle = styled.h1`
  font-size: 2.8rem;
  color: var(--white);
`;

const HeaderParagraph = styled.p`
  all: unset;
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--white);
`;

const HeaderInput = styled.input`
  width: 100%;
  padding: 0.8rem 6rem 0.8rem 1rem;
  font-size: 1.4rem;
  color: var(--blue-200);
  background-color: var(--white);
  border: none;
  border-radius: 0.4rem;
`;

const HeaderBtnSearch = styled.button`
  all: unset;
  position: absolute;
  top: 50%;
  right: 0rem;
  transform: translate(-50%, -50%);
`;

const HeaderForm = styled.form`
  position: relative;
  width: 100%;
  max-width: 30rem;
`;

interface UserProps {
  inputGithubUser: string;
  setInputGithubUser: React.Dispatch<React.SetStateAction<string>>;
}

export function Header({ inputGithubUser, setInputGithubUser }: UserProps) {
  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <HeaderLayout>
      <Container>
        <Row className="justify-content-center">
          <Col className="d-flex justify-content-center align-items-center flex-column mb-4">
            <HeaderLogo src={Logo} alt="Logo repo finder" />
            <HeaderTitle>RepoFinder</HeaderTitle>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="d-flex align-items-center flex-column">
            <div
              style={{ width: '100%', maxWidth: '30rem' }}
            >
              <HeaderParagraph className="text-start">
                Quem criou o repo?
              </HeaderParagraph>
              <HeaderForm
                className="d-flex align-items-center flex-column"
                onSubmit={formSubmitHandler}
              >
                <HeaderInput
                  type="search"
                  placeholder="Nome do proprietário"
                  value={inputGithubUser}
                  onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setInputGithubUser(e.target.value)
                  }
                />
                <HeaderBtnSearch type="submit">
                  <img src={search} alt="search" />
                </HeaderBtnSearch>
              </HeaderForm>
            </div>
          </Col>
        </Row>
      </Container>
    </HeaderLayout>
  );
}
