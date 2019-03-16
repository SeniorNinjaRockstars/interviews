import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Tabs from "../components/Tabs"
import Main from "../components/Main"
import Badge from "../components/Badge/Badge";
import Card from "../components/Card/Card";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Browse questions</h1>
    <Tabs />
    <Main>
      <p>23 questions</p>
      <Badge text="JavaScript" />
      <Badge text="Python" />
      <Badge text="PHP" />
      
      <Card>
        Hello world
      </Card>

      <Card>
        Lorem ipsum
      </Card>
    </Main>
  </Layout>
)

export default IndexPage
