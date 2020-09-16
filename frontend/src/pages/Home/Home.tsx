import React, { FunctionComponent } from "react";
import tw from "twin.macro";
import PageWrapper from "../../components/layout/PageWrapper/PageWrapper";
import ClassList from "../../components/ClassList/ClassList";

export const Home: FunctionComponent = () => {
    return (
        <PageWrapper>
            <div css={[tw`grid grid-cols-12`]}>
                <div css={[tw`col-span-12 xl:col-span-9`]}>
                    <div>
                        <ClassList />
                    </div>
                </div>
                <div css={[tw`col-span-12 xl:col-span-3`]} />
            </div>
        </PageWrapper>
    );
};

export default Home;
