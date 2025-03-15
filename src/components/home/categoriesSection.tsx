import Image from "next/image";

const categories = [
  { id: 1, name: "Business Management", img: "/home/cat1.png", bgColor: "rgba(27, 117, 232, 0.1)", borderColor: "#1B75E8" },
  { id: 2, name: "Arts & Design", img: "/home/cat2.png", bgColor: "rgba(255, 104, 129, 0.15)", borderColor: "#FF6881" },
  { id: 3, name: "Personal Development", img: "/home/cat3.png", bgColor: "#D1F5E4", borderColor: "#00BC65" },
  { id: 4, name: "UI/UX Design", img: "/home/cat4.png", bgColor: "#FFF3D9", borderColor: "#F2A700" },
  { id: 5, name: "Graphic Design", img: "/home/cat5.png", bgColor: "#F7F3FF", borderColor: "#4500D0" },
  { id: 6, name: "Digital Marketing", img: "/home/cat6.png", bgColor: "#FFDAF0", borderColor: "#BB0064" },
  { id: 7, name: "Exclusive man", img: "/home/cat7.png", bgColor: "#F3F4FE", borderColor: "#0011BB" },
  { id: 8, name: "Product Design", img: "/home/cat8.png", bgColor: "#FFECD9", borderColor: "#D16900" },
  { id: 9, name: "Video & Photography", img: "/home/cat9.png", bgColor: "#DCF5FF", borderColor: "#00A9ED" },
];

const CategoriesSection: React.FC = () => {
  return (
    <section className="container mx-auto text-center py-10 max-w-screen-xl">
      <h1>Browse By Categories</h1>

    
  <div className="grid max-[600px]:grid-cols-1 max-[760]:grid-cols-2 max-[4000px]:grid-cols-3 gap-4 text-left">
  {categories.map((category) => (
    <div
      key={category.id}
      className="categories flex items-center rounded-xl shadow-sm"
      style={{ backgroundColor: category.bgColor }}>
      <div
        className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-dashed bg-white"
        style={{ borderColor: category.borderColor }}>
        <Image src={category.img} alt={category.name} width={50} height={50} className="rounded-full" />
      </div>
      <h2 className="ml-4 text-xl font-bold text-[#0E2A46]">{category.name}</h2>
    </div>
  ))}
</div>
    </section>
  );
};

export default CategoriesSection;
