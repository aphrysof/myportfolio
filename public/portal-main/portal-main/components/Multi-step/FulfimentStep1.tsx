import { Input, InputGroup, InputLeftElement, Select } from "@chakra-ui/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button, Container } from  '../index';
import { BigInputField, SelectField } from "../InputField";

   const service = [
    { value: '', text: 'Vehicle' },
  ]
    const gender = [
     {value: '', text: 'select gender'}  , 
    { value: '', text: 'Male' },
  ]

  const vehicle = [
    {value: '' , text: 'select type'},
    {value: 'mercedes', text: 'mercedes'}
  ]
  const year = [
    {value: '', text: 'choose year'},
    {value: '2013', text: '2013'}
  ]

  type AppProps = {
  page: number
  handleStep: () => void
}

export default function FulfilmentStep1 ({page, handleStep}: AppProps) {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


    return (
       <Container
       backBtn={
          <>
          <Link href="/credit/fulfilment">
            <span className="font-bold cursor-pointer">Go back </span>
          </Link>
          / <span className="text-lightAsh">Add Fulfilmet</span>
        </>
       }>
        {page === 0 && (
            <>
             <div className="w-full bg-white rounded-lg p-14">
            <h1 className="text-2xl text-almostBlack font-medium">Add fulfilment</h1>
            <div className="flex justify-between items-center text-backText text-sm mt-2">
                <p>Register a new fulfilment for a customer</p>
                <p className="text-blackRussian font-semibold">{page + 1} <span className="text-backText">of 3</span></p>
            </div>
            <div className="flex w-full mt-12 justify-center">
            <h2 className="text-lg text-blackRussian font-medium mr-6 w-2/5 relative bottom-4">Personal Information</h2>
            <div className="border-t-2 border-tableHeadbg w-3/4">
                <div className="flex space-x-7 mt-9 justify-end">
                    <BigInputField
                        className="w-[270px]"
                        label="FIRST NAME"
                        placeholder="Enter first name"
                        inputClass="rounded-lg outline-none flex-1 px-2 py-3"
                        register= {register}
                        name="firstname"
                        labelClass="text-lightAsh text-sm"
                    />
                     <BigInputField
                        className="w-[270px]"
                        label="LAST NAME"
                        placeholder="Enter last name"
                        inputClass="rounded-lg outline-none flex-1 px-2 py-3"
                        register= {register}
                        name="lastname"
                        labelClass="text-lightAsh text-sm"
                    />
                </div>
                 <div className="flex space-x-7 mt-9 justify-end">
                    <SelectField
                        className="w-[270px]"
                        label="GENDER"
                        selectArray={gender}
                        placeholder="Select Gender"
                        inputClass="rounded-lg outline-none flex-1 px-2 py-3"
                        register= {register}
                        name="gender"
                        labelClass="text-lightAsh text-sm"
                    />
                     <BigInputField
                        className="w-[270px]"
                        type="date"
                        label="DATE OF BIRTH"
                        placeholder="Enter last name"
                        inputClass="rounded-lg outline-none flex-1 px-2 py-3"
                        register= {register}
                        name="dob"
                        labelClass="text-lightAsh text-sm"
                    />
                </div>
                   <div className="flex space-x-7 mt-9 justify-end">
                    <BigInputField
                        className="w-[270px]"
                        label="PHONE NUMBER"
                        type="tel"
                        placeholder="Enter phone No."
                        inputClass="rounded-lg outline-none flex-1 px-2 py-3"
                        register= {register}
                        name="phone_number"
                        labelClass="text-lightAsh text-sm"
                    />
                     <BigInputField
                        className="w-[270px]"
                        label="EMAIL ADDRESS"
                        placeholder="username@mail.com"
                        inputClass="rounded-lg outline-none flex-1 px-2 py-3"
                        register= {register}
                        name="address"
                        labelClass="text-lightAsh text-sm"
                    />
                </div>
                <div className="mt-9 relative">
                     <BigInputField
                        className="w-[270px]"
                        label="BVN/NIN"
                        placeholder="Enter BVN"
                        inputClass="rounded-lg outline-none flex-1 px-2 py-3 pl-[76px]"
                        register= {register}
                        name="lastname"
                        labelClass="text-lightAsh text-sm"
                    />
                    <select className="w-[64px] bg-dashborder rounded-[5px] text-sm absolute top-[42px] mx-2">
                        <option value="bvn">BVN</option>
                         <option value="nin">NIN</option>
                    </select>
                </div>
                <div className="mt-9">
                    <Button child="Choose an existing customer" className="font-medium text-sm text-darkGreen"></Button>
                </div>
            </div>
            </div>
            <div className="flex w-full mt-12 justify-center">
                <h2 className="text-lg text-blackRussian font-medium mr-6 w-1/5 relative bottom-4">Fulfilment type</h2>
                <div className="border-t-2 border-tableHeadbg w-3/4">
                    <div className="mt-9">
                     <SelectField
                      selectArray={service}
                      label = "SERVICE TYPE"
                      className="w-[570px] ml-11"
                      labelClass="text-lightAsh text-sm"
                    />
                    </div>
                       <div className="flex space-x-7 mt-9 justify-end">
                    <SelectField
                        className="w-[270px]"
                        label="VEHICLE BRAND"
                        selectArray={vehicle}
                        inputClass="rounded-lg outline-none flex-1 px-2 py-3"
                        register= {register}
                        name="gender"
                        labelClass="text-lightAsh text-sm"
                    />
                     <BigInputField
                        className="w-[270px]"
                        type="text"
                        label="MODEL"
                        placeholder="Enter model name"
                        inputClass="rounded-lg outline-none flex-1 px-2 py-3"
                        register= {register}
                        name="dob"
                        labelClass="text-lightAsh text-sm"
                    />
                </div>
                   <div className="flex space-x-7 mt-9 justify-end">
                    <SelectField
                        className="w-[270px]"
                        label="YEAR OF MANUFACTURE"
                        selectArray={year}
                        inputClass="rounded-lg outline-none flex-1 px-2 py-3"
                        register= {register}
                        name="gender"
                        labelClass="text-lightAsh text-sm"
                    />
                     <BigInputField
                        className="w-[270px]"
                        type="text"
                        label="REGISTRATION NO"
                        placeholder="Enter registration no"
                        inputClass="rounded-lg outline-none flex-1 px-2 py-3"
                        register= {register}
                        name="dob"
                        labelClass="text-lightAsh text-sm"
                    />
                </div>
                  
                </div>
            </div>
            
        </div>
        <div className="text-right mt-8">
           <Button child = "Next" className="text-white bg-darkGreen w-[110px] py-2 rounded-10" onClick={handleStep}></Button>
        </div>
            </>
        )}
       </Container>
    )
}