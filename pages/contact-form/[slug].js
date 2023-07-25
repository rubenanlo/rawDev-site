import AppLayoutWithNavbar from "layouts/AppLayoutWithNavbar";
import { getAutomaticResponse } from "../../helpers/getAutomaticResponse";

const Response = ({ response: { title, paragraph } }) => (
  <AppLayoutWithNavbar>
    <div className="h-screen text-gray-100 flex flex-col justify-center items-center">
      <div className="text-center max-w-xl">
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-orange-quaternary sm:text-4xl">
          {title}
        </h2>
        {paragraph.map((paragraph) => (
          <p
            key={paragraph}
            className="mt-6 text-lg leading-8 text-gray-400 text-center"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  </AppLayoutWithNavbar>
);

export default Response;

const component = "contact-form";

export const getStaticPaths = async () => {
  const paths = ["already-submitted", "verification"].map((slug) => ({
    params: { slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const [response] = getAutomaticResponse(component, params.slug);
  return { props: { response } };
};
