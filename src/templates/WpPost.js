import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query ($id: String) {
    wpPost(id: { eq: $id }) {
      id
      title
      content
    }
  }
`

const WpPost = ({
    data: {
        wpPost: { title, content, id },
    },
}) => {
    return (
        <div className={`post-${id}`}>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    )
}

export default WpPost