
import Card from "./Card";
const Projects:React.FunctionComponent = () => {
 
  const card_info = [
    {
      id: "1",
      heading: "Sheeran Song Generator",
      desc: "a song generator that is made using lstm in tensorflow, backend with flask",
      alt: "song gen",
      image: "/songgen.webp",
      link: "https://github.com/Vishakh2012/song_lyric_generator"
    },
    {
      id: "2",
      heading: "fine-tuned hugging face model",
      desc: "finetuning of a hugging face model for sarcasm detection",
      alt: "hugging face",
      image: "/sar.webp",
      link: "https://github.com/Vishakh2012/finetuning/"
    },
    {
      id: "3",
      heading: "guess the dog",
      desc: "for all the dog lovers, guess the breed of the dog, made with imagenet api",
      alt: "song gen",
      image: "/dog.webp",
      link: "https://github.com/Vishakh2012/whosthedog"
    },
  ];
  return (
    <div className="flex items-center flex-col min-h-screen bg-base-200 justify-center  w-screen" id = "project">
      <h1 className="flex justify-center font-semibold text-6xl mb-8">
        PROJECTS
      </h1>
      <div className="flex flex-col justify-center items-center w-screen">
        <div className="flex justify-center w-5/6 item-center">
          <div className="flex justify-between carousel carousel-center rounded-md">
            {card_info.map((item) => (
              <div
                className="carousel-item mx-3"
                id={"item" + item.id}
                key={item.id}
              >
                <Card
                  desc={item.desc}
                  heading={item.heading}
                  image={item.image}
                  alt={item.alt}
                  link = {item.link}
                />
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
