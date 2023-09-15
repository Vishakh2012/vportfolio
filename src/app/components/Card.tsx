import { BiLogoGithub } from "react-icons/bi";
import Image from "next/image";
interface cardProps {
  desc: string;
  heading: string;
  image: string;
  alt: string;
  link: string;

}
const Card: React.FunctionComponent<cardProps> = (props) => {
  return (
    <div className="card sm:w-96 w-[300px] bg-base-100 shadow-xl rounded-md items-center flex justify-center mt-4"  >
      <figure>
        <Image
          src={props.image}
          alt={props.alt}
          width={350}
          height={150}
    ></Image>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.heading}</h2>
        <p>{props.desc}</p>
        <div className="card-actions justify-end">
        <a href={props.link}>
          <button className="btn btn-primary w-[101px] h-[48px] rounded-full">
              <BiLogoGithub size={24} />
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
