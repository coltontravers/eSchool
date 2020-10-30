import Document from "next/document";
import { ServerStyleSheet } from "styled-components";
import tw from "twin.macro";

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(
                            <body css={tw`h-full font-sans antialiased`}>
                                <App {...props} />
                            </body>
                        )
                });
            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            };
        } finally {
            sheet.seal();
        }
    }
}
