"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)

  const testimonials = [
    {
      quote:
        "We have engaged 'Mindfultalk' to improve the communication skills of our technical team. They have done a fabulous job in 6 weeks. I could see the tangible difference as an outcome and it is really value for money. Wonderful team with lot of patience, professionalism and perseverance. I highly recommend the Mindfultalk team to my connections and contacts. Communication being the key element for any business they do a great job.",
      author: "Mahendran Kathiresan",
      title: "Co-Founder & Chief Evangelist, Innomonk Technologies Pvt Ltd",
    },
    {
      quote:
        "...what you have done is - more than the communication, you have given them [cohort members] lots of confidence to speak. I am very happy with the progress we are seeing in all of them. This coaching in communication will have a bigger impact as it will help them grow in their career.",
      author: "Shiva Jayagopal",
      title: "CEO, Winvinaya Infosystems",
      },
    {
      quote:
        "When this training started, I thought I wouldn't be able to achieve the goals. I was not confident to speak in front of a group. But I am able to do that now. I have started to chat with my colleagues in English and write emails without any help. I wrote 1-2 emails to the customer last week. This is the first time I am doing this. Also, I filled this questionnaire, all by myself - this is the biggest transformation from this program.",
      author: "Mithun",
      title: "UI/UX Design Professional",
    },
    {
      quote:
        "This coaching has been very useful to me. It has taught me communication skills for various workplace scenarios - sharing my thoughts in meetings and discussions, writing emails for work purposes, and presenting my work-related status. It has also given me a feel of working in a team and to properly coordinating with the team. Overall this course has helped me gain knowledge of professional communication in a corporate environment.",
      author: "Prantik Chakraborty",
      title: "IT Professional",
    },
    {
      quote:
        "In the workshop I learned how to sequence my speech or presentation; the real time scenarios used during the training were very useful at work.",
      author: "Lavanya P",
      title: "Software Test Engineer",
    },
    {
      quote:
        "Our team has greatly improved in their interaction with clients, which has helped us to cross-sell and up-sell. They have even done follow-up sessions with the team and resolved their queries which shows their commitment towards the [training].",
      author: "Shrikanth Shetty",
      title: "Founder, CEO, R&S Inc",
    },
    {
      quote:
        "Mindfultalk has conducted soft-skills training on sales processes and effective communication. Our team's communication skills and sales process have improved. After this training, we were able to increase our sales and turnover by 100%.",
      author: "T M Nagaraj",
      title: "CEO, Unisol Communications Pvt Ltd",
    },
    {
      quote:
        "The entire crew from Mindfultalk were instrumental in our product documentation redesign. At Amagi, our products are very technical, and we were not sure if someone from the outside could actually help us. We needed this team to understand the use cases, and the technology, and translate that to help documentation. They surpassed our expectations!",
      author: "Shankar Sripadham",
      title: "Director of Products, Amagi",
    },
    {
      quote:
        "The Mindfultalk team have crafted the user manual for BPS with excellent precision and great clarity. They have been quick to grasp the complexities of the domain and the product and was able to deliver high-quality documents that are simple to understand. We now have started to use it to train new inductees into the team. The queries to L1 support have come down very drastically. Thank you, Mindfultalk, for the great work!",
      author: "Suyog Joshi",
      title: "Co-founder & Chief Product Officer, Neewee Analytics",
    },
    {
      quote:
        "I would like to thank Mindfultalk team for their exceptional and professional advice specifically on shaping our thoughts for our digital presence and drawing up content strategy. The team had our best interests in mind and created truly engaging content from the complex draft that we shared with them. The team has been a great part of our success. I would recommend them to anyone who requires content writing services.",
      author: "Ramanan Ramakrishnan",
      title: "Founder & CEO, Innoventes Technologies",
    },
    {
      quote:
        "..express my deepest appreciation and commendation for the outstanding content drafting skills... Their ability to understand our business along with the added legal complexity, and still deliver a high-quality written material tailored to our specific needs has been nothing short of remarkable. Furthermore, their professionalism and ability to meet tight deadlines without compromising on quality have been truly commendable.",
      author: "Vinod Nair",
      title: "Director, Indelec SA India Private Ltd",
    },
    {
      quote:
        "..Not only did Mindultalk team deliver exceptional service in extracting the purpose of a brand to exist, but they also helped discover the WHY aspect needed for any business - the storytelling aspect, which the sales team immediately understood. I knew TROY was in the hands of someone who genuinely cared about the outcome.",
      author: "Farah Ahmed",
      title: "Founder, TROY BLOCKS",
    },
    {
      quote:
        "Our engineering team experienced a lot of issues due to a lack of clear communication both within the team and with customers. Mindfultalk team conducted a 10-day Professional Communication Workshop during which they helped the team structure their thoughts and craft messages according to their audience. Our team is now able to participate better in team meetings, provide meaningful status updates, and conduct fruitful meetings. We thank Mindfultalk for their very effective workshop which helped our team members improve in both their spoken and written communication.",
      author: "Umasuthan Ramakrishnan",
      title: "Head of Technology, Innoventes Technologies",
    },
  ]

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

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="text-primary">Clients</span> Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how we've helped businesses transform their communication and achieve remarkable results.
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-on-scroll">
          <div className="relative">
            {/* Desktop Navigation Arrows */}
            <div className="hidden lg:block">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 z-10 bg-background hover:bg-primary hover:text-white border-primary/20"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 z-10 bg-background hover:bg-primary hover:text-white border-primary/20"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            {/* Testimonial Card */}
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 shadow-lg">
              <CardContent className="p-8 lg:p-12">
                <div className="text-center">
                  <div className="bg-primary/10 p-3 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Quote className="h-8 w-8 text-primary" />
                  </div>

                  <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-8 italic">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>

                  <div className="space-y-2">
                    <div className="text-xl font-bold text-primary">{testimonials[currentIndex].author}</div>
                    <div className="text-muted-foreground">{testimonials[currentIndex].title}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mobile Navigation */}
            <div className="lg:hidden flex justify-center space-x-4 mt-6">
              <Button
                variant="outline"
                size="sm"
                onClick={goToPrevious}
                className="bg-background hover:bg-primary hover:text-white border-primary/20"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={goToNext}
                className="bg-background hover:bg-primary hover:text-white border-primary/20"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentIndex ? "bg-primary scale-125" : "bg-primary/30 hover:bg-primary/50"
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 max-w-xs mx-auto">
            <div className="bg-primary/20 rounded-full h-1">
              <div
                className="bg-primary h-1 rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
