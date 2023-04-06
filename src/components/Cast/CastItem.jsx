import { Item, Title, Paragraph } from './Cast.styled';
import img from '../../img/default_image.jpeg';

const CastItem = ({ character, name, imgURL }) => {
  return (
    <Item>
      <div>
        <img
          src={imgURL ? `https://image.tmdb.org/t/p/w200${imgURL}` : img}
          alt={name}
          width="200"
        />
      </div>
      <div>
        <Title>{name}</Title>
        <Paragraph>
          <b>Character:</b> <br />
          {character}
        </Paragraph>
      </div>
    </Item>
  );
};

export default CastItem;
