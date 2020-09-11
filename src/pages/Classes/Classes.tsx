import React, { FunctionComponent } from "react";
import tw from "twin.macro";
import Widget from "../../components/Widget/Widget";
import PageWrapper from "../../components/layout/PageWrapper/PageWrapper";
import ClassList from "../../components/ClassList/ClassList";
import Calendar from "../../components/Calendar/Calendar";

export const Classes: FunctionComponent = () => {
    return (
        <PageWrapper>
            <div css={[tw`grid grid-cols-8 grid-rows-2 gap-double`]}>
                <div css={[tw`col-span-8`]}>
                    <ClassList />
                </div>
                <div css={[tw`sm:col-span-8 lg:col-span-3`]}>
                    <Widget shadow="medium">
                        <Calendar />
                    </Widget>
                </div>

                <div
                    css={[
                        tw`sm:col-span-8 lg:col-span-5 grid grid-cols-3 gap-full`
                    ]}
                >
                    <Widget shadow="medium">Recent Grades</Widget>
                    <Widget shadow="medium">Upcoming Activities</Widget>
                    <Widget shadow="medium">File Explorer</Widget>
                    <Widget shadow="medium">Something else</Widget>
                </div>
            </div>
        </PageWrapper>
    );
};

export default Classes;
