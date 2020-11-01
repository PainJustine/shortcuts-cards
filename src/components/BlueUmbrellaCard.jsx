import React from "react";
import styled from "styled-components";

const Card = styled.article`
  background-image: url("https://v4h4w3d3.rocketcdn.me/wp-content/uploads/2013/01/le-parapluie-bleue-03.jpg");
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

function BlueUmbrellaCard() {
  return (
    <Card>
      <Content>
        <Synopsis>
          <Title>
            <Links href="https://fr.wikipedia.org/wiki/Le_Parapluie_bleu">
              Le Parapluie Bleu
            </Links>
          </Title>
          <p>
            Une nouvelle heure de pointe débute avant que la pluie ne commence à
            tomber, et la ville s'éveille sous le son de l'eau s'écoulant des
            gouttières, du sifflement des auvents et des gargouillis des
            caniveaux. Au coeur de ce décor, deux parapluies, l'un bleu, l'autre
            non, tombent amoureux pour la vie.
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
                <ListItemSpan>2013</ListItemSpan>
              </ListItem>
              <ListItem>
                Genre :<br></br>
                <ListItemSpan>Romance, Jeunesse, Animation</ListItemSpan>
              </ListItem>
            </ul>
          </div>
          <div>
            <ul>
              <ListItem>
                Réalisé par :<br></br>
                <ListItemSpan>Saschka Unseld</ListItemSpan>
              </ListItem>
              <ListItem>
                Avec :<br></br>
                <ListItemSpan>Sarah Jaffe</ListItemSpan>
              </ListItem>
            </ul>
          </div>
        </Informations>
      </Content>
    </Card>
  );
}

export default BlueUmbrellaCard;
