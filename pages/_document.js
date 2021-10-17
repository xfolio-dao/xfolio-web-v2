import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html style={{ width:'500px', height:'600px' }}>
        <Head />
        <body style={{ width:'500px', height:'600px' }}>                                                           
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument