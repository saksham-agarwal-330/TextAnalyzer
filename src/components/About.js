import React from 'react'

export default function About(props) {
    let myStyle = {
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode ==='dark'?'#1b1b26':'white'
    }

    return (
        <div className='container' style={myStyle}>
    <h1 className='my-3'>About Us</h1>
    <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    What is TextAnalyzer?
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>TextAnalyzer</strong> is an intelligent text analysis tool designed to help you improve the quality of your writing. Whether you're working on an essay, blog post, or email, TextAnalyzer provides real-time insights to help you refine your content. With our user-friendly interface, you can easily enhance your writing by getting feedback on readability, grammar, structure, and more.
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Key Features of TextAnalyzer
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                <ul>
                    <li><strong>Uppercase Text:</strong> Easily transform all the text in your input to uppercase. Perfect for emphasizing content.</li>
                    <li><strong>Lowercase Text:</strong> Convert text to lowercase, ideal for email addresses or code formatting.</li>
                    <li><strong>Copy Text:</strong> With one click, copy the entire text to your clipboard for easy pasting elsewhere.</li>
                    <li><strong>Remove Extra Spaces:</strong> Automatically remove unwanted spaces from your text, making it cleaner and more concise.</li>
                    <li><strong>Text-to-Speech:</strong> Convert your text to speech. You can start or stop speaking the text with a button click, making it easier to proofread or use for accessibility.</li>
                </ul>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Why Use TextAnalyzer?
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>TextAnalyzer</strong> is perfect for anyone looking to improve their writing. Whether you're a blogger, student, or professional, this tool ensures your text is clear, concise, and error-free. Here’s why you should use it:
                    <ul>
                        <li><strong>Bloggers:</strong> Enhance your blog posts for better readability and engagement.</li>
                        <li><strong>Students:</strong> Improve your essays, assignments, and research papers for academic success.</li>
                        <li><strong>Professional Writers:</strong> Refine your content before publishing to maintain a high standard.</li>
                        <li><strong>Social Media Content Creators:</strong> Optimize your posts for readability and clarity, making them more shareable.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

    )
}
