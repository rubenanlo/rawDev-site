import { classNames } from "helpers/setClassNames";
import { useEffect, useState } from "react";

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

  return (
    <div className="py-10 h-screen">
      <table className="relative mt-6 w-full whitespace-nowrap text-left">
        <colgroup>
          <col className="w-1/13" />
          <col className="w-full sm:w-4/12" />
          <col className="lg:w-4/12" />
          <col className="lg:w-2/12" />
          <col className="lg:w-2/12" />
          <col className="lg:w-1/12" />
          <col className="lg:w-1/12" />
        </colgroup>
        <thead className="border-b border-white/10 text-sm leading-6 text-white">
          <tr>
            <th scope="col" className="sticky top-[5.21rem]" />
            <th
              scope="col"
              className="sticky top-[5.21rem] py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8"
            >
              User
            </th>
            <th
              scope="col"
              className="sticky top-[5.21rem] py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20"
            >
              Role
            </th>
            <th
              scope="col"
              className="sticky top-[5.21rem] hidden py-2 pl-0 pr-8 font-semibold sm:table-cell"
            >
              Email
            </th>
            <th
              scope="col"
              className="sticky top-[5.21rem] hidden py-2 pl-0 pr-8 font-semibold sm:table-cell"
            >
              Website
            </th>
            <th
              scope="col"
              className="sticky top-[5.21rem] hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20"
            >
              Date
            </th>
            <th
              scope="col"
              className="sticky top-[5.21rem] hidden py-2 pl-0 pr-4 text-right font-semibold sm:table-cell sm:pr-6 lg:pr-8"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {responses.map(
            ({ type, firstName, lastName, email, website, verified, date }) => (
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
                    <div className="truncate text-sm font-medium leading-6 text-white">
                      {lastName}
                      {", "}
                      {firstName}
                    </div>
                  </div>
                </td>
                <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                  <div className="flex gap-x-3">
                    <div className="font-mono text-sm leading-6 text-gray-400">
                      {type}
                    </div>
                  </div>
                </td>
                <td className="py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
                  <div className="flex items-center justify-end gap-x-2 sm:justify-start">
                    <time className="text-gray-400 sm:hidden" dateTime={date}>
                      {date}
                    </time>
                    <div className="hidden text-white sm:block">{email}</div>
                  </div>
                </td>
                <td className="hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-400 md:table-cell lg:pr-20">
                  {website}
                </td>
                <td className="hidden py-4 pl-0 pr-4 text-right text-sm leading-6 text-gray-400 sm:table-cell sm:pr-6 lg:pr-8">
                  <time dateTime={date}>{date}</time>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FormResponses;
