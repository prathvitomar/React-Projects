export default function Dropdown({options, handleOption, selectedCategory}){
    console.log(options);
    
    return (
        <>
            <div>
                <option value={selectedCategory} onChange={(e) => handleOption(e)}>
                    {
                        options.map((option, index)=>(
                            <select key={index} value={option}>{option}</select>
                        ))
                    }
                </option>
            </div>
        </>
    )
}