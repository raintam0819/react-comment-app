import React, {Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import wrapWithLoadData from '../wrapWithLoadData'
import PropTypes from 'prop-types'

class CommentApp extends Component {
  // static propTypes = {
  //   data: PropTypes.any,
  //   saveData: PropTypes.func.isRequired
  // }

  // constructor(props){
  //   super(props)
  //   this.state={
  //     comments: props.data
  //   }
  // }

  // componentWillMount() {
  //   this._loadComments()
  // }

  // _loadComments(){
  //   let comments = localStorage.getItem('comments')
  //   if (comments) {
  //     comments = JSON.parse(comments)
  //     this.setState({comments})
  //   }
  // }

  // _saveComments(comments){
  //   localStorage.setItem('comments', JSON.stringify(comments))
  // }

  // handleSubmitComment(comment) {
  //   console.log(comment);
  //   if (!comment) return
  //   if (!comment.username) return alert('请输入用户名')
  //   if (!comment.content) return alert('请输入评论内容')
  //   this.state.comments.push(comment)
  //   const comments = this.state.comments
  //   this.setState({comments})
  //   // this._saveComments(comments)
  //   this.props.saveData(comments)
  // }

  // handleDeleteComment(index) {
  //   console.log(index)
  //   const comments = this.state.comments
  //   comments.splice(index, 1)
  //   this.setState({comments})
  //   // this._saveComments(comments)
  //   this.props.saveData(comments)
  // }

  // onSubmit={this.handleSubmitComment.bind(this)}
  // comments={this.state.comments} onDeleteComment={this.handleDeleteComment.bind(this)}
  render(){
    return (
      <div className='wrapper'>
        <CommentInput />
        <CommentList />
      </div>
    )
  }
}

CommentApp = wrapWithLoadData(CommentApp, 'comments')

export default CommentApp