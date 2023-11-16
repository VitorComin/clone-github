import React from "react";
import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
  RepoIcon,
  Tab,
} from "./styles";
import ProfileData from "../../components/ProfileData/index";
import RepoCard from "../../components/RepoCard/index";
import RandomCalendar from "../../components/RandomCalendar/index";

const Profile: React.FC = () => {
  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">29</span>
    </div>
  );

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>

        <span className="line" />
      </Tab>
      <Main>
        <LeftSide>
          <ProfileData
            username={"VitorComin"}
            name={"Vitor Gabriel Comin"}
            avatarUrl={"https://avatars.githubusercontent.com/u/106283734?v=4"}
            followers={2}
            following={4}
            company={"Tiflux"}
            location={"Joinville, Santa Catarina, Brazil."}
            email={"vitorgabrielcomin@gmail.com"}
            blog={"linkedin.com/in/vitorcomin"}
          />
        </LeftSide>

        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>

          <Repos>
            <h2>Random Repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  username={"VitorComin"}
                  reponame={"tiflux-dashboard"}
                  description={"Tiflux developed dashboards"}
                  language={n % 3 === 0 ? "JavaScript" : "TypeScript"}
                  stars={8}
                  forks={4}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
