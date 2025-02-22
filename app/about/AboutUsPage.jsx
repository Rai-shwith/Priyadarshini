import Image from "next/image";


const AboutUsPage = ({text}) => {
  return (
    <div className="py-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Heading and Introduction */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">{text.heading}</h1>
        <p className="mt-4 text-lg text-gray-700">
          {text.introduction}
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
              {text.mission}
            </h2>
            <p className="mt-4 text-gray-700">
              {text.missionDescription}
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
              {text.vision}
            </h2>
            <p className="mt-4 text-gray-700">
              {text.visionDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 text-center">
          {text.values}
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Core Value 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">
              {text.integrity}
            </h3>
            <p className="mt-4 text-gray-700">
              {text.integrityDescription}
            </p>
          </div>
          {/* Core Value 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">
              {text.excellence}
            </h3>
            <p className="mt-4 text-gray-700">
              {text.excellenceDescription}
            </p>
          </div>
          {/* Core Value 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">{text.respect}</h3>
            <p className="mt-4 text-gray-700">
              {text.respectDescription}
            </p>
          </div>
          {/* Core Value 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">
              {text.responsibility}
            </h3>
            <p className="mt-4 text-gray-700">
              {text.responsibilityDescription}
            </p>
          </div>
          {/* Core Value 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">
              {text.improvement}
            </h3>
            <p className="mt-4 text-gray-700">
              {text.improvementDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold text-gray-900">
         {text.annualDay}
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
  </div>  )
}

export default AboutUsPage