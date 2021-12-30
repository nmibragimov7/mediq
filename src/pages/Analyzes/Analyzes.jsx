import React from "react"

import AnalyzCard from "../../components/core/AnalyzCard/AnalyzCard"

// Страница анализы
const Analyzes = () => {
    return (
        <div className={"h-100 d-flex flex-column"}>
            <AnalyzCard/>
            <AnalyzCard/>
            <AnalyzCard/>
        </div>
    );
};

export default Analyzes;
