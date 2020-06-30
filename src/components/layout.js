import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import styles from "./layout.module.css"

import { rhythm, scale } from "../utils/typography"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link className={styles.link} to={props.to}>
      {props.children}
    </Link>
  </li>
)

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    header = (
      <header style={{ marginBottom: `1.5rem` }}>
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to="/"
        >
          <h2
            style={{
              // ...scale(0.5),
              display: `inline`,
              fontFamily: `Courier Prime Code, Montserrat, sans-serif`,
            }}
          >
            {title}
          </h2>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/blog/">Blog</ListLink>
          <ListLink to="/about/">About</ListLink>
        </ul>
      </header>
    )
    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
