import { CalendarDays, GraduationCap } from "lucide-react"
import Image from "next/image"

export default function MyCertificatesPage() {
  return (
    <>
      <div className="w-full px-2 py-4 max-w-full mx-auto">
        <h2 className="text-2xl font-semibold transform hover:scale-105 transition-transform duration-200">
          <GraduationCap className="mr-2 inline-block align-text-bottom" aria-hidden />
          My Certificates
        </h2>
        <hr />
      </div>

      <div className="flex flex-col md:flex-row min-h-screen gap-4 p-0 m-0.5">
        <div className="w-full md:w-[50%] p-4 bg-white rounded-lg shadow">
          <div className="mt-4 mb-4 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20 transform hover:scale-105 transition-transform duration-200">
            <a
              href="https://cert.efset.org/32zuaQ"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-blue-600 underline font-medium"
            >
              View Actual Certificate on EF SET Website
            </a>

            <h5 className="text-2xl font-semibold">
              <GraduationCap className="mr-2 inline-block align-text-bottom text-base text-blue-600" aria-hidden />
              English Certification from EF Set - C1 ADVANCED
            </h5>
            <h6 className="text-sm text-gray-500">
              <CalendarDays className="mr-2 inline-block align-text-bottom text-base text-black" aria-hidden />
              October 21, 2025
            </h6>

            <Image
              src="/assets/efset.jpg"
              alt="EF SET Certificate"
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="mx-auto h-auto w-full rounded-lg border-2 border-black-900"
            />
          </div>

          <div className="mt-4 mb-4 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20 transform hover:scale-105 transition-transform duration-200">
            <a
              href="https://www.coursera.org/account/accomplishments/verify/XTXQCSYD9DKT"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-blue-600 underline font-medium"
            >
              View Actual Certificate on COURSERA Website
            </a>

            <h5 className="text-2xl font-semibold">
              <GraduationCap className="mr-2 inline-block align-text-bottom text-base text-blue-600" aria-hidden />
              COURSERA GraphQL Basics Training
            </h5>
            <h6 className="text-sm text-gray-500">
              <CalendarDays className="mr-2 inline-block align-text-bottom text-base text-black" aria-hidden />
              November 11, 2025
            </h6>

            <Image
              src="/assets/CourseraGraphQL.JPG"
              alt="COURSERA GraphQL Basics Training Certificate"
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="mx-auto h-auto w-full rounded-lg border-2 border-black-900"
            />
          </div>

          <div className="mt-4 mb-4 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20 transform hover:scale-105 transition-transform duration-200">
            <a
              href="https://www.coursera.org/account/accomplishments/verify/1IX1VHFOLQKI"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-blue-600 underline font-medium"
            >
              View Actual Certificate on COURSERA Website
            </a>

            <h5 className="text-2xl font-semibold">
              <GraduationCap className="mr-2 inline-block align-text-bottom text-base text-blue-600" aria-hidden />
              COURSERA GraphQL Intermediate Training
            </h5>
            <h6 className="text-sm text-gray-500">
              <CalendarDays className="mr-2 inline-block align-text-bottom text-base text-black" aria-hidden />
              November 22, 2025
            </h6>

            <Image
              src="/assets/CourseraGraphQL2.JPG"
              alt="COURSERA GraphQL Intermediate Training Certificate"
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="mx-auto h-auto w-full rounded-lg border-2 border-black-900"
            />
          </div>

          <div className="mt-4 mb-4 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20 transform hover:scale-105 transition-transform duration-200">
            <a
              href="https://www.coursera.org/account/accomplishments/specialization/15BCB2YXKZ41"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-blue-600 underline font-medium"
            >
              View Actual Certificate on COURSERA Website
            </a>

            <h5 className="text-2xl font-semibold">
              <GraduationCap className="mr-2 inline-block align-text-bottom text-base text-blue-600" aria-hidden />
              COURSERA GraphQL ADVANCE Training
            </h5>
            <h6 className="text-sm text-gray-500">
              <CalendarDays className="mr-2 inline-block align-text-bottom text-base text-black" aria-hidden />
              January 2, 2026
            </h6>

            <Image
              src="/assets/CourseraGraphQL3.JPG"
              alt="COURSERA GraphQL ADVANCE Training Certificate"
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="mx-auto h-auto w-full rounded-lg border-2 border-black-900"
            />
          </div>
        </div>
        <div className="w-full md:w-[50%] p-4 bg-white rounded-lg shadow">
          <div className="mt-4 mb-4 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20 transform hover:scale-105 transition-transform duration-200">
            <a
              href="https://www.udemy.com/certificate/UC-30fdd047-02d7-4572-9cce-e5f976af32ab"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-blue-600 underline font-medium"
            >
              View Actual Certificate on UDEMY Website
            </a>

            <h5 className="text-2xl font-semibold">
              <GraduationCap className="mr-2 inline-block align-text-bottom text-base text-blue-600" aria-hidden />
              UDEMY Fullstack Web Development Certificate
            </h5>
            <h6 className="text-sm text-gray-500">
              <CalendarDays className="mr-2 inline-block align-text-bottom text-base text-black" aria-hidden />
              November 25, 2025
            </h6>

            <Image
              src="/assets/UDEMYFULLSTACKCOURSE.JPG"
              alt="UDEMY Fullstack Web Development Certificate"
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="mx-auto h-auto w-full rounded-lg border-2 border-black-900"
            />
          </div>

          <div className="mt-4 mb-4 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20 transform hover:scale-105 transition-transform duration-200">
            <a
              href="https://www.udemy.com/certificate/UC-468818b5-6c81-4953-9e59-57a8fb359296/"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-blue-600 underline font-medium"
            >
              View Actual Certificate on UDEMY Website
            </a>

            <h5 className="text-2xl font-semibold">
              <GraduationCap className="mr-2 inline-block align-text-bottom text-base text-blue-600" aria-hidden />
              UDEMY CRM Go High Level Training (GHL) Certificate
            </h5>
            <h6 className="text-sm text-gray-500">
              <CalendarDays className="mr-2 inline-block align-text-bottom text-base text-black" aria-hidden />
              January 9, 2026
            </h6>

            <Image
              src="/assets/GoHighLevel.JPG"
              alt="UDEMY CRM Go High Level Training (GHL) Certificate"
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="mx-auto h-auto w-full rounded-lg border-2 border-black-900"
            />
          </div>

          <div className="mt-4 mb-4 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20 transform hover:scale-105 transition-transform duration-200">
            <a
              href="https://www.udemy.com/certificate/UC-9c70be1b-7445-408a-82eb-a8333b5fb2fb"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-blue-600 underline font-medium"
            >
              View Actual Certificate on UDEMY Website
            </a>

            <h5 className="text-2xl font-semibold">
              <GraduationCap className="mr-2 inline-block align-text-bottom text-base text-blue-600" aria-hidden />
              UDEMY MS SQL Fail Over Cluster Certificate
            </h5>
            <h6 className="text-sm text-gray-500">
              <CalendarDays className="mr-2 inline-block align-text-bottom text-base text-black" aria-hidden />
              November 25, 2025
            </h6>

            <Image
              src="/assets/UDEMYMSSQLSERVERFOCLUSTER.JPG"
              alt="UDEMY MS SQL Fail Over Cluster Certificate"
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="mx-auto h-auto w-full rounded-lg border-2 border-black-900"
            />
          </div>

          <div className="mt-4 mb-4 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20 transform hover:scale-105 transition-transform duration-200">
            <a
              href="https://www.coursera.org/account/accomplishments/verify/J0J76S0EUWE7"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-blue-600 underline font-medium"
            >
              View Actual Certificate on COURSERA Website
            </a>

            <h5 className="text-2xl font-semibold">
              <GraduationCap className="mr-2 inline-block align-text-bottom text-base text-blue-600" aria-hidden />
              COURSERA React Basics Certificate
            </h5>
            <h6 className="text-sm text-gray-500">
              <CalendarDays className="mr-2 inline-block align-text-bottom text-base text-black" aria-hidden />
              November 11, 2025
            </h6>

            <Image
              src="/assets/CourseraReactBasics.JPG"
              alt="COURSERA React Basics Certificate"
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="mx-auto h-auto w-full rounded-lg border-2 border-black-900"
            />
          </div>

          <div className="mt-4 mb-4 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20 transform hover:scale-105 transition-transform duration-200">
            <a
              href="https://www.coursera.org/account/accomplishments/verify/086C3YS43LXO"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-blue-600 underline font-medium"
            >
              View Actual Certificate on COURSERA Website
            </a>

            <h5 className="text-2xl font-semibold">
              <GraduationCap className="mr-2 inline-block align-text-bottom text-base text-blue-600" aria-hidden />
              COURSERA Introduction to Next JS Certificate
            </h5>
            <h6 className="text-sm text-gray-500">
              <CalendarDays className="mr-2 inline-block align-text-bottom text-base text-black" aria-hidden />
              November 25, 2025
            </h6>

            <Image
              src="/assets/CourseraIntroductiontoNextJS.JPG"
              alt="COURSERA Introduction to Next JS Certificate"
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="mx-auto h-auto w-full rounded-lg border-2 border-black-900"
            />
          </div>
        </div>
      </div>
    </>
  )
}
