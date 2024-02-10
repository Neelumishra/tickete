export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="md:p-16 flex items-center py-16 px-3 ">
        <h2 className="text-4xl font-bold tracking-tight">tickete</h2>
      </div>
      <hr />
      <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-col-reverse md:flex-row  ">
          <div className=" w-32  ">
            <a className=" flex  items-center mt-1">
              <p className="text-sm text-gray-400">Made with</p>
              <HeartIcon className="mx-1 text-red-500" />
            </a>
          </div>
          <div className="flex flex-wrap mb-3 items-center ">
            <span className="text-2xl text-gray-500 hidden md:block">·</span>
            <a
              className="text-sm hover:underline md:px-3 p-1 text-gray-300 "
              href="#"
            >
              Privacy policy
            </a>
            <span className="text-2xl text-gray-500">·</span>
            <a
              className="text-sm hover:underline md:px-3 p-1 text-gray-300"
              href="#"
            >
              Terms of usage
            </a>
            <span className="text-2xl text-gray-500">·</span>
            <a
              className="text-sm hover:underline md:px-3 p-1 text-gray-300"
              href="#"
            >
              Cancellation policy
            </a>
            <span className="text-2xl text-gray-500">·</span>
            <a
              className="text-sm hover:underline md:px-3 p-1 text-gray-300"
              href="#"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function HeartIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
