import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

const BASE_URL = "";
const APP_ID = "";

const mapStateToProps = (state) => {
  return {
    blog: state.blog.blog,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAPI: () => {
      axios
        .get(
          `${BASE_URL}`,
          { headers: { "app-id": APP_ID } },
          { delayed: true }
        )
        .then(function (response) {
          // handle success
          dispatch({ type: "BLOG", payload: response.data.data });
        })
        .catch(function (error) {
          // handle error
          console.log(error.response);
        });
    },
  };
};

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: this.props.blog,
      perPage: 5,
      currentPage: 1,
      pageCount: 5,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
      currentPage: selectedPage,
      offset: offset,
      pageCount: Math.ceil(this.props.blog.length / this.state.perPage),
    });
  };

  componentDidMount() {
    this.props.getAPI();
  }

  render() {
    const slice = this.props.blog.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );
    return (
      <div>
        <div className="section-vcardbody section-page" id="page-blog">
          <div className="section-blog">
            {/* Section title */}
            <h2 className="section-title">Blog</h2>
            {/* /Section title */}

            {/* BLOG POSTS */}
            <div className="blog-posts">
              {/* blog-item */}
              {slice.map((data, key) => {
                return (
                  <div className="blog-item" key={key}>
                    <div className="blog-item-wrapper">
                      {/* blog item thumbnail */}
                      <div className="blog-item-thumb">
                        <img style={{ height: 200 }} src={data.image} alt="" />
                      </div>
                      {/* /blog item thumbnail */}
                      {/* Blog item - infos */}
                      <div className="blog-item-infos">
                        {/* blog-item-title */}
                        <div className="blog-item-title-wrapper">
                          <h2 className="blog-item-title title-border">
                            {data.id}
                          </h2>
                        </div>
                        {/* /blog-item-title */}
                        {/* blog item - description */}
                        <div className="blog-item-description">
                          <p>{data.text}</p>
                        </div>
                        {/* /blog-item-description */}
                        {/* blog item - link */}
                        <div className="blog-item-link">
                          {/* <a href="single.html" className="btn btn-default loadPost">See More</a> */}
                        </div>
                        {/* /blog item - link */}
                      </div>
                      {/* /blog item - infos */}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* <BlogIsi /> */}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
