import { FC } from "react";
import "./card.scss";

interface ICardProps {
  image: string;
  title: string;
  description: string;
  onClick?: () => void;
}

const Card: FC<ICardProps> = ({ image, title, description, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img className="card__image" src={image} alt="" />
      <div className="card__title">{title}</div>
      <p className="card__text">{description}</p>
    </div>
  );
};

export default Card;
