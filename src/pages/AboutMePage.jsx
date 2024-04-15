import '../App.css';

import { USER_DATA } from '../data/userData';

export default function AboutMePage() {
  return (
    <div className="container-w flex flex-row justify-content-center container-mob shadow-lg shadow-stone-600/60">
      <div className="first-section py-20 print:py-10">
        <div>
          <img src={USER_DATA.img} className="mx-auto print:w-32 print:h-32" />
          <h1 className="text-2xl print:text-xl mb-1 mt-8 print:mt-4 uppercase text-center tracking-wide">
            {USER_DATA.firstName} {USER_DATA.lastName}
          </h1>
          <div className="mb-8 text-center">
            <em>{USER_DATA.jobTitle}</em>
          </div>
          <div className="xl:mx-28 print:mx-6">
            <div>
              <h2 className="text-xl mt-14 print:mt-6 print:text-base my-4 print:my-2 uppercase underline underline-offset-4">
                contacts
              </h2>
              <div className="print:text-xs">
                <a href="mailto:milda.marcinkute@gmail.com" target="_blank">
                  {USER_DATA.contacts.email}
                </a>
                <div className="mb-center">
                  <a
                    href={USER_DATA.contacts.linkedIn}
                    className="flex flex-row gap-2 items-center hover:text-[#0077b5] ease-out"
                  >
                    LinkedIn{' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-linkedin my-4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                  </a>
                </div>
                <div className="mb-center">
                  <a
                    href={USER_DATA.contacts.gitHub}
                    className="flex flex-row gap-2 items-center hover:text-[#2dba4e] ease-out"
                  >
                    GitHub{' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-github hover:text-[#2dba4e]"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <h2 className="text-xl mt-14 print:mt-4 print:text-base uppercase underline underline-offset-4">skills</h2>
            {USER_DATA.skills.map((skill) => (
              <div className="my-4 print:my-2 print:text-xs" key={USER_DATA.skills.index}>
                <div>{skill}</div>
              </div>
            ))}
            <h2 className="text-xl mt-14 print:mt-4 print:text-base uppercase underline underline-offset-4">
              {' '}
              some Basics of
            </h2>
            {USER_DATA.basics.map((skill) => (
              <div className="my-4 print:my-2 print:text-xs" key={USER_DATA.basics.index}>
                <div>{skill}</div>
              </div>
            ))}

            <h2 className="text-xl mt-14 print:mt-4 print:text-base my-4 uppercase underline underline-offset-4">
              languages
            </h2>
            {USER_DATA.languages.map((lang) => (
              <div className="my-4 print:my-2 print:text-xs" key={USER_DATA.languages.index}>
                <div>{lang}</div>
              </div>
            ))}
            <h2 className="text-xl mt-14 print:mt-4 print:text-base uppercase underline underline-offset-4">
              interests
            </h2>
            {USER_DATA.interests.map((hobbies) => (
              <div className="my-4 print:my-2 print:text-xs" key={USER_DATA.interests.index}>
                <div>{hobbies}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="second-section py-16 px-28">
        <h2 className="text-xl print:text-base mb-center mt-16 print:mt-8 uppercase font-weight-500 underline underline-offset-4 print:mt-6">
          {USER_DATA.education.title}
        </h2>
        {USER_DATA.education.items.map((ed, index) => (
          <div key={index}>
            <div className="text-lg print:text-sm uppercase mt-10 print:mt-4 font-weight-600">{ed.title}</div>
            <div className="text-base mt-2 print:mt-1 print:text-xs">
              <em>
                {ed.company} | <span className="normal-case">{ed.year}</span>{' '}
              </em>
            </div>
            <div className="mt-6 print:mt-2 leading-7 print:text-xs/6">{ed.description}</div>
            {ed.activitiesAndSoc ? (
              <div className="mt-2 print:text-xs/6">
                <em>Activities and societies:</em> {ed.activitiesAndSoc}
              </div>
            ) : (
              ''
            )}
            {ed.diploma ? (
              <p className="flex  gap-2 items-center print:text-xs">
                You can review my diploma{' '}
                <a href="https://www.dakpr.smm.lt/aikos2-dakpr/downloadDocument?oid=b0f144e0dd2e11eeb8e5dd9efe063b4b">
                  <strong>here </strong>
                </a>{' '}
                <span className="mobile-none print:hidden">or scan QR</span>
                <img className="diploma-QR mobile-none" src={ed.diploma} />
              </p>
            ) : (
              ''
            )}
          </div>
        ))}

        <h2 className="text-xl print:text-base mt-16 print:mt-6 mb-center uppercase font-weight-500 underline underline-offset-4">
          working experience
        </h2>
        {USER_DATA.workingExperience.map((workEx) => (
          <div key={USER_DATA.workingExperience.index}>
            <div className="text-lg print:text-sm uppercase mt-10 print:mt-6 font-weight-600">{workEx.title}</div>
            <div className="text-base print:text-xs mt-2 print:mt-1">
              <em>
                {workEx.company} | <span className="normal-case">{workEx.year}</span>
              </em>
            </div>

            <div className="mt-6 leading-7 print:text-xs/6 print:mt-2">{workEx.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
