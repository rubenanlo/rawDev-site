import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { classNames } from "helpers/setClassNames";
import { TRASH as trash, EMAIL as sendEmail } from "helpers/exportImages";

const FormResponses = () => {
  const [responses, setResponses] = useState([]);

  const handleRetrieve = async () => {
    const response = await fetch("/api/contact-form/retrieve-responses", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const { data } = await response.json();
    setResponses(data);
  };

  useEffect(() => {
    handleRetrieve();
  }, []);

  console.log(responses);

  return (
    <div className="mt-24 flow-root ">
      <div className="-my-2">
        <div className="inline-block min-w-full py-2 align-middle">
          <table className="min-w-full border-spacing-0 whitespace-nowrap">
            <colgroup>
              <col className="w-1/13" />
              <col className="w-full sm:w-3/12" />
              <col className="lg:w-2/12" />
              <col className="lg:w-2/12" />
              <col className="lg:w-1/12" />
              <col className="lg:w-5/12" />
            </colgroup>
            <thead className="text-sm leading-6 text-gray-100">
              <tr>
                <th scope="col" className="sticky top-[5.21rem]" />
                <th
                  scope="col"
                  className="sticky top-[6rem] pb-8 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8 text-left"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="sticky top-[6rem] hidden pb-8 font-semibold sm:table-cell text-center"
                >
                  Website
                </th>
                <th
                  scope="col"
                  className="sticky top-[6rem] pb-8 font-semibold text-center"
                >
                  Role
                </th>

                <th
                  scope="col"
                  className="sticky top-[6rem] hidden pb-8 font-semibold md:table-cell text-center"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="sticky top-[6rem] pb-8 font-semibold sm:table-cell text-center"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {responses.map(
                ({
                  type: role,
                  firstName,
                  lastName,
                  email,
                  website,
                  verified,
                  date,
                }) => (
                  <tr key={email}>
                    <td className="">
                      <div
                        className={classNames(
                          verified
                            ? "text-green-400 bg-green-400/10"
                            : "text-rose-400 bg-rose-400/10",
                          "flex-none rounded-full p-1"
                        )}
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-current" />
                      </div>
                    </td>
                    <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                      <div className="flex items-center gap-x-4">
                        <div className="truncate text-sm font-medium leading-6 text-gray-100">
                          {lastName || "Not provided"}
                          {lastName ? ", " : ""}
                          {firstName}
                        </div>
                      </div>
                    </td>
                    <td className="hidden py-4 px-5 text-sm leading-6 text-gray-400 md:table-cell text-center">
                      <Link target="_blank" href={website || ""}>
                        {website}
                      </Link>
                    </td>
                    <td className="hidden py-4 px-5 sm:table-cell text-center">
                      <div className="font-mono text-sm leading-6 text-gray-400">
                        {role}
                      </div>
                    </td>
                    <td className="hidden py-4 px-5 text-center text-sm leading-6 text-gray-400 sm:table-cell">
                      <time dateTime={date}>{date}</time>
                    </td>
                    <td className="py-4 text-center text-sm leading-6 text-gray-400 sm:table-cell">
                      <div className="flex justify-center gap-x-3">
                        <Link href={`mailto:${email}`}>
                          <Image src={sendEmail} alt="email" />
                        </Link>
                        <button>
                          <Image src={trash} alt="trash" />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FormResponses;
