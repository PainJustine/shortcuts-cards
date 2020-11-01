import React from "react";
import styled from "styled-components";

const Card = styled.article`
  background-image: url("https://www.chroniquedisney.fr/imgCartoon/pixar/2019-float-04.jpg");
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
  background-color: rgba(91, 91, 91, 0.5);
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

function EnvolCard() {
  return (
    <Card>
      <Content>
        <Synopsis>
          <Title>
            <Links href="https://www.disneyplus.com/fr-fr/movies/lenvol/7dIYGyfvHWEJ">
              L'envol
            </Links>
          </Title>
          <p>
            Un père découvre que son fils est différent des autres enfants, une
            différence des plus inattendues. Pour éviter que les autres ne le
            jugent, il le tient à l'abri des regards. Mais lorsque le don de son
            fils éclate au grand jour, il doit décider entre fuir et se cacher
            ou accepter son enfant tel qu'il est.
          </p>
        </Synopsis>
        <Informations>
          <div>
            <ul>
              <ListItem>
                Durée :<br></br>
                <ListItemSpan>9 min</ListItemSpan>
              </ListItem>
              <ListItem>
                Date de sortie :<br></br>
                <ListItemSpan>2019</ListItemSpan>
              </ListItem>
              <ListItem>
                Genre :<br></br>
                <ListItemSpan>Famille, Fantastique, Animation</ListItemSpan>
              </ListItem>
            </ul>
          </div>
          <div>
            <ul>
              <ListItem>
                Réalisé par :<br></br>
                <ListItemSpan>Bobby Rubio</ListItemSpan>
              </ListItem>
              <ListItem>
                Avec :<br></br>
                <ListItemSpan>
                  Eli Fucile<br></br>
                  Bobby Rubio<br></br>
                  Luna Watson<br></br>
                  Mika Kubo<br></br>
                </ListItemSpan>
              </ListItem>
            </ul>
          </div>
        </Informations>
      </Content>
    </Card>
  );
}

export default EnvolCard;
