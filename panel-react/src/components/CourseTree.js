import React, { useEffect, useState } from "react";

export const CourseTree = () => {
    const [projectTitle, setProjectTitle] = useState('New Project');

    const saveTitle = (event) => {
        setProjectTitle(event.target.value);
        // Save title to cookie
    };

    useEffect(() => {
        return;
        // Fetch Cookie saved project state in tree
    }, []);

    return (
        <div className="flex flex-col space-y-4 w-full h-full">
            <input type="text"
                   className="outline-none"
                   value={projectTitle}
                   onChange={(e) => setProjectTitle(e.target.value)}
                   onBlur={saveTitle} />
        </div>
    );
}