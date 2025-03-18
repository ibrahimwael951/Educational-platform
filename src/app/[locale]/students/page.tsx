import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

const students = [
  { id: 1, name: "Mark John", achievementKey: "achievement_10_courses", image: "/students/student1.png" },
  { id: 2, name: "Samantha", achievementKey: "achievement_5_certificates", image: "/students/student2.png" },
  { id: 3, name: "Tom", achievementKey: "achievement_best_performance", image: "/students/student3.png" },
];

const testimonials = [
  { id: 1, name: "Esther Howard", feedbackKey: "testimonial_1" },
  { id: 2, name: "Donald Gonzales", feedbackKey: "testimonial_2" },
];

const galleryImages = [
  { id: 1, src: "/students/gallery1.jpg", nameKey: "project_1" },
  { id: 2, src: "/students/gallery2.jpg", nameKey: "project_2" },
  { id: 3, src: "/students/gallery3.jpg", nameKey: "project_3" },
  { id: 4, src: "/students/gallery4.jpeg", nameKey: "project_4" },
];

export default function BestStudents() {
  const t = useTranslations("studentsSection");

  return (
    <div className="mt-30 min-h-screen p-6">
      {/* Hero Section */}
      <div className="text-center py-16 bg-purple-600 text-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold">{t("hero_title")}</h1>
        <p className="mt-4 text-lg capitalize">{t("hero_description")}</p>
        <Link href="/register">
          <button className="mt-6 px-6 py-3 bg-purple-300 text-black hover:bg-white hover:text-purple-300 cursor-pointer font-semibold rounded-lg shadow-lg">
            {t("join_now")}
          </button>
        </Link>
      </div>

      {/* Students */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {students.map((student) => (
          <div key={student.id} className="bg-white p-6 shadow-lg text-center">
            <Image 
              src={student.image} 
              width={400} 
              height={400} 
              alt={student.name} 
              className="w-50 h-50 mx-auto cursor-pointer transition-transform duration-300 hover:scale-110" 
            />
            <h3 className="text-xl text-gray-900 font-semibold text-center justify-center mt-10">{student.name}</h3>
            <p className="text-gray-600 font-bold">✨ {t(student.achievementKey)}</p>
          </div>
        ))}
      </div>

      {/* Testimonials Section */}
      <div className="mt-10 p-6">
        <h2 className="text-center text-neutral-800 dark:text-white p-8">{t("students_testimonials")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-6 bg-gray-100 dark:bg-neutral-800 rounded-lg shadow-lg">
              <p className="text-gray-600 dark:text-white">{t(testimonial.feedbackKey)}</p>
              <h4 className="text-blue-600 font-semibold mt-2">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mt-10">
        <h2 className="text-center text-neutral-800 dark:text-white p-8">{t("highlighted_projects")}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center">
          {galleryImages.map((image) => (
            <Image 
              key={image.id} 
              src={image.src} 
              alt={t(image.nameKey)} 
              width={400} 
              height={400} 
              className="rounded-lg shadow-lg w-60 h-60 cursor-pointer transition-transform duration-300 hover:scale-110" 
            />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-10">
        <Link href="/register">
          <button className="mt-6 px-6 py-3 bg-purple-300 text-black hover:bg-white hover:text-purple-300 cursor-pointer font-semibold rounded-lg shadow-lg">
            {t("join_list")}
          </button>
        </Link>
      </div>
    </div>
  );
}
