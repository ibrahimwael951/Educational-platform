import { IoSchoolOutline } from "react-icons/io5";

export default function Page() {
  return (
    //ur job title
    //bio
    //social Links
    <section className="min-h-screen pt-24 px-5">
      <div className="w-fit mx-auto text-center">
        <h1 className="m-auto w-fit text-neutral-800 dark:text-white flex items-center gap-2">
          <IoSchoolOutline className="text-purple-600" size={60} />
          Become Instructor
        </h1>
        <p className="text-neutral-800  dark:text-white opacity-55">
          Start Teaching. Start Making a Difference.
        </p>
      </div>
      
      {/* form */}
      <form action="">
        <label >What are u gonna teaching</label>
      </form>
    </section>
  );
}
