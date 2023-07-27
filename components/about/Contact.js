import { forwardRef } from "react";
import Link from "next/link";

const Contact = forwardRef((props, ref) => (
  <div id="contact" className=" px-6 py-24 sm:py-40 lg:px-8">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-4xl font-bold tracking-tight text-white mb-16">
        Ready to talk?
      </h2>
      <p ref={ref} className="mt-6 sm:text-lg leading-8 text-gray-300">
        If you are interested in learning more about me or my work, please feel
        free to{" "}
        <span>
          <Link
            href="/contact-form"
            className="text-orange-tertiary underline underline-offset-4 "
          >
            contact
          </Link>
        </span>{" "}
        me.
      </p>
    </div>
  </div>
));

Contact.displayName = "Contact";

export default Contact;
