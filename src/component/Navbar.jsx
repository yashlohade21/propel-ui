import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Programs", href: "#", current: false },
  { name: "About Us", href: "/about", current: false },
  { name: "Policies", href: "/policies", current: false },
  {
    name: "Talk to Our Career Counseller",
    href: "tel:+91999999999",
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className=" max-w-full px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-[75px] w-[98px]"
                    src="https://s3-alpha-sig.figma.com/img/eaa9/394d/8a614719a89a943f40995cdad00e224e?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YWYO0YdVeh-juKU3LSDuFUl2jBbbFJNghwIoY0z1ShuC~AvxaqIGLjM7UcyAqdLRIasgYeeqPwX2JKuQ~AFsMMLsjpROtSlS7kObKy2c03Gst-Xu0yt9bynoM4BhLw9oK-XnxK3OQJKUVGBVCJhhZdA9v0~izlZJ6KvrTUA9cqIJp445KKZ0JGLKGQbnjedxSy1btVKfHjr9cNeY~fquw0MQUufQPQhqadJfzt99Z-7PuK9J-zqGsyEqFFnv7E9p1dsdgDoIT0DWtG7LmYKaOHF9DbQpx9DxLvFaXukea1gW0TSyI9gc-WUkH-B22wu3j3TP4~xP5yiBX7cUwsQtSA__"
                    alt="Propel"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-1 mt-5">
                    <Link
                      key="Home"
                      to="/"
                      className={classNames(
                        navigation[0].current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={navigation[0].current ? "page" : undefined}
                    >
                      {navigation[0].name}
                    </Link>
                    <Menu as="div" className="relative ml ">
                      <div>
                        <Menu.Button className="relative flex rounded-md bg-gray-800 hover:bg-gray-700 text-sm focus:outline-none  focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <Link
                            key="Programs"
                            to="#"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"

                            // aria-current={navigation[1].current ? 'page' : undefined}
                          >
                            Programs
                          </Link>
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute  z-10 mt-2 w-48 origin-top-right rounded-md bg-slate-800  py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="#"
                                className={classNames(
                                  active ? " hover:bg-slate-700" : "",
                                  "block px-4 py-2 text-sm text-white"
                                )}
                              >
                                Data Structures and Algorithms
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="#"
                                className={classNames(
                                  active ? " hover:bg-slate-700" : "",
                                  "block px-4 py-2 text-sm text-white"
                                )}
                              >
                                AI Powered Full Stack Development
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="#"
                                className={classNames(
                                  active ? " hover:bg-slate-700" : "",
                                  "block px-4 py-2 text-sm text-white"
                                )}
                              >
                                Data Science
                              </Link>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                    <Link
                      key={navigation[2].name}
                      to="/about"
                      className={classNames(
                        navigation[2].current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={navigation[2].current ? "page" : undefined}
                    >
                      {navigation[2].name}
                    </Link>
                    <Link
                      key={navigation[3].name}
                      to="/policies"
                      className={classNames(
                        navigation[3].current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={navigation[3].current ? "page" : undefined}
                    >
                      {navigation[3].name}
                    </Link>
                    <Link
                      key={navigation[4].name}
                      to={navigation[4].href}
                      className={classNames(
                        navigation[4].current
                          ? "bg-gray-900 text-white bg-gradient-to-r from-indigo-500 to-blue-800 text-center"
                          : "text-gray-300 bg-gradient-to-r from-indigo-600 to-blue-800 font-semibold hover:text-white hover:bg-gradient-to-r hover:bg-indigo-800 hover:to-blue-900 text-center",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={navigation[4].current ? "page" : undefined}
                    >
                      {navigation[4].name}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                key={navigation[0].name}
                to={navigation[0].href}
                className={classNames(
                  navigation[0].current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
                aria-current={navigation[0].current ? "page" : undefined}
              >
                {navigation[0].name}
              </Link>

              <Menu as="div" className="relative ml ">
                <div>
                  <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none  focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <Link
                      key="Programs"
                      to="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"

                      // aria-current={navigation[1].current ? 'page' : undefined}
                    >
                      Programs
                    </Link>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute  z-10 mt-2 w-48 origin-top-right rounded-md bg-slate-800  py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="#"
                          className={classNames(
                            active ? " hover:bg-slate-700" : "",
                            "block px-4 py-2 text-sm text-white"
                          )}
                        >
                          Data Structures and Algorithms
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="#"
                          className={classNames(
                            active ? " hover:bg-slate-700" : "",
                            "block px-4 py-2 text-sm text-white"
                          )}
                        >
                          AI Powered Full Stack Development
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="#"
                          className={classNames(
                            active ? " hover:bg-slate-700" : "",
                            "block px-4 py-2 text-sm text-white"
                          )}
                        >
                          Data Science
                        </Link>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
              <Link
                key={navigation[2].name}
                to={navigation[2].href}
                className={classNames(
                  navigation[2].current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
                aria-current={navigation[2].current ? "page" : undefined}
              >
                {navigation[2].name}
              </Link>
              <Link
                key={navigation[3].name}
                to={navigation[3].href}
                className={classNames(
                  navigation[3].current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
                aria-current={navigation[3].current ? "page" : undefined}
              >
                {navigation[3].name}
              </Link>
              <Link
                key={navigation[4].name}
                to={navigation[4].href}
                className={classNames(
                  navigation[4].current
                    ? "bg-gray-900 text-white bg-gradient-to-r from-indigo-500 to-blue-800 text-center"
                    : "text-gray-300 bg-gradient-to-r from-indigo-500 to-blue-800 hover:text-white text-center",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
                aria-current={navigation[4].current ? "page" : undefined}
              >
                {navigation[4].name}
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
