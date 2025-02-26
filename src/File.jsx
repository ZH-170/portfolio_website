import React from 'react';
import './File.css';


export default function File() {

    const openAPIO = () => {
        const pdfUrl = 'https://drive.google.com/file/d/141k8BWmk2lc8J9QVfzGvWmNzVJKfRTZ5/view?usp=sharing'; // Local file in public folder
        // https://drive.google.com/file/d/1KpzTb-DI3Pu2_cpav7AtFLU_00SWBiQf/view?usp=sharing
        window.open(pdfUrl, '_blank');
    };

    return (
        <>
            <div className="files">
                <div className="files-block">
                    UPSR && Junior Uec
                </div>
                <div className="files-block">
                    UEC
                </div>
                <div className="files-block">
                    UCE
                </div>
                <div className="files-block" onClick={openAPIO}>
                    APIO
                </div>
                <div className="files-block">
                    MCO
                </div>
                <div className="files-block">
                    BIMO
                </div>

            </div>
        </>
    )
}