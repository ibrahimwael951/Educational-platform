import Image from "next/image";

const skills = [
  { img: "/home/s1.png", number: "3K+", text: "Successfully Trained" },
  { img: "/home/s2.png", number: "15K+", text: "Classes Completed" },
  { img: "/home/s3.png", number: "97K+", text: "Satisfaction Rate" },
  { img: "/home/s4.png", number: "102K+", text: "Students Community" },
];

const SkillsSection = () => {
  return (
    <section
      className="container flex mx-auto bg-cover bg-center rounded-[200px] md:rounded-[50px] justify-center items-center text-center"
      style={{ backgroundImage: "url('/home/skill background.png')" }}
    >
      <div className="flex gap-20 justify-between items-center text-center ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center text-left w-52 bg-white px-5 py-3 rounded-xl shadow-lg"
          >
            <Image
              src={skill.img}
              alt="icon"
              width={50}
              height={50}
              className="w-12 h-12"
            />
            <div className="md:ml-3 text-center md:text-left mt-2 md:mt-0">
              <h6 className="text-[#0E2A46] font-bold text-3xl text-left">
                {skill.number}
              </h6>
              <p className="text-[#0E2A46] text-sm">{skill.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
