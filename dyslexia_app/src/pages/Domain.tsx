import React from "react";
import FadeInOnScroll from "../components/FadeInOnScroll";

const Domain = () => {
    return (
        <div className="p-8 max-w-4xl mx-auto space-y-8 h-screen">
            <FadeInOnScroll>
                <h1 className="text-3xl font-semibold mb-4 text-blue-600">Domain & Research Details</h1>
            </FadeInOnScroll>

            <FadeInOnScroll>
                <section>
                    <h2 className="text-2xl font-semibold mb-2">Literature Survey</h2>
                    <p className="text-justify">Dyslexia affect around 15-20% of the worldwide population, causing difficulties with phonemic awareness, word decoding,
                        short-term memory recall, and reading comprehension. Conventional procedures need specialized supervision, which
                        restricts accessibility...</p>
                </section>
            </FadeInOnScroll>

            <FadeInOnScroll>
                <section>
                    <h2 className="text-2xl font-semibold mb-2">Research Problem</h2>
                    <p className="text-justify">Dyslexia is a specific learning disability characterized by difficulties with reading, spelling, and
                        writing despite normal intelligence.  These difficulties stem from underlying challenges in processing language, particularly the 
                        connection between sounds and letters (phonemic awareness). Children with dyslexia often face frustration and struggle in school, impacting their academic performance and self-esteem.
                        Early intervention is crucial for children with dyslexia. Traditional interventions involve specialized
                        instruction and educational therapy to develop reading skills and address underlying processing
                        difficulties.  However, these interventions can be resource-intensive and require trained
                        professionals. Technology offers a promising avenue to support children with dyslexia by providing accessible,
                        engaging, and personalized learning tools. Mobile applications specifically designed for dyslexia
                        can offer several advantages. Our project fills this gap...</p>
                </section>
            </FadeInOnScroll>

            <FadeInOnScroll>
                <section>
                    <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
                    <ul className="list-disc list-inside">
                        <li>TensorFlow and Keras for training models</li>
                        <li>Machine Learning (CNN, LSTM, GAN)</li>
                        <li>Natural Language Processing (NLP)</li>
                        <li>Flutter Mobile App</li>
                    </ul>
                </section>
            </FadeInOnScroll>
        </div>
    );
};

export default Domain;
