"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaPhoneAlt, FaEnvelope  } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


const instructors = [
{
    id: 1,
    name: "John Doe",
    position: "Senior Instructor",
    image: "/home/instructor1.png",
    phone: "(568) 367-987-237",
    location: "Hudson, Wisconsin(WI), 54016",
    email: "johndoe@gmail.com",
    expertise: ["Lectures", "My Skill", "Consulting"],
},
{
    id: 2,
    name: "Jane Smith",
    position: "Lead Trainer",
    image: "/home/instructor2.png",
    phone: "(412) 555-1234",
    location: "New York, NY, 10001",
    email: "janesmith@gmail.com",
    expertise: ["Public Speaking", "Leadership", "Coaching"],
},
{
    id: 3,
    name: "Michael Johnson",
    position: "Expert Coach",
    image: "/home/instructor2.png",
    phone: "(412) 555-1234",
    location: "New York, NY, 10001",
    email: "janesmith@gmail.com",
    expertise: ["Public Speaking", "Leadership", "Coaching"],
},
{
    id: 4,
    name: "Emily Davis",
    position: "Head of Training",
    image: "/home/instructor2.png",
    phone: "(412) 555-1234",
    location: "New York, NY, 10001",
    email: "janesmith@gmail.com",
    expertise: ["Public Speaking", "Leadership", "Coaching"],
},
];

const InstructorDetails = () => {
  const params = useParams();
  const { id } = params;


  const instructor = instructors.find((inst) =>
    inst.name.toLowerCase().replace(/\s+/g, "-") === id
  );

if (!instructor) {
    return <div className="text-center text-red-500">Instructor not found!</div>;
}

  return (
    <div className="max-w-5xl mx-auto my-10 p-6 mt-30 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row">
        {/*Contact Data*/}
        <div className="md:w-1/3 text-center p-5 bg-gray-100 rounded-lg">
          <Image
            src={instructor.image}
            alt={instructor.name}
            width={200}
            height={200}
            className="rounded-full mx-auto"
          />
          <h2 className="text-lg font-bold mt-4">{instructor.name}</h2>
          <p className="text-sm text-purple-600">{instructor.position}</p>

          <div className="flex justify-center space-x-4 my-3">
            <FaFacebook className="text-blue-600 cursor-pointer" />
            <FaTwitter className="text-blue-400 cursor-pointer" />
            <FaLinkedin className="text-blue-700 cursor-pointer" />
            <FaWhatsapp className="text-blue-700 cursor-pointer"/>
          </div>

         <div className="flex text-center gap-4"> <FaPhoneAlt className="text-purple-600"/> 
         <p className="text-sm text-gray-600">{instructor.phone}</p>
         </div>
          
         <div className="flex text-center gap-4"> <FaLocationDot  className="text-purple-600"/> 
         <p className="text-sm text-gray-600">{instructor.location}</p>
         </div>

         <div className="flex text-center gap-4"> <FaEnvelope   className="text-purple-600"/> 
         <p className="text-sm text-gray-600">{instructor.email}</p>
         </div>
        </div>

        <div className="md:w-2/3 p-5">
          <h1 className="text-2xl font-bold">{instructor.name}</h1>
          <p className="text-sm text-purple-600">TEACHER</p>
          <p className="mt-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere erat eget massa pharetra, eget fermentum ligula gravida.
          </p>

          <h3 className="mt-6 text-lg font-bold">Education:</h3>
          <p className="text-gray-700">
            I have spent years mastering my teaching techniques and I am thrilled to share my expertise with you.
          </p>

          <h3 className="mt-6 text-lg font-bold">EXPERTISE & SKILLS:</h3>
          {instructor.expertise.map((skill, index) => (
            <p key={index} className="border-b py-2 text-gray-800">{skill}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructorDetails;
