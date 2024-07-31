export async function fetchQuizData() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const response = await fetch(
    `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=10&category=Linux&difficulty=easy`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch quiz data');
  }

  return response.json();
}
