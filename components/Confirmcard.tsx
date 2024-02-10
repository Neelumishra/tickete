import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import Payments from "./Payment";
import { IoAlertCircle } from "react-icons/io5";
export default function Confirmcard() {
  return (
    <div className="w-full ">
      <div className="bg-white px-8 ">
        <h1 className="text-4xl font-bold mb-4  py-3 md:flex items-start pt-0 hidden ">
          Confirm & pay
        </h1>
        <div className="rounded-md bg-gray-100 p-3 border mt-6">
          <div className="flex items-center justify-between ">
            <div>
              <h4 className="text-lg font-semibold">Free cancellation</h4>
              <p className="text-sm">
                Tickets can be cancelled by 13th December, 2022.
              </p>
            </div>
            <InfoIcon className="h-6 w-6 text-gray-400" />
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold">Enter your details</h2>
          <p className="mt-2 text-sm text-gray-600">
            We'll be sending your tickets to the details below. Booking for a
            friend? Add their details.
          </p>
          <div className="mt-6 grid gap-6">
            <Input placeholder="Full name *" type="text" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select>
                <SelectTrigger id="country-code">
                  <SelectValue placeholder="Country code *" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="+1">+1</SelectItem>
                  <SelectItem value="+44">+44</SelectItem>
                  <SelectItem value="+61">+61</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder="Phone number *" type="tel" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input placeholder="Email *" type="email" />
              <Input placeholder="Confirm email *" type="email" />
            </div>
          </div>
        </div>
        <hr className="mt-3" />
      </div>

      <div className=" p-8">
        <h2 className="text-lg font-semibold">Additional information</h2>
        <p className="text-sm text-gray-600">
          We need a few more details to complete your reservation.
        </p>
        <form className="mt-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="flex flex-col">
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="input-label"
              >
                Input label *
              </label>
              <Input id="input-label" placeholder="" />
            </div>
            <div className="flex flex-col">
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="select"
              >
                Select *
              </label>
              <Select>
                <SelectTrigger id="select">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-col">
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="multiselect"
            >
              Multiselect *
            </label>
            <Select>
              <SelectTrigger id="multiselect">
                <SelectValue placeholder="Multiselect" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </form>
      </div>
      <hr className="mt-3" />
      <Payments />
      <div className=" mx-auto  p-6 border ">
        <h2 className="text-xl font-semibold mb-4">Total Payable: $XXX</h2>
        <div className="flex items-start space-x-4 border p-5 rounded-3xl md:w-[56.25rem]">
          <IoAlertCircle className="text-black-500 w-5 h-5 mt-1" />

          <div>
            <p className="text-sm font-medium">You will be charged in AED</p>
            <p className="text-sm text-gray-600  md:w-[45.62rem] py-1">
              The price shown here is in US Dollar (USD) as per the current
              conversion rate. You will be charged in United Arab Emirates
              Dirham (AED).
            </p>
          </div>
        </div>
      </div>
    </div>
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
function CircleIcon(props:any) {
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



