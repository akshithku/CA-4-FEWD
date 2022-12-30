import React,{useState,useContext} from 'react'
import questions from '../questions';
// import Result from './Result';
import "./quiz.css"
import{ToggleTheme} from "../App"
export default function QuestionBox() {

	const theme=useContext(ToggleTheme)

	const themeStyle={
		backgroundColor: theme?"gray":"white",
		text: theme?"Light":"Drak",
        //  color:theme?"grey":"black",
	}

	const [change,setchange]=useState(true)
	const handlechange=()=>{
	  setchange(!change)
	}

	const[color,Setcolor]=useState(true)
	const handlecolor=()=>{
		Setcolor(!color)
	}
  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrects) => {
		if (isCorrects) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='container' style={themeStyle}>
		<div className='app' >
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
          {/* <Result/> */}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question: {currentQuestion + 1}</span> out of {questions.length}
						</div>
						<div  style={{color:change? "red":"blue"}} className='question-text'>{questions[currentQuestion].text}</div>
					</div>
					<div className='answer-section'>
            <div className='btn'>
						{questions[currentQuestion].options.map((options) => {
              return (
                <button className='button' onClick={() => handleAnswerOptionClick(options.isCorrect)}>{options.text}</button>
              );
            })}
            </div>
					</div>
					<div className='main'>
						<button className='btn-1' onClick={handlechange}>Highlight</button>
						<button className='btn-2' onClick={handlecolor}>UnHighLight</button>
					</div>
				</>
			)}
		</div>
		</div>
	);
}
