const questions = [
    {
        id: '1',
        question: 'How do you show questions and answers in a React component?',
        answer: 'Use a loop to show each question with its answer.'
    },
    {
        id: '2',
        question: 'How can you arrange components for showing a list of questions and answers efficiently?',
        answer: 'Have one main component showing all questions, and each question and answer is its own component.'
    },
    {
        id: '3',
        question: 'How do you make a question\'s answer appear when someone clicks on it?',
        answer: 'You use a special React tool called state to show or hide the answer when someone clicks.'
    },
    {
        id: '4',
        question: 'What do you do to only show an answer when its question is clicked?',
        answer: 'You check if the question is clicked, and if it is, you show its answer; otherwise, you keep it hidden.'
    },
    {
        id: '5',
        question: 'How can you style React components, and which method is the easiest?',
        answer: 'You can use regular CSS, or you can use special CSS tools made for React, like styled-components, which make it easier to style components.'
    }
];

export default questions;
