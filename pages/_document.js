import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body className='w-500 h-600 bg-gray-300'>                                                           
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument