import React, { FunctionComponent } from "react";
import tw, { css, TwStyle } from "twin.macro";
import Widget from "../Widget/Widget";
import DetailsList from "./DetailsList/DetailsList";
import ClassInfo from "./ClassInfo/ClassInfo";

const classListHeight = css`
    max-height: 70vh;
    min-height: 250px;
    overflow-y: auto;
`;

const recentGradesArr = [
    {
        name: "Assignment 1",
        grade: "95"
    },
    {
        name: "Assignment 2",
        grade: "73"
    },
    {
        name: "Assignment 3",
        grade: "87"
    },
    {
        name: "Assignment 4",
        grade: "51"
    }
];

const upcomingArr = [
    {
        name: "Test 1",
        date: "8/22"
    },
    {
        name: "Test 2",
        date: "8/24"
    },
    {
        name: "Test 3",
        date: "8/27"
    },
    {
        name: "Test 4",
        date: "8/29"
    }
];

const filesArr = [
    {
        name: "Pdf 1"
    },
    {
        name: "Pdf 2"
    },
    {
        name: "Pdf 3"
    },
    {
        name: "Pdf 4"
    }
];

const classes = [
    {
        name: "English",
        teacher: "Colton Travers",
        grade: "a+",
        time: "8am - 9pm",
        recentGrades: recentGradesArr,
        upcoming: upcomingArr,
        files: filesArr
    },
    {
        name: "English",
        teacher: "Colton Travers",
        grade: "a+",
        time: "8am - 9pm",
        recentGrades: recentGradesArr,
        upcoming: upcomingArr,
        files: filesArr
    },
    {
        name: "English",
        teacher: "Colton Travers",
        grade: "a+",
        time: "8am - 9pm",
        recentGrades: recentGradesArr,
        upcoming: upcomingArr,
        files: filesArr
    },
    {
        name: "English",
        teacher: "Colton Travers",
        grade: "a+",
        time: "8am - 9pm",
        recentGrades: recentGradesArr,
        upcoming: upcomingArr,
        files: filesArr
    },
    {
        name: "English",
        teacher: "Colton Travers",
        grade: "a+",
        time: "8am - 9pm",
        recentGrades: recentGradesArr,
        upcoming: upcomingArr,
        files: filesArr
    },
    {
        name: "English",
        teacher: "Colton Travers",
        grade: "a+",
        time: "8am - 9pm",
        recentGrades: recentGradesArr,
        upcoming: upcomingArr,
        files: filesArr
    }
];

const generateMargin = (
    index: number,
    classesAvail: typeof classes
): TwStyle => {
    if (!index) {
        return tw`mb-full`;
    }
    if (index === classesAvail.length - 1) {
        return tw`mt-full`;
    }

    return tw`my-full`;
};

const ClassList: FunctionComponent = () => (
    <div css={[tw`-m-oneThird p-oneThird overflow-y-scroll`, classListHeight]}>
        {classes.map(
            (
                { name, teacher, grade, time, recentGrades, upcoming, files },
                index
            ) => {
                return (
                    <Widget
                        shadow="medium"
                        css={[
                            tw`flex flex-row`,
                            generateMargin(index, classes)
                        ]}
                        key={`${name}-${time}-${index}`}
                    >
                        <div css={[tw`w-3/12 bg-tertiary-light`]}>
                            <ClassInfo
                                name={name}
                                teacher={teacher}
                                grade={grade}
                                time={time}
                            />
                        </div>
                        <div css={[tw`flex-1 text-center`]}>
                            <DetailsList name="Grades" list={recentGrades} />
                        </div>
                        <div css={[tw`flex-1 text-center`]}>
                            <DetailsList name="Upcoming" list={upcoming} />
                        </div>
                        <div css={[tw`flex-1 text-center`]}>
                            <DetailsList name="Files" list={files} />
                        </div>
                    </Widget>
                );
            }
        )}
    </div>
);

// ClassList.defaultProps = defaultProps;

export default ClassList;
