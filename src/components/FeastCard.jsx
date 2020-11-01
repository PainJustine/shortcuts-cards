import React from "react";
import styled from "styled-components";

const Card = styled.article`
  background-image: url("https://i.servimg.com/u/f39/17/78/53/43/feast_12.jpg");
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
  background-color: rgba(91, 91, 91, 0.7);
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

function FeastCard() {
  return (
    <Card>
      <Content>
        <Synopsis>
          <Title>
            <Links href="https://fr.wikipedia.org/wiki/Le_Festin_(court_m%C3%A9trage)">
              Le Festin
            </Links>
          </Title>
          <p>
            L'histoire de la vie amoureuse d'un homme du point de son meilleur
            ami et chien, Winston, se révèle bouchée après bouchée dans les
            repas qu'ils partagent.
          </p>
        </Synopsis>
        <Informations>
          <div>
            <ul>
              <ListItem>
                Durée :<br></br>
                <ListItemSpan>8 min</ListItemSpan>
              </ListItem>
              <ListItem>
                Date de sortie :<br></br>
                <ListItemSpan>2014</ListItemSpan>
              </ListItem>
              <ListItem>
                Genre :<br></br>
                <ListItemSpan>Comédie, Drame, Animation</ListItemSpan>
              </ListItem>
            </ul>
          </div>
          <div>
            <ul>
              <ListItem>
                Réalisé par :<br></br>
                <ListItemSpan>Patrick Osborne</ListItemSpan>
              </ListItem>
              <ListItem>
                Avec :<br></br>
                <ListItemSpan>
                  Stephen Apostolina<br></br>
                  Kirk Baily<br></br>
                  Ben Bledsoe<br></br>
                  David Cowgill Terri Douglas<br></br>
                </ListItemSpan>
              </ListItem>
            </ul>
          </div>
        </Informations>
      </Content>
    </Card>
  );
}

export default FeastCard;
