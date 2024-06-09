import React from 'react'

const softSkills = [
    {
        skill: "Problem Solving"
    },
    {
        skill: "Communication"
    },
    {
        skill: "Design thinking"
    },
    {
        skill: "Attention to detail"
    },
    {
        skill: "Accountability"
    },
    {
        skill: "Creativeness"
    },
    {
        skill: "Team work"
    }
]


const coreSkills = [
    {
        skill: "HTML"
    },
    {
        skill: "CSS"
    },
    {
        skill: "JavaScript"
    },
    {
        skill: "Next js"
    },
    {
        skill: "Redux Toolkit"
    },
    {
        skill: "Accessibility"
    },
    {
        skill: "Git"
    },
    {
        skill: "TypeScript"
    },
    {
        skill: "Apollo Client"
    },
    {
        skill: "Graphql"
    },
    {
        skill: "React Query"
    },
]
export default function Skills () {
    return (
        <section className="px-5 py-12 md:px-16 lg:py-[96px] lg:px-[124px]" id="skills">
            <h2 className="text-2xl md:text-3xl text-center font-bold">My Skills</h2>
            <div className="w-full md:w-[80%] mx-auto">
                <h3 className="mt-10 text-base md:text-lg text-center font-semibold">Some of the soft skills I've acquired along the way:</h3>
                <div className="flex flex-wrap gap-6 justify-center mt-8">
                    {
                        softSkills && softSkills.map((softSkill, index) => (
                            <div className="border-2 border-white rounded-lg py-3 px-4 bg-white bg-opacity-50 cursor-pointer" key={index}>
                                <p className="">{softSkill.skill}</p>
                            </div>
                        ))
                    }
                </div>
                <h3 className="mt-12 text-lg text-center font-semibold">Technologies that I'm confidently conversant in but not limited to:</h3>
                <div className="flex flex-wrap gap-6 justify-center mt-8">
                    {
                        coreSkills && coreSkills.map((coreSkill, index) => (
                            <div className="border-2 border-white rounded-lg py-3 px-4 bg-white bg-opacity-50 cursor-pointer" key={index}>
                                <p className="">{coreSkill.skill}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

