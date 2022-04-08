import "./catogories.css"

function Category({ image, label }) {
    // --------- Inline style is not recommended -----------------//
    return (
    <div className="category">
        <img src={image} alt="" />
        <b>{label}</b>
    </div>
    )
};

export { Category };