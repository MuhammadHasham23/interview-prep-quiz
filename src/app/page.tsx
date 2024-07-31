import { Question } from '@/types/Questions';
import Header from './components/Header';
import QuizContainer from './components/QuizContainer';
import { fetchQuizData } from './fetchQuizData';

export default async function Home() {
  const questions: Question[] = await fetchQuizData();
  return (
    <>
      <Header />
      <QuizContainer questions={questions} />
    </>
  );
}
