import React from "react";
import styled from "styled-components";

const Card = styled.article`
  background-image: url("https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1520776671707-WFA1200ZHLBN7FQ6WM0O/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/cover1.jpg?format=1000w");
  background-size: cover;

  width: 80%;
  height: 400px;
  margin-left: 10%;
  margin-top: 5%;
  margin-bottom: 5%;

  color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const Content = styled.main`
  display: flex;
  height: 400px;
  background-color: rgba(91, 91, 91, 0.8);
`;

const Synopsis = styled.section`
  max-width: 40%;
  margin-left: 5%;
  margin-top: 7%;
`;

const Title = styled.h1`
  padding: 8px;
  border-bottom: solid 2px;
`;

const Links = styled.a`
  text-decoration: none;
  color: white;
`;

const Informations = styled.section`
  display: flex;
  margin-top: 13%;
  margin-left: 5%;
`;

const ListItem = styled.li`
  list-style-type: none;
  padding-bottom: 9px;

  color: rgba(216, 216, 216);
`;

const ListItemSpan = styled.span`
  color: white;
`;

function PapermanCard() {
  return (
    <Card>
      <Content>
        <Synopsis>
          <Title>
            <Links href="https://fr.wikipedia.org/wiki/Paperman">
              Paperman
            </Links>
          </Title>
          <p>
            Le destin d'un jeune new-yorkais solitaire va changer en croisant la
            fille de ses rêves un matin. Convaincu qu'il ne la reverra jamais,
            il reprend espoir quand il la revoit devant son bureau. S'il peut
            compter sur son coeur et du papier pour attirer son attention, le
            destin lui réserve d'autres surprises.
          </p>
        </Synopsis>
        <Informations>
          <div>
            <ul>
              <ListItem>
                Durée :<br></br>
                <ListItemSpan>6 min</ListItemSpan>
              </ListItem>
              <ListItem>
                Date de sortie :<br></br>
                <ListItemSpan>2012</ListItemSpan>
              </ListItem>
              <ListItem>
                Genre :<br></br>
                <ListItemSpan>Romance, Comédie, Animation</ListItemSpan>
              </ListItem>
            </ul>
          </div>
          <div>
            <ul>
              <ListItem>
                Réalisé par :<br></br>
                <ListItemSpan>John Kahrs</ListItemSpan>
              </ListItem>
              <ListItem>
                Avec :<br></br>
                <ListItemSpan>
                  John Kahrs<br></br>Kari Wahlgren
                </ListItemSpan>
              </ListItem>
            </ul>
          </div>
        </Informations>
      </Content>
    </Card>
  );
}

export default PapermanCard;
