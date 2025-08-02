"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { subtle } from "crypto"

export function OurPrograms() {
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const elements = entry.target.querySelectorAll(".animate-on-scroll")
                        elements.forEach((el, idx) => setTimeout(() => el.classList.add("animate"), idx * 200))
                    }
                })
            },
            { threshold: 0.1 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    const programs = [
        {
            title: "Business Communication",
            subtitle: "Master essential communication skills",
            topics: ["Speaking with confidence", "Effective email writing"],
            image: "/our-programs/business-communication.png",
            color: "primary",
        },
        {
            title: "Skills for Managers",
            subtitle: "Develop leadership excellence",
            topics: ["Managing teams"],
            image: "/our-programs/skills-for-managers.png",
            color: "secondary",
        },
        {
            title: "Time Management",
            subtitle: "Optimize your productivity",
            topics: ["Art of prioritizing", "Delegation skills"],
            image: "/our-programs/time-management.png",
            color: "primary",
        },
        {
            title: "Assertiveness and Decision Making",
            subtitle: "Build confidence in your choices",
            topics: ["How to say No", "Making decisions"],
            image: "/our-programs/assertiveness.png",
            color: "secondary",
        },
        {
            title: "Influencing",
            subtitle: "Master the art of persuasion",
            topics: ["Influence without power", "Power vs Interest", "Delegate for Success"],
            image: "/our-programs/influencing.png",
            color: "primary",
        },
        {
            title: "Presenting for Impact",
            subtitle: "Deliver memorable presentations",
            topics: ["Adapting to the audience", "Data-based storytelling", "Storytelling for impact"],
            image: "/our-programs/presenting-for-impact.png",
            color: "secondary",
        },
    ]

    return (
        <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                        Our <span className="text-primary">Programs</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                    {programs.map((item, idx) => {
                        const borderClass =
                            item.color === "primary"
                                ? "border-primary/20 from-primary/5"
                                : "border-secondary/20 from-secondary/5"
                        const buttonClass =
                            item.color === "primary"
                                ? "bg-primary hover:bg-primary/90"
                                : "bg-secondary hover:bg-secondary/90"

                        return (
                            <Card
                                key={idx}
                                className={`hover:shadow-lg transition-all duration-300 ${borderClass} bg-gradient-to-br to-background`}
                            >
                                <CardContent className="p-8 flex flex-col items-center text-center">
                                    <div className="w-auto h-32 mb-4 overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                    {/* <p className="text-muted-foreground mb-4">{item.subtitle}</p> */}
                                    <ul className="text-left text-muted-foreground mb-4">
                                        {item.topics.map((topic, topicIdx) => (
                                            <li key={topicIdx} className="text-muted-foreground">
                                                {topic}
                                            </li>
                                        ))}
                                    </ul>
                                    {/* <Button
                                        asChild
                                        className={`${buttonClass} text-white font-semibold px-6 py-2 rounded-full`}
                                    >
                                        <Link href={`/programs/${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
                                            Learn More
                                        </Link>
                                    </Button> */}
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}