import { useEffect, useState } from "react";
import "../App.css";
import LogoCollage from "./LogoCollage";

const num = Math.ceil(Math.random() * 1643);

const Quote = () => {
    const [ quoteText, setQuoteText ] = useState("");
    const [ quoteAuthor, setQuoteAuthor ] = useState("");
    const [ close, setClose ] = useState(false)
    
    useEffect(() => {
    const QuoteHandler = async () => {
        const response = await fetch("https://type.fit/api/quotes");
        const quote = await response.json();
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
    <LogoCollage />
    <div className={close === false ? "quoteContainer" : 
                    close === true && "quoteClose"}>
        <div className="quoteCloser" onClick={()=> setClose(true)}>
            <p>X</p>
        </div>
        <div className="quoteText">
            <p>"{quoteText[num]}"</p>
        </div>
        <div className="quoteAuthor">
            <a href={wikiLink} target="_blank" rel="noreferrer" className="quoteLink">{quoteAuthor[num]}</a>
        </div>
    </div>
    </>
    );
};

export default Quote;
