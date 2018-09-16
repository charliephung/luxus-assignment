import React, { Component } from "react";
import Section from "components/common/section/Section";
import Select from "components/common/selector/Select";
import Container from "components/common/section/Container";
import { withRouter } from "react-router-dom";
import Layout from "./Layout";

export class Main extends Component {
  componentDidMount() {
    this.props.history.push(`/all`);
  }
  onChange = state => {
    this.props.history.push(`/${state.value}`);
  };

  render() {
    return (
      <Section>
        <Container className="u-pad-3">
          <Select
            onChange={this.onChange}
            defaultValue={{
              display: "All",
              value: "all"
            }}
          >
            <Select.Option value="all">All</Select.Option>
            <Select.Option value="meal">Meal type</Select.Option>
            <Select.Option value="ingredient">Ingredients</Select.Option>
            <Select.Option value="world">World cuisine</Select.Option>
            <Select.Option value="cooking">Cooking style</Select.Option>
          </Select>
        </Container>
        <div className="color-bg-lightgrey">
          <Layout match={{ params: { id: "" }, url: "" }} />
        </div>
      </Section>
    );
  }
}

export default withRouter(Main);
