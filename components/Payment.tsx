import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaGooglePay } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import { LiaCcVisa } from "react-icons/lia";
import { RiMastercardLine } from "react-icons/ri";
import { CiCreditCard2 } from "react-icons/ci";
import { IoCard } from "react-icons/io5";
export default function Payments() {
  return (
    <div className=" mx-auto p-8 bg-white rounded-lg shadow-md space-y-4">
      <h2 className="text-xl font-semibold">Select your mode of payment</h2>
      <p className="text-sm text-gray-500 ">
        Payments with Tickete are secure and encrypted.
      </p>
      <div className="border border-black p-3 rounded-lg">
        <div className="mt-2 flex items-center justify-between space-x-2   md:w-[56.25rem] rounded-3xl bg-white">
          <div className=" w-44 flex gap-2 items-center ">
            <CiCreditCard2 className="text-black size-5 border  " />
            <p className="text-xs font-bold text-black">Credit & debit card</p>
          </div>
          <FaRegCircle />
        </div>
        <div className="mt-4">
          <div className="flex items-center space-x-2 ">
            <LiaCcVisa className="border size-6" />
            <RiMastercardLine className="text-blue-600 border size-6" />
            <IoCard className="text-yellow-500 border size-6" />
          </div>
          <div className="  mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Name on card *" />
            <Input placeholder="Card number *" />
            <Input placeholder="Expiry date *" />
            <Input placeholder="CVV/CVC *" />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm font-medium">Total payable: $XXX</p>
          <p className="text-xs text-gray-500">You will be charged in AED</p>
        </div>
        <div className="mt-4">
          <label className="text-xs text-gray-500" htmlFor="terms">
            By clicking 'Confirm & pay', you agree to Tickete's {"\n          "}
            <a className="text-blue-600" href="#">
              general terms and conditions
            </a>{" "}
            and{" "}
            <a className="text-blue-600" href="#">
              cancellation policy
            </a>
            .{"\n          "}
          </label>
        </div>
        <div className="mt-4">
          <Button className="w-full md:w-32">Confirm & pay</Button>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between space-x-2 border p-5 md:w-[56.25rem] rounded-3xl bg-gray-100">
        <div className=" w-44 flex gap-2 items-center">
          <FaApplePay className="text-gray-400 size-6 border bg-gray-200 rounded" />
          <p className="text-xs text-gray-500">Coming soon</p>
        </div>
        <FaRegCircle />
      </div>
      <div className="mt-2 flex items-center justify-between space-x-2 border p-5  md:w-[56.25rem] rounded-3xl bg-gray-100">
        <div className=" w-44 flex gap-2 items-center">
          <FaGooglePay className="text-gray-400 size-6 border bg-gray-200 rounded" />
          <p className="text-xs text-gray-500">Coming soon</p>
        </div>
        <FaRegCircle />
      </div>
    </div>
  );
}

function CreditCardIcon(props:any) {
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
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function InfoIcon(props:any) {
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
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function ViewIcon(props:any) {
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
      <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
      <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
      <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
    </svg>
  );
}
