"use client"
import React, { useState } from "react";

export default function Questionsecond() {
  const [flags, setFlags] = useState([false]);

  const toggleFlag = (index:any) => {
    const newFlags = [...flags];
    newFlags[index] = !newFlags[index];
    setFlags(newFlags);
  };

  return (
    <div className="w-full mx-auto mt-5 p-5">
      <div className="space-y-2 ">
        <div className="border rounded-md">
          <button
            className="flex w-full items-center justify-between rounded-md bg-gray-200 px-4 p-5 text-left border"
            onClick={() => toggleFlag(0)}
          >
            <span className="font-medium border">
              What should I do on my first trip to Rome?
            </span>
            {flags[0] ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <PlusIcon className="h-6 w-6" />
            )}
          </button>
          {flags[0] && (
            <p className="mt-2 text-sm  p-3">
              Some suggestions for your first trip to Rome include visiting the
              Colosseum, exploring the Vatican Museums and St. Peter's Basilica,
              tossing a coin into the Trevi Fountain, and indulging in authentic
              Italian cuisine at local trattorias.
            </p>
          )}
        </div>
        <div className="border rounded-md">
          <button
            className="flex w-full items-center justify-between rounded-md bg-gray-200 px-4 text-left p-5"
            onClick={() => toggleFlag(1)}
          >
            <span className="font-medium">
              What are some hidden gems to see in Rome?
            </span>
            {flags[1] ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <PlusIcon className="h-6 w-6" />
            )}
          </button>
          {flags[1] && (
            <p className="mt-2 text-sm p-3">
              Some hidden gems in Rome include the Appian Way, Catacombs of San
              Callisto, Aventine Keyhole, Villa Borghese Gardens, and the Mouth
              of Truth.
            </p>
          )}
        </div>
        <div className="border rounded-md">
          <button
            className="flex w-full items-center justify-between rounded-md bg-gray-200 px-4 text-left p-5"
            onClick={() => toggleFlag(2)}
          >
            <span className="font-medium">
              How much time should I spend in Rome?
            </span>
            {flags[2] ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <PlusIcon className="h-6 w-6" />
            )}
          </button>
          {flags[2] && (
            <p className="mt-2 text-sm p-3">
              The ideal duration for a trip to Rome depends on your interests
              and preferences, but spending at least 3-4 days allows you to
              explore the main attractions and experience the city's culture and
              history.
            </p>
          )}
        </div>
        <div className="border rounded-md">
          <button
            className="flex w-full items-center justify-between rounded-md bg-gray-200 px-4 p-5 text-left"
            onClick={() => toggleFlag(3)}
          >
            <span className="font-medium">What food is Rome known for?</span>
            {flags[3] ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <PlusIcon className="h-6 w-6" />
            )}
          </button>
          {flags[3] && (
            <p className="mt-2 text-sm p-3">
              Rome is known for its delicious cuisine, including pasta dishes
              like carbonara, cacio e pepe, and amatriciana, as well as classic
              Roman pizzas, supplì (fried rice balls), and traditional desserts
              like tiramisu and gelato.
            </p>
          )}
        </div>
        <div className="border rounded-md">
          {" "}
          <button
            className="flex w-full items-center justify-between rounded-md bg-gray-200 px-4 p-5 text-left"
            onClick={() => toggleFlag(4)}
          >
            <span className="font-medium">
              What food is Rometime should I spend known ?
            </span>
            {flags[4] ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <PlusIcon className="h-6 w-6" />
            )}
          </button>
          {flags[4] && (
            <p className="mt-2 text-sm p-3">
              Rome is known for its delicious cuisine, including pasta dishes
              like carbonara, cacio e pepe, and amatriciana, as well as classic
              Roman pizzas, supplì (fried rice balls), and traditional desserts
              like tiramisu and gelato.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function PlusIcon(props:any) {
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

function XIcon(props:any) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
