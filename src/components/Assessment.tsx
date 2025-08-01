import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BarChart3, AlertCircle } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
}

const Assessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: "How often do team members express feeling overwhelmed by their workload?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"]
    },
    {
      id: 2,
      question: "How frequently do employees miss deadlines or deliver work below their usual quality?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"]
    },
    {
      id: 3,
      question: "How often do you notice decreased engagement or motivation in team meetings?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"]
    },
    {
      id: 4,
      question: "How frequently do team members request time off or call in sick?",
      options: ["Much less than normal", "Less than normal", "Normal", "More than normal", "Much more than normal"]
    },
    {
      id: 5,
      question: "How often do you observe interpersonal conflicts or tension within your team?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"]
    }
  ];

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    const totalScore = answers.reduce((sum, answer) => sum + answer, 0);
    const maxScore = questions.length * 4; // 4 is the highest score per question
    return Math.round((totalScore / maxScore) * 100);
  };

  const getScoreInterpretation = (score: number) => {
    if (score <= 20) return { level: "Low Risk", color: "text-logoGreen", bg: "bg-lightGreenAccent", border: "border-mediumGreenAccent" };
    if (score <= 40) return { level: "Moderate Risk", color: "text-mediumGreenAccent", bg: "bg-lightGreenAccent", border: "border-mediumGreenAccent" };
    if (score <= 60) return { level: "High Risk", color: "text-logoGreen", bg: "bg-lightGreenAccent", border: "border-mediumGreenAccent" };
    return { level: "Critical Risk", color: "text-darkBackground", bg: "bg-lightGreenAccent", border: "border-mediumGreenAccent" };
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  if (showResults) {
    const score = calculateScore();
    const interpretation = getScoreInterpretation(score);
    
    return (
      <section id="assessment" className="py-20 bg-gradient-to-br from-lightGreenAccent via-lightGreenAccent to-logoGreen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-whiteAccent rounded-3xl p-8 shadow-2xl border border-lightGreenAccent">
            <div className="text-center mb-8">
              <BarChart3 className="w-16 h-16 text-logoGreen mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-darkBackground mb-2 font-montserrat uppercase">
                Your Regenerative Leadership Quotient
              </h2>
              <p className="text-darkBackground font-playfair">
                Understanding the psychosocial factors that drive organizational traction
              </p>
            </div>

            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-r from-lightGreenAccent to-mediumGreenAccent mb-4">
                <span className="text-4xl font-bold text-darkBackground font-montserrat">{score}%</span>
              </div>
              <div className={`inline-block px-6 py-3 rounded-full ${interpretation.bg} ${interpretation.border} border`}>
                <span className={`font-semibold ${interpretation.color} font-montserrat uppercase`}>
                  {interpretation.level}
                </span>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <div className="bg-lightGreenAccent rounded-xl p-6">
                <h3 className="text-xl font-semibold text-darkBackground mb-3 font-montserrat uppercase">What This Means:</h3>
                <div className="space-y-2 text-darkBackground font-playfair">
                  {score <= 20 && (
                    <div>
                      <p className="mb-2">Your organization shows strong regenerative leadership practices with minimal burnout indicators.</p>
                      <p>Continue fostering a supportive environment and monitor for changes as you scale.</p>
                    </div>
                  )}
                  {score > 20 && score <= 40 && (
                    <div>
                      <p className="mb-2">Some early warning signs of burnout are present in your organization.</p>
                      <p>Consider implementing proactive wellness initiatives and regular check-ins with team members.</p>
                    </div>
                  )}
                  {score > 40 && score <= 60 && (
                    <div>
                      <p className="mb-2">Your organization shows concerning levels of burnout indicators.</p>
                      <p>Immediate attention to workload management, team dynamics, and support systems is recommended.</p>
                    </div>
                  )}
                  {score > 60 && (
                    <div>
                      <p className="mb-2">Critical burnout risk detected. Your team may be experiencing significant stress and disengagement.</p>
                      <p>Urgent intervention is needed to prevent talent loss and maintain organizational effectiveness.</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-lightGreenAccent rounded-xl p-6 border border-mediumGreenAccent">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-logoGreen flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-darkBackground mb-2 font-montserrat uppercase">How RLIQ Can Help:</h4>
                    <p className="text-darkBackground font-playfair">
                      RLIQ's AI-powered platform helps you identify these patterns before they become critical, 
                      providing real-time insights and actionable steps to build a more regenerative, thriving organization.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={resetAssessment}
                className="px-6 py-3 border-2 border-mediumGreenAccent text-logoGreen rounded-full hover:bg-lightGreenAccent transition-colors font-montserrat uppercase"
              >
                Retake Assessment
              </button>
              <button className="px-8 py-3 bg-mediumGreenAccent text-darkBackground rounded-full hover:bg-logoGreen transition-colors font-montserrat uppercase">
                Get Your Personalized RLIQ Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="assessment" className="py-20 bg-gradient-to-br from-lightGreenAccent via-lightGreenAccent to-logoGreen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-darkBackground mb-6 font-montserrat uppercase">
            Regenerative Leadership Assessment
          </h2>
          <p className="text-xl text-darkBackground max-w-3xl mx-auto mb-8 font-playfair">
            Take this comprehensive assessment that goes beyond traditional methods, diving into the psychosocial factors 
            that determine whether your organization experiences turbulence or traction.
          </p>
          
          {/* Progress bar */}
          <div className="bg-whiteAccent rounded-full p-1 max-w-md mx-auto mb-8">
            <div className="bg-mediumGreenAccent h-2 rounded-full transition-all duration-300" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}></div>
          </div>
          <p className="text-sm text-darkBackground font-montserrat uppercase">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        <div className="bg-whiteAccent rounded-3xl p-8 shadow-2xl border border-lightGreenAccent">
          <h3 className="text-2xl font-semibold text-darkBackground mb-8 text-center font-playfair">
            {questions[currentQuestion].question}
          </h3>

          <div className="space-y-4 mb-8">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full p-4 text-left border-2 rounded-xl transition-all duration-300 ${
                  answers[currentQuestion] === index
                    ? 'border-mediumGreenAccent bg-lightGreenAccent text-logoGreen'
                    : 'border-lightGreenAccent bg-whiteAccent hover:border-mediumGreenAccent hover:bg-lightGreenAccent'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    answers[currentQuestion] === index
                      ? 'border-mediumGreenAccent bg-mediumGreenAccent'
                      : 'border-lightGreenAccent'
                  }`}>
                    {answers[currentQuestion] === index && (
                      <div className="w-2 h-2 bg-whiteAccent rounded-full mx-auto mt-0.5"></div>
                    )}
                  </div>
                  <span className="font-medium font-playfair">{option}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-colors font-montserrat uppercase text-darkBackground ${
                currentQuestion === 0
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-lightGreenAccent'
              }`}
            >
              <ChevronLeft size={20} />
              Previous
            </button>

            <button
              onClick={nextQuestion}
              disabled={answers[currentQuestion] === undefined}
              className={`flex items-center gap-2 px-8 py-3 rounded-full transition-colors font-montserrat uppercase ${
                answers[currentQuestion] === undefined
                  ? 'bg-lightGreenAccent text-darkBackground opacity-50 cursor-not-allowed'
                  : 'bg-mediumGreenAccent text-darkBackground hover:bg-logoGreen'
              }`}
            >
              {currentQuestion === questions.length - 1 ? 'See Results' : 'Next'}
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assessment;