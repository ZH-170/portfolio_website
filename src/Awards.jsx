import React from 'react';


export default function Awards(){
    const examsList = [
        {examName: "UPSR", year: "2018", result: "", cert: ""},
        {examName: "Junior UEC", year: "2021", result: "", cert: ""},
        {examName: "SPM", year: "2023", result: "", cert: ""},
        {examName: "Senior UEC", year: "2024", result: "", cert: ""}
    ];

    const awardList = [
        CP = [
            {competitionName: "NSSPC", year: "2024", level: "National", award: "Gold Medal"},
            {competitionName: "MCO", year: "2024", level: "", award: "Bronze Medal"}
        ],
        MO = [
            {competitionName: "IMONST", year: "2024", level: "", award: ""},
            {competitionName: "", year: "", level: "", award: ""}
        ],
        others = [
            {competitionName: "", year: "", level: "", award: ""}
        ]
    ];

    return (
        <>
        <section id="awards">
            <h3>A lot of awards...</h3>
        </section>
        </>
    );
}

//* can use this.setState => make the state of the cert be preview / clicked