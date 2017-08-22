import React from 'react'
import PressArticle from './PressArticle'


class PressPage extends React.Component {
  render() {
    return (
       <div className="mw8 db center">
        <article className="pv4-ns ph5 mt4 w-100 dib f6 v-top">
          <h1 className="primary">Press coverage</h1>
          <h4>Press Releases, News, Informations &amp; Resources</h4>
          <div className="mv5 mw7 ">
          <PressArticle
          Title='Bitcoin soars to record high value'
          Description='The virtual currency reached $3,451.86 (£2,651) per coin in Monday trade, according to the Coindesk Bitcoin Price Index.'
          img='https://lh3.googleusercontent.com/YkvNw6IQ4J5NjeCOETH0qgUjtz7v5zLqaiT8BFtX1_QYffYXwvnl02WNaoNRtWWzJNs4=w300'
          />

          <PressArticle Title='This prop title'
          Description='This props description'
          img='http://i.cdn.cnn.com/cnn/.e/img/3.0/global/misc/cnn-logo.png'
          />

          <PressArticle Title='This prop title'
          Description='This props description'
          img='https://yt3.ggpht.com/-ZpKzkVykzf0/AAAAAAAAAAI/AAAAAAAAAAA/PPtEGe5Byss/s900-c-k-no-mo-rj-c0xffffff/photo.jpg'
          />

          <PressArticle Title='This prop title'
           Description='This props description'
           img='https://lh3.googleusercontent.com/YkvNw6IQ4J5NjeCOETH0qgUjtz7v5zLqaiT8BFtX1_QYffYXwvnl02WNaoNRtWWzJNs4=w300'
          />
          </div>
        </article>
      </div>
    )
  }
}
export default PressPage

