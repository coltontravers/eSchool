import React, { FunctionComponent } from "react";
import tw, { css } from "twin.macro";
import Widget from "../../components/Widget/Widget";
import PageWrapper from "../../components/layout/PageWrapper/PageWrapper";
import ClassList from "../../components/ClassList/ClassList";

export const Classes: FunctionComponent = () => {
    return (
        <PageWrapper>
            <div css={[tw`grid grid-cols-8 grid-rows-2 gap-double`]}>
                <div css={[tw`col-span-5`]}>
                    <ClassList />
                </div>
                <div css={[tw`col-span-3`]}>
                    <Widget shadow="medium">Calendar</Widget>
                </div>

                <div css={[tw`col-span-8 grid grid-cols-3 gap-full`]}>
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
