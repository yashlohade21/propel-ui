import React from 'react';
import { useState } from 'react';
const UserForm = () => {

    const [isProfessional, setIsProfessional] = useState(false)
    const handleToggle = () => {
        setIsProfessional(!isProfessional);
    };
    
    return (
                <div className="w-full lg:w-8/12 px-4 mx-auto mt-6 border border-white bg-gradient-to-r from-pink-100 to-slate-200 shadow-lg rounded-lg ">
                    <br />
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 ">
                        <div className="rounded-t bg-white mb-0 px-6 py-6">
                            <div className="text-center flex justify-between">
                                <h6 className="text-gray-700 text-xl font-bold">
                                    My account
                                </h6>
                                <button className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                                    Settings
                                </button>
                            </div>
                        </div>
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <form>
                                <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase text-gray-700">
                                    User Information
                                </h6>
                        <div className="flex flex-wrap">
                        <div className="w-full lg:w-6/12 px-4 mb-3">
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="firstName">
                                        First Name
                                    </label>
                                    <input type="text" id="firstName" name="firstName" placeholder="Enter first name" className="border border-gray px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4 mb-3">
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="lastName">
                                        Last Name
                                    </label>
                                    <input type="text" id="lastName" name="lastName" placeholder="Enter last name" className="border border-gray px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4 mb-3">
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="email">
                                        Email address
                                    </label>
                                    <input type="email" id="email" name="email" placeholder="Enter email address" className="border border-gray px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4 mb-3">
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="phoneNumber">
                                        Phone Number
                                    </label>
                                    <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Enter phone number" pattern="[0-9]*" inputmode="numeric" className="border border-gray px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                                </div>
                            </div>
                        </div>

                        <hr className="mt-6 border-b-1 border-blueGray-300" />
                                <div className="flex justify-center mt-4">
                                <label className="inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        value=""
                                        className="sr-only peer"
                                        checked={isProfessional}
                                        onChange={handleToggle}
                                    />
                                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-black peer-checked:bg-blue-600"></div>
                                    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        I'm {isProfessional ? 'Professional' : 'Student'} 
                                    </span>
                                </label>
                                </div>
                {isProfessional ? (
                    <div className="flex flex-wrap items-center rounded p-4">
                        <div className="w-full lg:w-4/12 px-4 mb-3">
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-gray text-xs font-bold mb-2" htmlFor="company">
                                    Company
                                </label>
                                <input type="text" id="company" name="company" placeholder="Enter company name" className="border border-gray px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                            </div>
                        </div>
                        <div className="w-full lg:w-4/12 px-4 mb-3">
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-gray text-xs font-bold mb-2" htmlFor="experience">
                                    Years of Experience
                                </label>
                                <input type="number" id="experience" name="experience" placeholder="Enter years of experience" className="border border-gray px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                            </div>
                        </div>
                        <div className="w-full lg:w-4/12 px-4 mb-3">
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-gray text-xs font-bold mb-2" htmlFor="domain">
                                    Domain
                                </label>
                                <select id="domain" name="domain" className="border border-gray px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                    <option value="">Select domain</option>
                                    <option value="ai">AI</option>
                                    <option value="ml">ML</option>
                                    <option value="ar_vr">AR/VR</option>
                                </select>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-wrap items-center rounded p-4">
                        <div className="w-full lg:w-4/12 px-4 mb-3">
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-gray text-xs font-bold mb-2" htmlFor="college">
                                    College
                                </label>
                                <input type="text" id="college" name="college" placeholder="Enter college name" className="border border-gray px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                            </div>
                        </div>
                        <div className="w-full lg:w-4/12 px-4 mb-3">
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-gray text-xs font-bold mb-2" htmlFor="passingYear">
                                    Passing Out Year
                                </label>
                                <input type="number" id="passingYear" name="passingYear" placeholder="Enter passing out year" className="border border-gray px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                            </div>
                        </div>
                        <div className="w-full lg:w-4/12 px-4 mb-3">
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-gray text-xs font-bold mb-2" htmlFor="branch">
                                    Branch
                                </label>
                                <select id="branch" name="branch" className="border border-gray px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                    <option value="">Select branch</option>
                                    <option value="entc">ENTC</option>
                                    <option value="computer">Computer Engineering</option>
                                    <option value="mechanical">Mechanical Engineering</option>
                                    <option value="electrical">Electrical Engineering</option>
                                </select>
                            </div>
                        </div>
                    </div>
                )}
                        <hr className="mt-6 border-b-1 border-blueGray-300" />

                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase text-gray">
                        </h6>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-12/12 px-4 mb-3">
                                {/* <div className="relative w-full mb-3">
                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="address">
                                        Address
                                    </label>
                                    <input type="text" id="address" name="address" placeholder="Enter address" className="border border-gray px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                                </div> */}
                            </div>
                            <div className="w-full lg:w-4/12 px-4 mb-3">
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="city">
                                        Company
                                    </label>
                                    <input type="text" id="city" name="city" placeholder="Enter city" className="border border-gray px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 mb-3">
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="country">
                                        Years Of Experience
                                    </label>
                                    <input type="text" id="country" name="country" placeholder="Enter country" className="border border-gray px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 mb-3">
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="postalCode">
                                        Domain
                                    </label>
                                    <input type="text" id="postalCode" name="postalCode" placeholder="Enter postal code" className="border border-gray px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                                </div>
                            </div>
                        </div>

                        <hr className="mt-6 border-b-1 border-blueGray-300" />
                        <div className="flex flex-wrap">
    <div className="w-full lg:w-6/12 px-4 mb-3">
        <div className="relative w-full mb-3">
            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="password">
                Password
            </label>
            <input type="password" id="password" name="password" placeholder="Enter password" className="border border-gray px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
        </div>
    </div>
    <div className="w-full lg:w-6/12 px-4 mb-3">
        <div className="relative w-full mb-3">
            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="confirmPassword">
                Confirm Password
            </label>
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm password" className="border border-gray px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
        </div>
    </div>
</div>

            <div class="flex justify-between">
                <button class="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-bold py-2 px-4 rounded">Cancel</button>
                <button class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-2 px-4 rounded">Save</button>
            </div>
                    </form>
            <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">Have Account? <a href="/SignIn" className="text-indigo-600 hover:text-indigo-500">Sign In</a></p>
            </div>
                </div>
            </div>
        </div>
    );
}

export default UserForm;
