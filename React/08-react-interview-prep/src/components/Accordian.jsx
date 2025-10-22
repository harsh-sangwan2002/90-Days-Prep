import { useState, memo } from "react";

const Accordion = () => {
    const [items] = useState([
        { id: 1, title: "First Item", content: "This is the content of the first item." },
        { id: 2, title: "Second Item", content: "This is the content of the second item." },
        { id: 3, title: "Third Item", content: "This is the content of the third item." },
        { id: 4, title: "Fourth Item", content: "This is the content of the fourth item." },
    ]);

    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="accordion">
            {items.map((item, idx) => (
                <AccordionItem
                    key={item.id}
                    item={item}
                    idx={idx}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                />
            ))}
        </section>
    );
};

const AccordionItem = memo(({ item, idx, activeIndex, setActiveIndex }) => {
    const isOpen = activeIndex === idx;
    return (
        <div className="box">
            <div className="left-section">
                <h2>{item.title}</h2>
                {isOpen && <p>{item.content}</p>}
            </div>
            <div className="right-section">
                <span onClick={() => setActiveIndex(isOpen ? null : idx)}>
                    {isOpen ? "-" : "+"}
                </span>
            </div>
        </div>
    );
});

export default Accordion;
