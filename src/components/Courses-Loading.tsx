const CoursesLoading = () => {
  return (
    <div className="relative min-h-screen max-w-7xl w-full mx-auto md:flex sm:inline-block gap-10 py-32 px-10 ">
        <div className="flex flex-col gap-5 w-full md:w-2/3">
          <div className=" h-[350px] w-full rounded-2xl bg-neutral-300 dark:bg-neutral-600 animate-pulse" />
          <div className="bg-neutral-300 dark:bg-neutral-600 w-96 h-8 animate-pulse rounded-2xl my-2"></div>
          <div className="w-full flex justify-start items-center gap-4 flex-wrap">
            <div className="bg-neutral-300 dark:bg-neutral-600 w-96 h-8 animate-pulse rounded-2xl my-2"></div>
            <div className=" bg-neutral-300 dark:bg-neutral-600 w-52 h-8 animate-pulse rounded-2xl"></div>
          </div>
          <hr className="bg-neutral-900 dark:bg-neutral-300" />
          <div>
            <div className=" bg-neutral-300 dark:bg-neutral-600 w-52 h-8 animate-pulse rounded-2xl"></div>
            <div className="bg-neutral-300 dark:bg-neutral-600 w-96 h-8 animate-pulse rounded-2xl my-2"></div>
          </div>
          <hr className="bg-neutral-900 dark:bg-neutral-300" />
          <div>
            <div className="bg-neutral-300 dark:bg-neutral-600 w-96 h-8 animate-pulse rounded-2xl my-2"></div>
            <div className=" bg-neutral-300 dark:bg-neutral-600 w-52 h-8 animate-pulse rounded-2xl"></div>
          </div>
        </div>
        {/* Sidebar */}
        <div className="h-fit w-full max-w-sm flex flex-col gap-3 rounded-lg bg-neutral-300 dark:bg-neutral-800 p-5">
          <div className="w-full h-[250px] rounded-2xl animate-pulse bg-neutral-300 dark:bg-neutral-600 " />
          <div className="bg-neutral-300 dark:bg-neutral-600 w-11/12 h-8 animate-pulse rounded-2xl my-2"></div>
          <div className=" bg-neutral-300 dark:bg-neutral-600 w-52 h-8 animate-pulse rounded-2xl"></div>

          <div className="flex justify-between gap-5 items-center">
            <div className="bg-neutral-300 dark:bg-neutral-600 w-3/5 h-10 rounded-2xl animate-pulse"/>
            <div className="bg-neutral-300 dark:bg-neutral-600 w-3/5 h-10 rounded-2xl animate-pulse"/>
          </div>

          <div className="bg-neutral-300 dark:bg-neutral-600 w-full h-10 rounded-2xl animate-pulse "/>
        </div>
      </div>
  )
}

export default CoursesLoading
