import React from 'react'


class PressArticle extends React.Component {
  render() {
    return (
            <a className="dt w-100 pb2 mv4 no-underline dim" target='blank' href="http://www.bbc.co.uk/news/technology-40848505">
              <div className="dtc w2 w3-ns v-top">
                <img className="db br2 w2 w3-ns h2 h3-ns" src={this.props.img} role="presentation" />
              </div>
              <div className="dtc v-top pl3">
                <h1 className="f6 f5-ns fw6 lh-title black mv0">{this.props.Title}</h1>
                <h2 className="f6 fw4 mt2 mb0">{this.props.Description}</h2>
              </div>
            </a>
    )
  }
}
export default PressArticle

