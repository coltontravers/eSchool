import React, { FunctionComponent } from "react";
import tw from "twin.macro";
import { useQuery } from "react-query";
import Widget from "../Widget/Widget";
import DetailsList from "./DetailsList/DetailsList";
import ClassInfo from "./ClassInfo/ClassInfo";
import { getClasses } from "../../api/class";
import ClassListTypes, { defaultProps } from "./classList.types";
import ClassInterface from "../../types/class";

const ClassList: FunctionComponent<ClassListTypes> = ({ showDetails }) => {
    const { data: classes } = useQuery<ClassInterface[], string>(
        "class-list",
        getClasses
    );

    return (
        <div css={[tw`grid grid-cols-12 -m-oneThird p-oneThird`]}>
            {classes?.map(
                (
                    {
                        name,
                        teacher,
                        grade,
                        time,
                        recentGrades,
                        upcoming,
                        files
                    },
                    index
                ) => {
                    return (
                        <Widget
                            shadow="medium"
                            css={[
                                tw`flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 m-half`
                            ]}
                            round
                            key={`${name}-${time}-${index}`}
                        >
                            <div css={[tw`w-full`]}>
                                <ClassInfo
                                    name={name}
                                    teacher={teacher}
                                    grade={grade}
                                    time={time}
                                />
                            </div>
                            {showDetails && (
                                <div css={[tw`flex flex-row`]}>
                                    <div css={[tw`flex-1 text-center`]}>
                                        <DetailsList
                                            name="Grades"
                                            list={recentGrades}
                                        />
                                    </div>
                                    <div css={[tw`flex-1 text-center`]}>
                                        <DetailsList
                                            name="Upcoming"
                                            list={upcoming}
                                        />
                                    </div>
                                    <div css={[tw`flex-1 text-center`]}>
                                        <DetailsList
                                            name="Files"
                                            list={files}
                                        />
                                    </div>
                                </div>
                            )}
                        </Widget>
                    );
                }
            )}
        </div>
    );
};

ClassList.defaultProps = defaultProps;

export default ClassList;
