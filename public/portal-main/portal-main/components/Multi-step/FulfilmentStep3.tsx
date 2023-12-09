import Link from "next/link";
import { useForm } from "react-hook-form";
import Button from "../Button";
import Container from "../Container";
import { BigInputField, SelectField } from "../InputField";

type AppProps = {
  page: number;
  handleStep: () => void;
  goBack: () => void;
};
export default function FulfilmentStep3({
  page,
  goBack,
  handleStep,
}: AppProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <Container
      backBtn={
        <>
          <Link href="/credit/fulfilment">
            <span className="font-bold cursor-pointer">Go back </span>
          </Link>
          / <span className="text-lightAsh">Add Fulfilmet</span>
        </>
      }
    >
      {page === 2 && (
        <>
          <div className="w-full bg-white rounded-lg p-14">
            <h1 className="text-2xl text-almostBlack font-medium">
              Review fulfilment
            </h1>
            <div className="flex justify-between items-center text-backText text-sm mt-2">
              <p>Register a new fulfilment for a customer</p>
              <p className="text-blackRussian font-semibold">
                {page + 1} <span className="text-backText">of 3</span>
              </p>
            </div>
            <div className="flex w-full mt-12 justify-center">
              <h2 className="text-lg text-blackRussian font-medium mr-6 w-2/5 relative bottom-4">
                Personal Information
              </h2>
              <div className="border-t-2 border-tableHeadbg w-3/4">
                <div className="flex space-x-7 mt-9 justify-end">
                  <BigInputField
                    className="w-[270px]"
                    label="FIRST NAME"
                    disabled
                    value="John"
                    inputClass="rounded-lg outline-none flex-1 px-2 py-3 bg-[#fafafa]"
                    register={register}
                    name="firstname"
                    labelClass="text-lightAsh text-sm"
                  />
                  <BigInputField
                    className="w-[270px]"
                    label="LAST NAME"
                    value="Doe"
                    disabled
                    inputClass="rounded-lg outline-none flex-1 px-2 py-3 bg-[#fafafa]"
                    register={register}
                    name="lastname"
                    labelClass="text-lightAsh text-sm"
                  />
                </div>
                <div className="flex space-x-7 mt-9 justify-end">
                  <BigInputField
                    className="w-[270px]"
                    label="GENDER"
                    value="Male"
                    disabled
                    inputClass="rounded-lg outline-none flex-1 px-2 py-3 bg-[#fafafa]"
                    register={register}
                    name="gender"
                    labelClass="text-lightAsh text-sm"
                  />
                  <BigInputField
                    className="w-[270px]"
                    label="DATE OF BIRTH"
                    type="text"
                    value="01/01/2000"
                    disabled
                    placeholder="Enter last name"
                    inputClass="rounded-lg outline-none flex-1 px-2 py-3 bg-[#fafafa]"
                    register={register}
                    name="dob"
                    labelClass="text-lightAsh text-sm"
                  />
                </div>
                <div className="flex space-x-7 mt-9 justify-end">
                  <BigInputField
                    className="w-[270px]"
                    label="PHONE NUMBER"
                    type="tel"
                    disabled
                    value="+234 810 0000 000"
                    inputClass="rounded-lg outline-none flex-1 px-2 py-3 bg-[#fafafa]"
                    register={register}
                    name="phone_number"
                    labelClass="text-lightAsh text-sm"
                  />
                  <BigInputField
                    className="w-[270px]"
                    label="EMAIL ADDRESS"
                    value="username@mail.com"
                    disabled
                    inputClass="rounded-lg outline-none flex-1 px-2 py-3 bg-[#fafafa]"
                    register={register}
                    name="address"
                    labelClass="text-lightAsh text-sm"
                  />
                </div>
                <div className="mt-9 relative">
                  <BigInputField
                    className="w-[270px]"
                    label="BVN/NIN"
                    placeholder="Enter BVN"
                    value="060795060604"
                    disabled
                    inputClass="rounded-lg outline-none flex-1 px-2 py-3 pl-[76px] bg-[#fafafa]"
                    register={register}
                    name="lastname"
                    labelClass="text-lightAsh text-sm"
                  />
                  <select className="w-[64px] bg-dashborder rounded-[5px] text-sm absolute top-[42px] mx-2">
                    <option value="bvn">BVN</option>
                    <option value="nin">NIN</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex w-full mt-12 justify-center">
              <h2 className="text-lg text-blackRussian font-medium mr-6 w-1/5 relative bottom-4">
                Fulfilment type
              </h2>
              <div className="border-t-2 border-tableHeadbg w-3/4">
                <div className="flex space-x-7 mt-9 justify-end">
                  <BigInputField
                    className="w-[270px]"
                    label="VEHICLE BRAND"
                    value="Brand name"
                    disabled
                    inputClass="rounded-lg outline-none flex-1 px-2 py-3 bg-[#fafafa]"
                    register={register}
                    name="brand"
                    labelClass="text-lightAsh text-sm"
                  />
                  <BigInputField
                    className="w-[270px]"
                    type="text"
                    label="MODEL"
                    value="Model Name"
                    disabled
                    inputClass="rounded-lg outline-none flex-1 px-2 py-3 bg-[#fafafa]"
                    register={register}
                    name="model"
                    labelClass="text-lightAsh text-sm"
                  />
                </div>
                <div className="flex space-x-7 mt-9 justify-end">
                  <BigInputField
                    className="w-[270px]"
                    label="YEAR OF MANUFACTURE"
                    value="Year"
                    disabled
                    inputClass="rounded-lg outline-none flex-1 px-2 py-3 bg-[#fafafa]"
                    register={register}
                    name="manufactured_year"
                    labelClass="text-lightAsh text-sm"
                  />
                  <BigInputField
                    className="w-[270px]"
                    type="text"
                    label="REGISTRATION NO"
                    value="Registration no"
                    disabled
                    inputClass="rounded-lg outline-none flex-1 px-2 py-3 bg-[#fafafa]"
                    register={register}
                    name="reg_no"
                    labelClass="text-lightAsh text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full mt-12 justify-center">
              <h2 className="text-lg text-blackRussian font-medium mr-6 w-1/5 relative bottom-4">
                Loan Information
              </h2>
              <div className="border-t-2 border-tableHeadbg w-3/4">
                <div className="flex space-x-7 mt-9 justify-end">
                  <BigInputField
                    className="w-[270px]"
                    type="text"
                    label="AMOUNT"
                    disabled
                    value="NGN 1,504,700"
                    inputClass="rounded-lg outline-none flex-1 px-2 py-3 bg-[#fafafa]"
                    register={register}
                    name="loan_amt"
                    labelClass="text-lightAsh text-sm"
                  />
                  <BigInputField
                    className="w-[270px]"
                    label="TENURE"
                    value="6 Months"
                    disabled
                    inputClass="rounded-lg outline-none flex-1 px-2 py-3 bg-[#fafafa]"
                    register={register}
                    name="tenure"
                    labelClass="text-lightAsh text-sm"
                  />
                </div>
                <div className="flex space-x-7 mt-9 justify-end">
                  <BigInputField
                    className="w-[270px]"
                    type="text"
                    label="FINANCIAL INSTITUTION LENDING"
                    disabled
                    value="ImaliPay"
                    inputClass="rounded-lg outline-none flex-1 px-2 py-3 bg-[#fafafa]"
                    register={register}
                    name="initial_deposit"
                    labelClass="text-lightAsh text-sm"
                  />
                  <BigInputField
                    className="w-[270px]"
                    type="text"
                    label="MONTHLY REPAYMENT"
                    disabled
                    value="NGN 150,405.00"
                    inputClass="rounded-lg outline-none flex-1 px-2 py-3 bg-[#fafafa]"
                    register={register}
                    name="monthly_repayment"
                    labelClass="text-lightAsh text-sm"
                  />
                </div>
                <div className="flex space-x-7 mt-9 justify-end">
                  <BigInputField
                    className="w-[270px]"
                    label="REPAYMENT START DATE"
                    disabled
                    value="03/10/2022"
                    inputClass="rounded-lg outline-none flex-1 px-2 py-3 bg-[#fafafa]"
                    register={register}
                    name="rsd"
                    labelClass="text-lightAsh text-sm"
                  />
                  <BigInputField
                    className="w-[270px]"
                    label="REPAYMENT END DATE"
                    disabled
                    value="04/03/2023"
                    inputClass="rounded-lg outline-none flex-1 px-2 py-3 bg-[#fafafa]"
                    register={register}
                    name="red"
                    labelClass="text-lightAsh text-sm"
                  />
                </div>
                <div className="flex space-x-7 mt-9 justify-end">
                  <BigInputField
                    className="w-[570px]"
                    type="text"
                    label="COMMENT"
                    disabled
                    value="03 Blue House, $Streetname, $City, $State, $Country"
                    inputClass="rounded-lg outline-none flex-1 px-2 py-3 bg-[#fafafa]"
                    register={register}
                    name="comment"
                    labelClass="text-lightAsh text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="text-right mt-8">
            <Button
              child="Go Back"
              className="text-blackRussian w-[90px] bg-ipcolor2 py-2 rounded-10 mr-4 font-medium"
              onClick={goBack}
            ></Button>
            <Button
              child="Submit fulfilment"
              className="text-white bg-darkGreen w-[150px] py-2 rounded-10"
              onClick={handleStep}
            ></Button>
          </div>
        </>
      )}
    </Container>
  );
}
