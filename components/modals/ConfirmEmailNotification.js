import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import { Dialog, Transition } from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
export default function ConfirmEmailNotification() {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => {
          setOpen;
          router.back();
        }}
      >
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />

        <motion.div
          animate={{ scale: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-10 overflow-y-auto"
        >
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                <button
                  type="button"
                  className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-quaternary focus:ring-offset-2"
                  onClick={() => {
                    setOpen(false);
                    router.back();
                  }}
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-quaternary sm:mx-0 sm:h-10 sm:w-10">
                  <ExclamationTriangleIcon
                    className="h-6 w-6 text-orange-secondary"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <Dialog.Title
                    as="h3"
                    className="text-base font-semibold leading-6 text-gray-900 mb-6"
                  >
                    Check your inbox!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 mb-6">
                      Or spam, and confirm your email address. This helps
                      avoiding scammers.
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Thanks for your understanding.
                    </p>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </motion.div>
      </Dialog>
    </Transition.Root>
  );
}
