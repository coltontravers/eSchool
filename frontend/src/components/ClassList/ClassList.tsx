import React, { FunctionComponent } from "react";
import tw, { css } from "twin.macro";
import Widget from "../Widget/Widget";
import DetailsList from "./DetailsList/DetailsList";
import ClassInfo from "./ClassInfo/ClassInfo";
import ClassListTypes, { defaultProps } from "./classList.types";

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

const ClassList: FunctionComponent<ClassListTypes> = ({ showDetails }) => (
    <div css={[tw`grid grid-cols-8 -m-oneThird p-oneThird`]}>
        {classes.map(
            (
                { name, teacher, grade, time, recentGrades, upcoming, files },
                index
            ) => {
                return (
                    <Widget
                        shadow="medium"
                        css={[
                            tw`flex flex-col sm:col-span-4 lg:col-span-3 xxl:col-span-2 m-half`
                        ]}
                        round
                        key={`${name}-${time}-${index}`}
                    >
                        <div css={[tw`bg-tertiary-light w-full`]}>
                            <ClassInfo
                                name={name}
                                teacher={teacher}
                                grade={grade}
                                time={time}
                            />
                        </div>
                        {showDetails && (
                            <div css={[tw`flex flex-row`]}>
                                <div
                                    css={[
                                        tw`flex-1 text-center bg-tertiary-light bg-opacity-25`
                                    ]}
                                >
                                    <DetailsList
                                        name="Grades"
                                        list={recentGrades}
                                    />
                                </div>
                                <div
                                    css={[
                                        tw`flex-1 text-center bg-tertiary-light bg-opacity-25`
                                    ]}
                                >
                                    <DetailsList
                                        name="Upcoming"
                                        list={upcoming}
                                    />
                                </div>
                                <div
                                    css={[
                                        tw`flex-1 text-center bg-tertiary-light bg-opacity-25`
                                    ]}
                                >
                                    <DetailsList name="Files" list={files} />
                                </div>
                            </div>
                        )}
                    </Widget>
                );
            }
        )}
    </div>
);

ClassList.defaultProps = defaultProps;

export default ClassList;
