"use client"
import { IoMdTrophy } from "react-icons/io";
import { useState } from "react";
import { Button } from "./ui/button";
import { MdPriceChange } from "react-icons/md";
export default function () {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://media.istockphoto.com/id/840781672/photo/beautiful-nature-norway-aerial-photography.jpg?s=1024x1024&w=is&k=20&c=MWy8JI5jGfEdNjHX9Dq-HTQnQ4mC0UyjeoqD7du1BQY=",
    "https://media.istockphoto.com/id/1337232523/photo/high-angle-view-of-a-lake-and-forest.jpg?s=1024x1024&w=is&k=20&c=EPh5_6vL4mywUc3AfLRKJCChgAs41oI9nMveOInep_0=",
    "https://media.istockphoto.com/id/601360182/photo/small-dock-and-boat-at-the-lake.jpg?s=1024x1024&w=is&k=20&c=_Dhlo2GNwXIcHSUjTCROIRcmaZtRHNhrnZwFnKKQcDQ=",
    "https://media.istockphoto.com/id/607280514/photo/lupins-of-lake-tekapo.jpg?s=1024x1024&w=is&k=20&c=A3ltpdSegsVxqQgcce9WwZRZkkoP3b4eBn-KLv6Di-E=",
  ];

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-white  shadow-md overflow-hidden w-full border p-3 rounded">
      <div className="relative">
        <img
          alt="Amsterdam open boat canal cruise"
          className="w-full h-48 object-cover"
          height="200"
          src={images[currentImageIndex]}
          style={{
            aspectRatio: "257/200",
            objectFit: "cover",
          }}
          width="257"
        />
        <div className="absolute top-7 left-2 bg-white rounded-full p-1 ">
          <div className="absolute bottom-2 left-2 bg-white text-xs font-bold px-2 py-1 rounded flex items-center gap-2">
            <IoMdTrophy /> Bestseller
          </div>
        </div>
        <div className="absolute top-24 flex space-x-2  w-full justify-between">
          <button
            className="bg-white rounded-full p-1 "
            onClick={handlePrevImage}
          >
            <ChevronLeftIcon className="text-black" />
          </button>
          <button
            className="bg-white rounded-full p-1 "
            onClick={handleNextImage}
          >
            <ChevronRightIcon className="text-black" />
          </button>
        </div>
      </div>
      <div className="p-3">
        <div className="flex items-center space-x-1 text-sm">
          <StarIcon className="text-yellow-400" />
          <span className="font-bold">4.9</span>
          <span className="text-gray-500">(5.5k)</span>
          <span className="text-gray-500">·</span>
          <span className="text-gray-500">&lt;category&gt;</span>
        </div>
        <h3 className="font-bold my-2">
          Amsterdam open boat canal cruise - Live Guide - from Anne Frank Housef
        </h3>
        <div className="flex items-center space-x-2 text-sm text-black mb-2">
          <TicketIcon className="text-black" />
          <span>&lt; ticket type - variant &gt;</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-black ">
          <CalendarIcon className="text-black" />
          <span>&lt;day&gt;,&lt;month&gt; &lt;date&gt;</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500 ml-9 mb-2">
          <span>Duration: &lt;duration&gt;</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-black">
          <ClockIcon className="text-black" />
          <span> &lt;time&gt;</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500 ml-9 mb-2 ">
          <span>Operating hours: &lt;time&gt;to &lt;time&gt;</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-black-600 mb-2">
          <UsersIcon className="text-black" />
          <span>5 guests</span>
        </div>
        <div className="flex justify-between items-center  border p-4 mt-1 rounded">
          <span className="text-sm font-bold">View payment summary</span>
          <PlusIcon className="text-gray-600" />
        </div>
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">Total payable</span>
            <span className="text-xl font-bold">$XXX</span>
          </div>
          <div className="flex items-center space-x-1 text-xs bg-green-100 mt-1 border w-36 rounded-full justify-center">
            <MdPriceChange className="text-green-600 size-3" />
            <span>You saved $price</span>
          </div>
          <div className="text-xs text-gray-500 mt-5">
            You will be charged in AED
          </div>
        </div>
        <div className="hidden md:block">
          <div className="text-xs text-gray-500 mt-7">
            By clicking 'confirm & pay', you agree to
            <a className="text-blue-600" href="#">
              Tickets.general terms and conditions and cancellation policy.
            </a>{" "}
            and{" "}
            <a className="text-blue-600" href="#">
              cancellation policy.
            </a>{" "}
          </div>
          <Button className="w-[350px] bg-black text-white mt-5 rounded">
            Confirm & pay
          </Button>
        </div>
      </div>
    </div>
  );
}

function BookmarkIcon(props: any) {
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
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  );
}

function CalendarIcon(props: any) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function CheckCircleIcon(props: any) {
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
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function ChevronLeftIcon(props: any) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props: any) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function CircleIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

function ClockIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function PlusIcon(props: any) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function StarIcon(props: any) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function TicketIcon(props: any) {
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
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </svg>
  );
}

function UsersIcon(props: any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
