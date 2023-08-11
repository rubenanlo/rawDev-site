import { Fragment } from "react";
import { motion } from "framer-motion";
import { Dialog, Transition } from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { handleDelete } from "helpers/handleDataFromDatabase";
import { toggle } from "slices/modalVisibility";

export default function DeleteEntry({
  id,
  setDeleteIdArray,
  openDeleteModal,
  dispatch,
}) {
  const modalAnimation = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 },
    transition: { duration: 0.5 },
  };
  const handleButtonAction = () => {
    dispatch(toggle());
    setDeleteIdArray([]);
  };

  return (
    <Transition.Root show={openDeleteModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-20"
        onClose={() => {
          handleButtonAction();
        }}
      >
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />

        <motion.div
          initial={modalAnimation.initial}
          animate={modalAnimation.animate}
          transition={modalAnimation.transition}
          className="fixed inset-0 z-10 overflow-y-auto"
        >
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                <button
                  type="button"
                  className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-quaternary focus:ring-offset-2"
                  onClick={() => {
                    handleButtonAction();
                  }}
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="sm:flex sm:flex-col sm:items-center sm:justify-center">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-quaternary sm:mx-0 sm:h-10 sm:w-10">
                  <ExclamationTriangleIcon
                    className="h-6 w-6 text-orange-secondary"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <Dialog.Title
                    as="h3"
                    className="text-base font-semibold leading-6 text-gray-900 mb-10 mt-2"
                  >
                    Are you sure you want to delete this response?
                  </Dialog.Title>
                </div>
              </div>
              <div className="mt-2 flex justify-between">
                <button
                  type="button"
                  className="w-32 rounded-md border border-ray-400 px-3.5 py-2.5 text-sm font-semibold text-gray-500 shadow-sm hover:bg-gray-50"
                  onClick={() => {
                    handleButtonAction();
                  }}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="w-32 rounded-md bg-red-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={() => {
                    handleDelete(id);
                    handleButtonAction();
                  }}
                >
                  Delete
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </motion.div>
      </Dialog>
    </Transition.Root>
  );
}
