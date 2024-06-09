import React from "react";

const experiences = [
  {
    role: "Frontend Developer",
    type: "Hybrid",
    location: "Nairobi, Kenya Oct-2022 - Present",
    responsibility:
      "Developed a B2B dashboard for all of our on-boarding partners according to the type of products they commit in. This offers the ability to compare past performance and tracking which in turn helps in achieving the company’s objective which is to enhance the member experience , improve member retention that increases the companys ROI by at least 30%. In addition to that, we are currently developing an internal dashboard that gives the companys users, especially the customer success team, an overview of product performance and GTV by partner. The dashboard also helps the IT support team investigate issues and reconcile failed payment transactions without contacting engineers from time to time. This increases productivity and communication between our internal team and partners.",
  },

  {
    role: "Software Developer Intern",
    type: "Full-time",
    location: "Nairobi, Kenya Feb 2022 - May 2022",
    responsibility:
      "Designing and developing a purchase management system for a freight management company increasing the rate of approvals, speeding up procurement and boosting employee productivity and efficiency by 50% across the organization",
  },
];

const Experience = () => {
    const styles = {
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))"
    }

  return (
    <>
      <section className="px-5 py-12 md:px-16 lg:py-[96px] lg:px-[124px]" id="experience">
        <h2 className="text-2xl md:text-3xl text-center font-bold">My Experience</h2>

        {experiences &&
          experiences.map((experience, idx) => (
            <div key={idx} className="opacity-100">
            <div className="py-4 px-4 bg-[#111927] rounded-2xl mt-8 bg-opacity-100" style={styles}>
              <h3 className="text-[#edf2f7] font-bold text-base">
                {experience.role}
                <span className="text-[#a0aec0] text-xs font-medium ml-5">
                  {experience.type}
                </span>
              </h3>
              <h3 className="text-sm text-[#edf2f7] font-normal mt-3">
                {experience.location}
              </h3>
              <div className="mt-6 rounded-2xl border-solid border-[0.5px] border-[#edf2f7] p-6 bg-[#0e1320]">
                <p className="text-center text-sm font-medium text-[#edf2f7] leading-9">
                  {experience.responsibility}
                </p>
              </div>
            </div>
            </div>
          ))}
      </section>
    </>
  );
};

export default Experience;
