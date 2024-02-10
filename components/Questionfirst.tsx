import { Button } from "@/components/ui/button";

export default function Questionfirst() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full ">
      <h2 className="text-2xl font-semibold mb-2">
        Frequently asked questions
      </h2>
      <p className="text-gray-600 mb-6">
        Here are some of our most asked questions.
      </p>
      <div className="bg-[#f3f4f6] p-14 rounded-lg flex items-center ">
        <div className="flex items-center space-x-3  w-80 h-40 justify-between">
          <div>
            <h3 className="font-semibold">Still need help?</h3>
            <h3 className="font-semibold mb-5">
              We're here for you.
            </h3>
            <Button className="bg-black text-white py-2 px-4 rounded-md hover:bg-[#4f46e5]">
              Chat with us
            </Button>
          </div>
          <div>
            <img src="/About.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

function HeadphonesIcon(props:any) {
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
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  );
}
