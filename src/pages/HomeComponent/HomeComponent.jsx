import { Link } from 'react-router-dom';
import {
  HomeContainer,
  HomeWrapper,
  StartPageLine,
  Title,
  Text,
  Button,
} from './HomeComponent.styled';

const HomeComponent = () => {
  return (
    <HomeContainer>
      <HomeWrapper>
        <StartPageLine></StartPageLine>
        <Title>
          Узнайте больше о современных технологиях в веб-разработке!
        </Title>
        <Text>Исследуйте мир HTML, CSS, JavaScript и React</Text>
        <Text>
          Готовы расширить свои знания в веб-разработке? Примите участие в нашем
          опросе, где вы сможете узнать много нового о современных технологиях
          веб-разработки. Мы предоставим вам возможность изучить HTML, CSS,
          JavaScript и React. Не упустите шанс углубить свои знания и навыки!
        </Text>
        <Link to="/survey">
          <Button>Начать Опрос</Button>
        </Link>
      </HomeWrapper>
    </HomeContainer>
  );
};

export default HomeComponent;
