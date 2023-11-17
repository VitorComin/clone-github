import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from "./styles";

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={"username"} to={"/VitorComin"}>
          VitorComin
        </Link>

        <span></span>

        <Link className={"reponame"} to={"/VitorComin/dashboard-tiflux"}>
          Dashboards Tiflux
        </Link>
      </Breadcrumb>

      <p>Contains all off my dashboards for Tiflux.</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={"https://github.com/VitorComin/desafio-react"}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
