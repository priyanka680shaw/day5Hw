
function Paragraph(props){
    
    return(
        <>
        <div className="paraContainer" 
            style={{
                width: "80%",
                margin: "auto",
                border: "10px solid black",
                padding: "20px",
                boxShadow: "2px 2px 8px 12px rgb(171, 21, 21)",
                fontSize: "20px",
                color: "#404140",
                marginBottom: "50px",
                
            }}
        >
            <p>{props.para}</p>
        </div>
    </>
    );
}
export default Paragraph;