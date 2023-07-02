// import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import AppLayoutWithNavbar from "layouts/AppLayoutWithNavbar";
import { classNames } from "helpers/setClassNames";
import ConfirmEmailNotification from "components/confirm-email/confirmEmailNotification";
const ContactForm = () => {
  const [formResponse, setFormResponse] = useState({
    type: "recruiter",
    firstName: "",
    lastName: "",
    email: "",
    website: "",
    description: "",
  });

  const [hasSubmittedForm, setHasSubmittedForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/responses", {
      method: "POST",
      body: JSON.stringify(formResponse),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    if (data.success) {
      setFormResponse({
        type: "recruiter",
        firstName: "",
        lastName: "",
        email: "",
        website: "",
        description: "",
      });
      setHasSubmittedForm(true);
    } else {
      console.log("Error:", data);
    }
  };

  return (
    <AppLayoutWithNavbar>
      {hasSubmittedForm && <ConfirmEmailNotification />}
      <div className="py-24 sm:py-40 px-10 space-y-10 divide-y divide-gray-900/10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
          <div className="px-4 sm:px-0 text-center sm:text-left">
            <h2 className="text-base font-semibold leading-7 text-gray-200">
              Contact information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-400">
              This information will be shared with rawDev.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 shadow-xl shadow-gray-900 ring-1 ring-gray-900/5 rounded-xl md:col-span-2"
          >
            <div className="px-5 py-10 sm:p-8 ">
              <fieldset className="flex flex-col items-center sm:items-start">
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                  Tell me who you are
                </legend>
                <div className="mt-6 flex gap-x-10 pb-5 mb-5 ">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="recruiter"
                      name="recruiter"
                      value="recruiter"
                      onChange={(e) =>
                        setFormResponse({
                          ...formResponse,
                          type: e.target.value,
                        })
                      }
                      checked={formResponse.type === "recruiter"}
                      type="radio"
                      className={classNames(
                        formResponse.type === "recruiter"
                          ? "text-orange-tertiary focus:ring-orange-tertiary"
                          : "",
                        "h-4 w-4 border-gray-300"
                      )}
                    />
                    <label
                      htmlFor="recruiter"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Recruiter
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="client"
                      name="client"
                      value="client"
                      checked={formResponse.type === "client"}
                      onChange={(e) =>
                        setFormResponse({
                          ...formResponse,
                          type: e.target.value,
                        })
                      }
                      type="radio"
                      className={classNames(
                        formResponse.type === "client"
                          ? "text-orange-tertiary focus:ring-orange-tertiary"
                          : "bg-transparent",
                        "h-4 w-4 border-gray-300 "
                      )}
                    />
                    <label
                      htmlFor="client"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Client
                    </label>
                  </div>
                </div>
              </fieldset>

              <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      value={formResponse.firstName}
                      onChange={(e) =>
                        setFormResponse({
                          ...formResponse,
                          firstName: e.target.value,
                        })
                      }
                      autoComplete="given-name"
                      className="bg-transparent block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-tertiary sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      value={formResponse.lastName}
                      onChange={(e) =>
                        setFormResponse({
                          ...formResponse,
                          lastName: e.target.value,
                        })
                      }
                      autoComplete="family-name"
                      className="bg-transparent block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-tertiary sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formResponse.email}
                      onChange={(e) =>
                        setFormResponse({
                          ...formResponse,
                          email: e.target.value,
                        })
                      }
                      autoComplete="email"
                      className="bg-transparent block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-tertiary sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="website"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Website
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-tertiary sm:max-w-md">
                      <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                        http://
                      </span>
                      <input
                        type="text"
                        name="website"
                        id="website"
                        value={formResponse.website}
                        onChange={(e) =>
                          setFormResponse({
                            ...formResponse,
                            website: e.target.value,
                          })
                        }
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="www.example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    About
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="description"
                      name="description"
                      value={formResponse.description}
                      onChange={(e) =>
                        setFormResponse({
                          ...formResponse,
                          description: e.target.value,
                        })
                      }
                      rows={10}
                      className="bg-transparent block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-tertiary sm:text-sm sm:leading-6"
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Write the reason why you are contacting me.
                  </p>
                </div>

                {/* <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Cover photo
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-orange-tertiary focus-within:outline-none focus-within:ring-2 focus-within:ring-orange-tertiary focus-within:ring-offset-2 hover:text-orange-secondary"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-orange-tertiary px-3 py-2 text-sm font-semibold text-orange-primary shadow-sm hover:bg-orange-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-tertiary"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </AppLayoutWithNavbar>
  );
};
export default ContactForm;
