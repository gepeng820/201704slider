import React from 'react';
import {Link,Route} from 'react-router-dom';
import UserList from "./UserList";
import UserAdd from "./UserAdd";
import UserDetail from "./UserDetail";
export default class User extends React.Component{
  render(){
    return (
      <div className="row">
        <div className="col-md-4">
          <ul className="nav nav-pills nav-stacked">
            <li><Link to="/user/list">用户列表</Link></li>
            <li><Link to="/user/add">新增用户</Link></li>
          </ul>
        </div>
        <div className="col-md-8">
          <Route path="/user/list" component={UserList}/>
          <Route path="/user/add" component={UserAdd}/>
          <Route path="/user/detail/:id" component={UserDetail}/>
        </div>
      </div>
    )
  }
}