import { useEffect, useState } from "react";
import "../App.css";

const num = Math.ceil(Math.random() * 1643);

const Quote = () => {
    const [ data, setData ] = useState([]);
    const [ quoteText, setQuoteText ] = useState("");
    const [ quoteAuthor, setQuoteAuthor ] = useState("");
    
    useEffect(() => {
    const QuoteHandler = async () => {
        const response = await fetch("https://type.fit/api/quotes");
        const quote = await response.json();
        setData(quote);
        const dataMapText = quote.map((data) =>{
            return `${data.text}`;
        });
        setQuoteText(dataMapText);
        const dataMapAuthor = quote.map((data) =>{
            return `${data.author}`;
        });
        setQuoteAuthor(dataMapAuthor);
    }
        QuoteHandler()
        .catch(console.error);
    }, []);

    const wikiLink = `https://en.wikipedia.org/wiki/${quoteAuthor[num]}`;
    return (
    <>
    <div className="quoteContainer">
        <div className="quoteText">
            <p>"{quoteText[num]}"</p>
        </div>
        <div className="quoteAuthor">
            <a href={wikiLink} target="_blank" className="quoteLink">{quoteAuthor[num]}</a>
            {/* <p>{quoteAuthor[num]}</p> */}
        </div>
    </div>
    </>
    );
};

export default Quote;
