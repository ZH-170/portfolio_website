import React from 'react';
import './File.css';


export default function File() {

    const openAPIO = () => {
        const pdfUrl = 'https://drive.google.com/file/d/141k8BWmk2lc8J9QVfzGvWmNzVJKfRTZ5/view?usp=sharing'; // Local file in public folder
        window.open(pdfUrl, '_blank');
    };

    const oepnBIMO = () => {
        const pdfUrl = 'https://drive.google.com/file/d/1KpzTb-DI3Pu2_cpav7AtFLU_00SWBiQf/view?usp=sharing';
        window.open(pdfUrl, '_blank');
    }

    const openRanking = () => {
        const pdfUrl = 'https://drive.google.com/file/d/1lToaTAwpBeMKDKQlwFNFlktNhR9b391W/view?usp=sharing';
        window.open(pdfUrl, '_blank');
    }

    const openRcmLetter = () => {
        const pdfUrl = 'https://drive.google.com/file/d/1O8VpWH9vIEQ48fxgj4v4owy4oMcz2UpR/view?usp=sharing';
        window.open(pdfUrl, '_blank');
    }

    const openJuniorRecord = () => {
        const pdfUrl = 'https://drive.google.com/file/d/1CmBEbPBH07P4nOKezSAlm4KaNTlLEZ-h/view?usp=sharing';
        window.open(pdfUrl, '_blank');
    }

    const openSeniorRecord = () => {
        const pdfUrl = 'https://drive.google.com/file/d/1kEy_InVSGGBZP7YDdBo2umun5Q_WcDiF/view?usp=sharing';
        window.open(pdfUrl, '_blank');
    }

    const openUPSR = () => {
        const pdfUrl = 'https://drive.google.com/file/d/1p9QXmqcqDDQtMVtTy74i_StS-tq9weP7/view?usp=sharing';
        window.open(pdfUrl, '_blank');
    }

    const openJuniorUEC = () => {
        const pdfUrl = 'https://drive.google.com/file/d/1qxDwT9GWKJWJ2ns9rwcss73w8zDEEhmM/view?usp=sharing';
        window.open(pdfUrl, '_blank');
    }

    const openUEC = () => {
        const pdfUrl = 'https://drive.google.com/file/d/1GW6f1S4FIwoC2u0YvwbepCx6nni7HIrt/view?usp=sharing';
        window.open(pdfUrl, '_blank');
    }

    return (
        <>
            <div className="files">
                <div className="files-block">
                    <h1>Exams</h1>
                    <div className="small-file-container">
                        <div className="small-file-block" onClick={openUPSR}>
                            UPSR
                        </div>
                        <div className="small-file-block" onClick={openJuniorUEC}>
                            Junior UEC
                        </div>
                        <div className="small-file-block" onClick={openUEC}>
                            UEC
                        </div>
                    </div>
                </div>
                <div className="files-block">
                    <h1>Olympiad Competitions Certs</h1>
                    <div className="small-file-container">
                        <div className="small-file-block" onClick={oepnBIMO}>
                            BIMO
                        </div>
                        <div className="small-file-block" onClick={openAPIO}>
                            APIO
                        </div>
                    </div>
                </div>
                <div className="files-block">
                    <h1>Academic and Co-curricular Activities Record</h1>
                    <div className="small-file-container">
                        <div className="small-file-block" onClick={openJuniorRecord}>
                            Junior
                        </div>
                        <div className="small-file-block" onClick={openSeniorRecord}>
                            Senior
                        </div>
                    </div>
                </div>
                <div className="files-block" >
                    <h1>Academic Ranking</h1>
                    <div className="small-file-container">
                        <div className="small-file-block" onClick={openRanking}>
                            Senior
                        </div>
                    </div>
                </div>
                <div className="files-block">
                    <h1>Recommendation Letter</h1>
                    <div className="small-file-container">
                        <div className="small-file-block" onClick={openRcmLetter}>
                            Chemistry Teacher
                        </div>
                        <div className="small-file-block">
                            Junior UEC
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}