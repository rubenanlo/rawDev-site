import CardImage from "components/cards/CardImage";

const CardNoFlip = ({ image }) => {
  return (
    <div className="group [perspective:1000px] rounded-xl">
      <div className="relative h-full flex flex-col rounded-xl">
        <div className="bg-no-repeat bg-cover bg-center relative">
          <CardImage image={image} bounce="integrity" />
        </div>
      </div>
    </div>
  );
};
export default CardNoFlip;
