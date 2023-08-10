import Link from "next/link";
import Image from "next/image";
import _ from "lodash";
import { AnimatePresence, motion } from "framer-motion";
import { classNames } from "helpers/setClassNames";
import { handleSelectEntries } from "helpers/selectEntries";
import {
  TRASH as trash,
  EMAIL as sendEmail,
  USER as user,
} from "helpers/exportImages";

const TableResponses = ({
  responses,
  deleteIdArray,
  setDeleteIdArray,
  setOpenDeleteModal,
  singleDeleteId,
  openDeleteModal,
  setSingleDeleteId,
}) => {
  return (
    <div className="mt-24 flow-root ">
      <div className="-my-2">
        <div className="inline-block min-w-full py-2 align-middle">
          <table className="min-w-full border-spacing-0 whitespace-nowrap">
            <colgroup>
              <col className="w-1/13" />
              <col className="w-1/13" />
              <col className="w-full sm:w-2/12" />
              <col className="lg:w-2/12" />
              <col className="lg:w-2/12" />
              <col className="lg:w-2/12" />
              <col className="lg:w-5/12" />
            </colgroup>
            <thead className="text-sm leading-6 text-gray-100">
              <tr>
                <th
                  scope="col"
                  className="sticky top-[6rem] pb-8 font-semibold md:table-cell flex flex-col"
                >
                  <div
                    className="border border-gray-500 h-4 w-4 rounded-sm bg-transparent flex items-center justify-center cursor-pointer"
                    onClick={() =>
                      handleSelectEntries(
                        deleteIdArray,
                        responses,
                        setDeleteIdArray,
                        true
                      )
                    }
                  >
                    <div
                      className={classNames(
                        deleteIdArray.length === responses.length
                          ? "bg-orange-tertiary"
                          : "bg-transparent",
                        "w-2 h-2"
                      )}
                    />
                  </div>
                  <AnimatePresence>
                    {(singleDeleteId || deleteIdArray.length > 0) &&
                      !openDeleteModal && (
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          animate={{ y: [-10, 0], opacity: [0, 0.7] }}
                          exit={{ y: [0, -10], opacity: [0.7, 0] }}
                          transition={{ duration: 0.5 }}
                          className="absolute left-6 -top-0 text-xs text-gray-100 bg-red-800 px-2 py-1 rounded-sm"
                          onClick={() => setOpenDeleteModal(true)}
                        >
                          Delete
                        </motion.button>
                      )}
                  </AnimatePresence>
                </th>
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
                  className="sticky top-[6rem] pb-8 font-semibold sm:table-cell text-left px-5"
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
                  _id,
                }) => (
                  <tr key={_id}>
                    <td>
                      <div
                        className={
                          "border border-gray-500 h-4 w-4 rounded-sm mr-10 cursor-pointer flex justify-center items-center"
                        }
                        onClick={() =>
                          handleSelectEntries(
                            deleteIdArray,
                            responses,
                            setDeleteIdArray,
                            false,
                            _id
                          )
                        }
                      >
                        <div
                          className={classNames(
                            deleteIdArray.includes(_id)
                              ? "bg-orange-tertiary"
                              : "bg-transparent",
                            "w-2 h-2"
                          )}
                        />
                      </div>
                    </td>
                    <td>
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
                      <Link
                        target="_blank"
                        href={`http://${website}` || ""}
                        className=" hover:text-gray-100 hover:underline hover:underline-offset-4"
                      >
                        {_.truncate(website, { length: 15 })}
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
                    <td className="py-4 px-5 text-left text-sm leading-6 text-gray-400 sm:table-cell">
                      <div className="flex justify-start gap-x-5">
                        <button
                          className="w-4"
                          onClick={() => {
                            setOpenDeleteModal(true);
                            setSingleDeleteId(_id);
                          }}
                        >
                          <Image src={trash} alt="trash" />
                        </button>
                        <Link href={`mailto:${email}`} className="w-4">
                          <Image src={sendEmail} alt="email" />
                        </Link>
                        {role === "client" && (
                          <button className="w-4">
                            <Image src={user} alt="user" />
                          </button>
                        )}
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

export default TableResponses;
