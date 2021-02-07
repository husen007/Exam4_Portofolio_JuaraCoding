import React from "react";
import { connect } from "react-redux";
// import { useParams } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    blog: state.blog.blog,
  };
};
function BodyBlog(props) {
  return (
    <div>
      <div
        className="section-vcardbody section-page section-page-single"
        id="page-blog-single"
      >
        <div className="section-blog-single">
          {/* Load the single.html content via AJAX */}
          <div id="postHere" />
          {/* /Load the single.html content via AJAX */}
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(BodyBlog);
