import NavBar from "@/components/NavBar";
import { provideText } from "@/utils/provideText";
import { cookies } from "next/headers";
import Image from "next/image";
import React from "react";

const AboutPage = async ({ searchParams }) => {
  const cookieStore = cookies();
  const lang = (await cookieStore).get("lang")?.value || "kn"; // Await the cookies
  const languageData = await provideText(lang);

  return (
    <>
      <NavBar text={languageData} language={lang} />
      <div className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading and Introduction */}
          <section className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
            <p className="mt-4 text-lg text-gray-700">
              Welcome to Priyadarshini English Medium School, Bettampady.
              Founded by the late Bailady Babu Gowda, our school operates under
              the Vivekananda Vidyavardhaka Sangha, dedicated to providing
              quality education and fostering holistic development.
            </p>
          </section>

          {/* Mission Section */}
          <section className="mb-12">
            <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 w-full rounded-lg overflow-hidden">
            {/* Placeholder for Mission Image */}
                <div className="relative w-full aspect-video bg-gray-300 flex items-center justify-center">
                  <Image
                    src={"/images/AboutPage/mission.png"}
                    alt="Mission Image"
                    fill
                    sizes="(max-width: 768px) 50vw,
           (max-width: 1200px) 33vw,
           25vw"
                  />
                </div>
              </div>
              <div className="md:w-1/2 md:pl-10 mt-8 md:mt-0">
                <h2 className="text-3xl font-semibold text-gray-900">
                  Our Mission
                </h2>
                <p className="mt-4 text-gray-700">
                  Our mission is to provide quality education that fosters
                  holistic development, empowering students to excel
                  academically and grow into responsible, compassionate
                  individuals.
                </p>
              </div>
            </div>
          </section>

          {/* Vision Section */}
          <section className="mb-12">
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 w-full rounded-lg overflow-hidden">
                {/* Placeholder for Vision Image */}
                <div className="relative w-full aspect-video bg-gray-300 flex items-center justify-center">
                  <Image
                    src={"/images/AboutPage/vision.png"}
                    alt="Vision Image"
                    fill
                    sizes="(max-width: 768px) 50vw,
           (max-width: 1200px) 33vw,
           25vw"
                  />
                </div>
              </div>
              <div className="md:w-1/2 md:pr-10 mt-8 md:mt-0">
                <h2 className="text-3xl font-semibold text-gray-900">
                  Our Vision
                </h2>
                <p className="mt-4 text-gray-700">
                  We envision a learning community where students are inspired
                  to pursue knowledge, embrace innovation, and contribute
                  positively to society.
                </p>
              </div>
            </div>
          </section>

          {/* Core Values Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 text-center">
              Our Core Values
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Core Value 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900">
                  Integrity
                </h3>
                <p className="mt-4 text-gray-700">
                  Upholding honesty and strong moral principles in all
                  endeavors.
                </p>
              </div>
              {/* Core Value 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900">
                  Excellence
                </h3>
                <p className="mt-4 text-gray-700">
                  Striving for the highest standards in academics and personal
                  growth.
                </p>
              </div>
              {/* Core Value 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900">Respect</h3>
                <p className="mt-4 text-gray-700">
                  Fostering a culture of empathy, understanding, and mutual
                  respect.
                </p>
              </div>
              {/* Core Value 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900">
                  Responsibility
                </h3>
                <p className="mt-4 text-gray-700">
                  Encouraging accountability and a sense of duty towards oneself
                  and the community.
                </p>
              </div>
              {/* Core Value 5 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900">
                  Continuous Improvement
                </h3>
                <p className="mt-4 text-gray-700">
                  Embracing lifelong learning and constant self-improvement.
                </p>
              </div>
            </div>
          </section>

          {/* Video Section */}
          <section className="text-center">
            <h2 className="text-3xl font-semibold text-gray-900">
              Annual Day Celebration
            </h2>
            <div className="mt-8">
              {/* Embedded YouTube Video */}
              <div className="relative">
                <iframe
                  className="md:w-11/12 aspect-video mx-auto"
                  src="https://www.youtube.com/embed/89I7p57XFQg?si=PLJ6MqOU5Pu6bEHO"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
