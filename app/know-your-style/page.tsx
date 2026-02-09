import { StyleQuiz } from '@/components/know-your-style/StyleQuiz'
import { TallyBox } from '@/components/know-your-style/TallyBox'

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      {/* <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Know Your Style Assessment
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover your communication style based on DISC personality theory.
          Answer 24 questions to see your primary and secondary styles.
        </p>
      </div> */}
      
      <StyleQuiz />
      
      
      {/* <div className="mt-12 pt-8 border-t text-center text-sm text-gray-500">
        <p>This is a psychometric-style assessment tool. Results are based on your self-perception.</p>
        <p className="mt-1">© Know Your Style Assessment Tool</p>
      </div> */}
    </main>
  )
}