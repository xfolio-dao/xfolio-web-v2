import React, { ReactElement } from 'react'
import Document, { Html, Head, Main, NextScript, DocumentInitialProps, DocumentContext } from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render():ReactElement {
        return (
            <Html style={{ width:'500px', height:'600px', overflow:'auto' }}>
                <Head />
                <body style={{ width:'500px', height:'600px', overflow:'auto' }}>                                                           
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}