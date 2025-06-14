"use client"

import { useEffect, useRef } from "react"

export function LayoutSection() {
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const animateElements = entry.target.querySelectorAll(".animate-on-scroll")
                        animateElements.forEach((el, index) => {
                            setTimeout(() => {
                                el.classList.add("animate")
                            }, index * 200)
                        })
                    }
                })
            },
            { threshold: 0.1 },
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const challenges = [
        {
            title: "Low Productivity",
            description: "Teams waste hours clarifying misunderstood instructions",
            image: "/low-productivity.png",
            side: "left"
        },
        {
            title: "Talent Wastage",
            description: "Great ideas go unheard when people can't articulate them",
            image: "/talent-wastage.png",
            side: "right"
        },
        {
            title: "High Attrition",
            description: "Miscommunication leads to frustration and turnover",
            image: "/high-attrition.png",
            side: "left"
        },
        {
            title: "Team Dissatisfaction",
            description: "Unclear expectations create stress and conflict",
            image: "/team-dissatisfaction.png",
            side: "right"
        },
    ]

    return (
        <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-secondary/5">
            <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .animate-on-scroll.animate {
          opacity: 1;
          transform: translateY(0);
        }
        
        .image-container {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.6s ease;
        }
        
        .image-container:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
        }
        
        .image-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, transparent 0%, rgba(0, 0, 0, 0.1) 100%);
          z-index: 1;
          transition: all 0.4s ease;
        }
        
        .image-container:hover::before {
          background: linear-gradient(135deg, transparent 0%, rgba(0, 0, 0, 0.05) 100%);
        }
        
        .challenge-content {
          position: relative;
          z-index: 2;
          transition: all 0.6s ease;
        }
        
        .challenge-item:hover .challenge-content {
          transform: translateX(10px);
        }
        
        .challenge-item.right:hover .challenge-content {
          transform: translateX(-10px);
        }
        
        .floating-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        .floating-animation:nth-child(odd) {
          animation-delay: -3s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .gradient-text {
          background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .pulse-animation {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        .stagger-animation {
          animation: stagger 0.8s ease-out forwards;
        }
        
        @keyframes stagger {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>

            <div className="container mx-auto">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 animate-on-scroll">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            The Hidden Cost of <span className="text-primary">Poor Communication</span>?
                        </h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full pulse-animation"></div>
                    </div>

                    <div className="space-y-24">
                        {challenges.map((challenge, index) => (
                            <div
                                key={index}
                                className={`challenge-item ${challenge.side} animate-on-scroll floating-animation`}
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className={`flex flex-col lg:flex-row items-center gap-12 ${challenge.side === 'right' ? 'lg:flex-row-reverse' : ''
                                    }`}>
                                    {/* Image Section */}
                                    <div className="flex-1 w-full lg:w-1/2">
                                        <div className="image-container">
                                            <img
                                                src={challenge.image}
                                                alt={challenge.title}
                                                className="w-full h-80 lg:h-96 object-cover"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0"></div>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="flex-1 w-full lg:w-1/2 challenge-content">
                                        <div className={`${challenge.side === 'right' ? 'lg:text-right lg:pl-8' : 'lg:text-left lg:pr-8'}`}>
                                            <div className="mb-6">
                                                <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                                                    {challenge.title}
                                                </h3>
                                                <div className={`w-16 h-1 rounded-full bg-gradient-to-r from-primary to-secondary ${challenge.side === 'right' ? 'lg:ml-auto' : ''
                                                    }`}></div>
                                            </div>

                                            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
                                                {challenge.description}
                                            </p>

                                            <div className={`flex items-center gap-4 ${challenge.side === 'right' ? 'lg:justify-end' : 'lg:justify-start'
                                                }`}>
                                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
                                                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary"></div>
                                                </div>
                                                <div className="text-sm font-medium text-muted-foreground">
                                                    Critical Impact Area
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-24 animate-on-scroll">
                        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-12 border border-primary/20">
                            <p className="text-2xl lg:text-3xl text-foreground font-semibold mb-4">
                                Poor communication is silently costing your business more than you think.
                            </p>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}